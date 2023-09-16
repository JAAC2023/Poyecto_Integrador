import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";


export default function Nav({ onSearch }) {
  
  const idRandom = Math.floor((Math.random()*825)+1)

  return (
    <div className={styles.nav}>
      <button className={styles.boton_ran} onClick={() => onSearch(idRandom)}>Random</button>

      <NavLink to="/favorites">
        <button className={styles.boton_fav}>Favorites</button>
      </NavLink>

      <NavLink to="/home">
        <button className={styles.boton_home} >Home</button>
      </NavLink>

      <NavLink to="/about">
        <button className={styles.boton_about}>About</button>
      </NavLink>

      <SearchBar onSearch={onSearch} />
    </div>
  );
}
