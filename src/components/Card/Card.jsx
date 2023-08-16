import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react"; //React.useState
import { addFav, removeFav } from "../../Redux/action";

function Card({ id, name, image, gender, status, onClose }) {
   const [isFav, setIsFav] = useState(false);

   const location = useLocation();

   const dispatch = useDispatch();

   const myFavorites = useSelector((state) => state.myFavorites);

   const removeFavorite = (id) => {
      dispatch(removeFav(id));
   };

   const addFavorite = (character) => {
      dispatch(addFav(character));
   };

   const handleFavorite = () => {
      if (isFav) {
         removeFavorite(id);
         setIsFav(false);
      } else {
         addFavorite({ id, name, image, gender, status });
         setIsFav(true);
      }
   };

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
         setIsFav(true);
         }
      });
      // eslint-disable-next-line
   }, [myFavorites]);

   return (
      <div id={id}>
         {location.pathname === "/home" ? (
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
         ) : (
         ""
         )}

         <button onClick={() => onClose(id)}>❌</button>

         <NavLink to={`/detail/${id}`}>
         <h1>
            {id}: {name}
         </h1>
         </NavLink>

         <NavLink to={`/detail/${id}`}>
         <img src={image} alt="" />
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
