import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { idToEdit } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const obj = { name, email, message, id: idToEdit };

    fetch("https://mongoback.onrender.com/updateData", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result === "Data Updated") {
          navigate("/show");
        }
      });
  }

  useEffect(() => {
    if (idToEdit) {
      fetch("https://mongoback.onrender.comˀˀˀ/getDataById/" + idToEdit)
        .then((response) => response.json())
        .then((result) => {
          setName(result.name);
          setEmail(result.email);
          setMessage(result.message);
        });
    }
  }, [idToEdit]);

  return (
    <main>
      <h2 className="font-bold text-2xl mb-6">Edit message</h2>

      <form
        className="bg-slate-300 p-4 rounded-md"
        action=""
        onSubmit={handleSubmit}
        method="post"
      >
        <input
          className="px-4 py-3 my-3 rounded-md w-full"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <br />
        <input
          className="px-4 py-3 my-3 rounded-md w-full"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <br />
        <textarea
          className="px-4 py-3 my-3 rounded-md w-full"
          name=""
          placeholder="Enter your message"
          id=""
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        ></textarea>
        <br />
        <button type="submit" className="bg-indigo-400 text-white px-4 py-2 rounded-md w-full border-solid hover:border-solid hover:border-indigo-400 hover:bg-white hover:text-black">Update Message</button>
      </form>

      <Link to="/show" className="mt-2 inline-block hover:underline"> &laquo; Back to Messages</Link>
    </main>
  );
}

export default Edit;
