
import { useEffect, useState } from "react";
import Blog from "./Blog.jsx";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [searchAuthor, setSearchAuthor] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = (author = "") => {
    let url = `https://mongoback.onrender.com/getBlogs`;
    if (author) {
      url += `?author=${encodeURIComponent(author)}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBlogs(result);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchAuthor(value);
    fetchBlogs(value); 
  };

  return (
    <>
      <main className="flex flex-wrap">
        <input
          type="text"
          placeholder="Search by Author"
          value={searchAuthor}
          onChange={handleSearchChange}
          className="p-2 m-2 rounded border"
        />
        {blogs.length > 0
          ? blogs.map((blog, index) => {
              return <Blog key={index} blog={blog} />;
            })
          : searchAuthor.trim() 
            ? "No blogs found."
            : null}
      </main>
    </>
  );
}

export default App;
