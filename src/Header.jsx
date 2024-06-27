import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <h2>
        <Link to="/" className="text-black font-black text-4xl hover:underline">
          Full Stack App
        </Link>
      </h2>
      <nav>
        <ul>
          <li>
            <Link
              to="/addBlog"
              className="bg-slate-500 text-white rounded hover:bg-white hover:text-black border-solid hover:border-solid hover:border-slate-500"
            >
              Add Blog
            </Link>
          </li>
          <li>
            <Link
              to="/addMessage"
              className="bg-slate-500 text-white rounded hover:bg-white hover:text-black border-solid hover:border-solid hover:border-slate-500"
            >
              Add Message
            </Link>
          </li>
          <li>
            <Link
              to="/show"
              className="bg-slate-500 text-white rounded hover:bg-white hover:text-black border-solid hover:border-solid hover:border-slate-500"
            >
              ShowMessage
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
