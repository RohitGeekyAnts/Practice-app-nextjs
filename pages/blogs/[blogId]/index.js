import { useRouter } from "next/router";

export default function BlogPage({ blog }) {
  const router = useRouter();

  // Handle loading state when fallback is enabled
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <br></br>
      <p>{blog.body}</p>
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
    `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
  );
  const blog = await res.json();

  return { props: { blog } };
}
