import * as dotenv from 'dotenv';
import express from 'express';
import { renderPage } from 'vike/server';
import { type ExtendedContext } from '../types';

const pwd = process.cwd();
const isProduction = process.env.NODE_ENV?.startsWith('production');

if (!isProduction) {
  dotenv.config();
}

async function startServer() {
  const app = express();

  if (isProduction) {
    app.use(express.static(`${pwd}/dist/client`));
  } else {
    // Instantiate Vite's development server and integrate its middleware to our server.
    // ⚠️ We should instantiate it *only* in development. (It isn't needed in production
    // and would unnecessarily bloat our server in production.)
    const vite = await import('vite');
    const viteDevMiddleware = (
      await vite.createServer({
        root: pwd,
        server: { middlewareMode: true },
      })
    ).middlewares;
    app.use(viteDevMiddleware);
  }

  /* Other middleware */
  app.use(express.urlencoded());

  /**
   * Vike route
   *
   * @link {@see https://vike.dev}
   */
  app.all('*', async (request, response, next) => {
    const extendedPageContext: Partial<ExtendedContext> = {
      httpMethod: request.method,
      requestBody: request.body,
      serverUrl: `${request.protocol}://${request.get('host')}`,
      urlOriginal: request.originalUrl,
    };

    const pageContext = await renderPage(extendedPageContext);
    if (pageContext.httpResponse === null) {
      next();
      return;
    }

    const { statusCode, contentType, headers } = pageContext.httpResponse;

    headers.forEach(([name, value]) => {
      response.set(name, value);
    });

    response.status(statusCode).type(contentType);
    pageContext.httpResponse.pipe(response);
  });

  app.listen(process.env.PORT ? Number(process.env.PORT) : 3000, () => {
    // eslint-disable-next-line no-console
    console.log('Server listening on http://localhost:3000');
  });
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
startServer();
