import { useState } from "react";

function AddMessage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const obj = { name, email, message };

    fetch("http://localhost:4000/saveData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result === "Data Submitted") {
          setResponse(true);

          //CLEARING THE FORM
          setName("");
          setEmail("");
          setMessage("");
        }
      });
  }

  return (
    <>
      <main>
        {response ? <h3>Thank you for your message</h3> : ""}
        <h2 className="font-bold text-2xl mb-6">Send a message</h2>

        <form className="bg-slate-300 p-4 rounded-md" action="" onSubmit={handleSubmit} method="post">
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
          <button type="submit" className="bg-indigo-400 text-white px-4 py-2 rounded-md w-full border-solid hover:border-solid hover:border-indigo-400 hover:bg-white hover:text-black">Send Message</button>
        </form>
      </main>
    </>
  );
}

export default AddMessage;
