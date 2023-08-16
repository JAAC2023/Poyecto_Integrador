import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <div>
      <NavLink to="/favorites">
        <button>Favorites</button>
      </NavLink>

      <NavLink to="/home">
        <button>Home</button>
      </NavLink>

      <NavLink to="/about">
        <button>About</button>
      </NavLink>

      <SearchBar onSearch={onSearch} />
    </div>
  );
}
