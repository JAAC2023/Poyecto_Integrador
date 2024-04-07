import styles from "../Favorites/Favorites.module.css"
import React, { useState } from "react";
import { /*connect*/ useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { removeFav, filterCards, orderCards } from "../../Redux/action";

function Favorites() {
  const genders = ["Genders", "Male", "Female", "Genderless", "unknown"];
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const removeFavorite = (id) => {
    dispatch(removeFav(id));
  };

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className={styles.favoritos}>
      <h1 className={styles.titulo}>FAVO  RITES</h1>

      <select className={styles.acendente} onChange={handleOrder}>
        <option className={styles.opcion} value="A">🚩... Ascendent</option>
        <option className={styles.opcion} value="D">🚩... Descendent</option>
      </select>

      <select className={styles.genders} onChange={handleFilter}>
        {genders.map((option) => (
          <option className={styles.opcion} key={option} value={option}>
            🚩... {option}
          </option>
        ))}
      </select>
        

        {myFavorites?.map(({ id, name, image, gender, status, species, origin }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              gender={gender}
              status={status}
              species={species}
              origin={origin}
              onClose={() => removeFavorite(id)}
            />
          );
        })}
    </div>
  );
}

export default Favorites;

// const mapStateToProps = (state)=> {
//     return {
//         myFavorites: state.myFavorites
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         removeFavorite: (id) => {dispatch(removeFav(id))}
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
