import { type PropsWithChildren } from '@kitajs/html';
import './styles/index.css';

export function Index({ children }: PropsWithChildren) {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My App</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
