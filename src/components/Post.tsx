import '@kitajs/html/register';

export function Post(props: {
  post: { id?: number; title: string; body: string; userId: number };
}) {
  const { post } = props;
  return (
    <div>
      hello world
      <h1 class="text-xl" safe>
        {post.title}
      </h1>
      <hr />
      <span class="text-sm">{post.userId}</span>
      <p safe>{post.body}</p>
      {post.id && <code>{post.id}</code>}
    </div>
  );
}
