import '@kitajs/html/register';

export function Json(content: string) {
  return <pre safe>{JSON.stringify(content, null, 2)}</pre>;
}
