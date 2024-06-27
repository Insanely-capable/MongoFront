import { useEffect, useState } from "react";
import Message from "./Message";
import { useNavigate } from "react-router-dom";

function Show() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://mongoback.onrender.com/showData");
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  function handleDelete(e, id) {
    fetch("https://mongoback.onrender.com/deleteData", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ idToDelete: id }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result === "Data Deleted")
          window.location.href = "http://localhost:5173/show";
      });
  }

  let sno = 1;

  return (
    <>
      <main>
        <h3 className="section-heading">Saved Messages</h3>
        <div className="table w-2/3">
          <table className="w-full">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((dt, index) => {
                  return (
                    <Message
                      key={index}
                      data={dt}
                      sno={sno++}
                      handleDelete={handleDelete}
                    />
                  );
                })
              ) : (
                <tr>
                  <th colSpan="5">No Messages to Show</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default Show;
