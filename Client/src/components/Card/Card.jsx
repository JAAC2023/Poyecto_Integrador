import styles from "../Card/Card.module.css"
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react"; //React.useState
import { addFav, removeFav } from "../../Redux/action";

function Card({ id, name, image, gender, status, species, origin, onClose }) {

   const [isFav, setIsFav] = useState(false);
   const location = useLocation();
   const dispatch = useDispatch();
   const removeFavorite = (id) => dispatch(removeFav(id));
   const addFavorite = (character) => dispatch(addFav(character));

   const handleFavorite = () => {
      if (isFav) {
         removeFavorite(id);
         setIsFav(false);
      } else {
         addFavorite({ id, name, image, gender, status, species, origin, });
         setIsFav(true);
      }
   };

   return (
      <div id={id} className={styles.card}>

         <h1 className={styles.id}>{id}</h1>
         <h1 className={styles.nombre}>{name}</h1>

         {location.pathname === "/home" ? (
            isFav ? <button 
            onClick={handleFavorite} 
            className={styles.boton_Fav}>❤️</button>
            : <button 
            onClick={handleFavorite}
            className={styles.boton_Fav}>🤍</button>) : ""}

         {location.pathname === "/favorites" ? (
            <button className={styles.boton_Fav_solo}>❤️</button>) : ""}
         
         <button 
         onClick={() => onClose(id)} 
         className={styles.boton_cerrar}>❌</button>
         
         <NavLink to={`/detail/${id}`}>
            <img src={image} alt="" className={styles.imagen}/>
         </NavLink>
         
      </div>
   );
}

export default Card;








// const mapStateToProps = (state) =>{
//    return{
//       myFavorites: state.myFavorites
//    }
// }

// const mapDispatchToProps = (dispatch) => {
//    return {
//       addFavorite: (character) => {dispatch(addFav(character))},
//       removeFavorite: (id) => {dispatch(removeFav(id))}
//    }
// }

// export default connect (mapStateToProps, mapDispatchToProps)(Card);
