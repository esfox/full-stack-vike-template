import * as elements from 'typed-html';

export function Json(content: string) {
  return <pre>{JSON.stringify(content, null, 2)}</pre>;
}
