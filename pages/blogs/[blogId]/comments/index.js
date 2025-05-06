export default function Comments({ comments = [] }) {
  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} style={{ margin: 20 }}>
            {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await res.json();

  const paths = blogs.map((blog) => ({
    params: { blogId: blog.id.toString() },
  }));

  return { paths, fallback: true }; // Enable fallback for on-demand rendering
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${params.blogId}`
  );

  const comments = await res.json();

  return { props: { comments } };
}
