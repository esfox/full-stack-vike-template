import { Json } from './Json';

export async function Data() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data: string = await response.json();

  return (
    <div>
      Here's some data from JSON Placeholder (loaded in server side).
      {Json(data)}
    </div>
  );
}
