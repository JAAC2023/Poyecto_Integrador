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
    <div className={styles.div}>
      <h1 className={styles.FAVORITES}>FAVORITES</h1>

      <select onChange={handleOrder}>
        <option value="A">Ascendant</option>
        <option value="D">Falling</option>
      </select>

      <select onChange={handleFilter}>
        {genders.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

        {myFavorites?.map(({ id, name, image, gender, status }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              gender={gender}
              status={status}
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
