import { NavLink, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../Redux/action";
import { connect } from "react-redux";
import { useState, useEffect } from "react";//React.useState

function Card({id, name, image, onClose, addFavorite, removeFavorite, myFavorites}) {
   
   const [ isFav, setIsFav ] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFavorite(id);
      } else {
         setIsFav(true);
         addFavorite({id, name, image,});
      }
   }

   const location = useLocation()
   console.log (location)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div id={id}>
         { location.pathname === '/home' ?
         isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>) : ''}
         
         <button onClick={()=> onClose(id)}>❌</button>

         <NavLink to={`/detail/${id}`}>
         <h2>{name}</h2>
         </NavLink>,

         <NavLink to={`/detail/${id}`}>
         <img src={image} alt='' />
         </NavLink>

      </div>
   );
}

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {dispatch(addFav(character))},
      removeFavorite: (id) => {dispatch(removeFav(id))}
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card);


