import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <header className="bg-white text-center text-black p-5">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-5xl">Dinespot</h1>
        <nav className="space-x-4">
          <Link to="/form" className="rounded-lg bg-gray-400 p-2 text-2xl">
            Add Restaurant
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
