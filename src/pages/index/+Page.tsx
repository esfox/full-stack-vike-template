import '@kitajs/html/register';
import { Data } from '../../components/Data';
import { Form } from '../../components/Form';

export async function Page() {
  return (
    <>
      <h1 class="text-3xl font-bold">Hello World</h1>
      <h3 class="text-xl">This is server-side rendered</h3>
      <br />
      It uses{' '}
      <a href="https://github.com/kitajs/html" target="_blank" class="underline text-blue-500">
        @kitajs/html
      </a>{' '}
      to render jsx as strings (like templating).
      <br />
      And it uses Tailwind too.
      <br />
      <br />
      <Data />
      <br />
      <br />
      <Form />
      <br />
      <br />
      Go to{' '}
      <a hx-boost="true" href="/about" class="underline text-blue-500">
        About
      </a>
    </>
  );
}
