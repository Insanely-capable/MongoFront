import { Link } from "react-router-dom";

function Blog({ blog }) {
  return (
    <>
      <section className="w-1/4 p-2 m-1 rounded bg-slate-200">
        <h3 className="font-bold text-xl mb-2">{blog.title}</h3>
        <p className="mb-1">
          Author: <em>{blog.author}</em>
        </p>
        <p>{blog.content.slice(0, 100) + "..."}</p>
        <Link>Read More &raquo;</Link>
      </section>
    </>
  );
}
export default Blog;
