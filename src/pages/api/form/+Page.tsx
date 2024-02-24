import '@kitajs/html/register';
import { Post } from '../../../components/Post';
import { type ExtendedContext } from '../../../types';

export async function Page(context: ExtendedContext) {
  const inputData = context.requestBody;

  const result = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(inputData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const data = await result.json();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return <Post post={data} />;
}
