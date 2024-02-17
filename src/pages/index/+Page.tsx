import * as elements from 'typed-html';
import { Data } from '../../components/Data';
import './styles.css';

export async function Page() {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My App</title>
      </head>
      <body>
        <h1 class="text-3xl font-bold">Hello World</h1>
        <h3 class="text-xl">This is server-side rendered</h3>
        <br />
        It uses <a href="https://github.com/nicojs/typed-html">typed-html</a> to render jsx as
        strings (like templating).
        <br />
        And it uses Tailwind too.
        <br />
        <br />
        {await Data()}
      </body>
    </html>
  );
}
