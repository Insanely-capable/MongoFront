import { useState } from "react";

function AddBlog() {
  const [data, setData] = useState({
    title: "",
    author: "",
    content: "",
    image: null, // Add image field
  });

  function handleChange(e) {
    if (e.target.name === "image") {
      setData({ ...data, image: e.target.files[0] });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('author', data.author);
    formData.append('content', data.content);
    formData.append('image', data.image);

    fetch("http://localhost:4000/addBlog", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  }

  return (
    <>
      <main>
        <h2 className="font-bold text-2xl mb-6">Add a Blog</h2>

        <form
          action=""
          className="bg-slate-300 p-4 rounded-md"
          onSubmit={handleSubmit}
        >
          <input
            className="px-4 py-3 my-3 rounded-md w-full"
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Enter blog title"
          />
          <br />
          <input
            className="px-4 py-3 my-3 rounded-md w-full"
            type="text"
            name="author"
            onChange={handleChange}
            placeholder="Enter blog author"
          />
          <br />
          <textarea
            className="px-4 py-3 my-3 rounded-md w-full"
            name="content"
            onChange={handleChange}
            placeholder="Enter blog content"
          ></textarea>
          <br />
          <input
            className="px-4 py-3 my-3 rounded-md w-full"
            type="file"
            name="image"
            onChange={handleChange}
          />
          <br />
          <button
            type="submit"
            className="bg-indigo-400 text-white px-4 py-2 rounded-md w-full border-solid hover:border-solid hover:border-indigo-400 hover:bg-white hover:text-black"
          >
            Add Blog
          </button>
        </form>
      </main>
    </>
  );
}

export default AddBlog;
