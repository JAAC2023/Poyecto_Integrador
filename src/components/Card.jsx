import { NavLink } from "react-router-dom";

export default function Card({id, name, image, onClose}) {
   return (
      <div id={id}>
         
         <button onClick={()=> onClose(id)}>X</button>,

         <NavLink to={`/detail/${id}`}>
         <h2>{name}</h2>
         </NavLink>,

         <NavLink to={`/detail/${id}`}>
         <img src={image} alt='' />
         </NavLink>

      </div>
   );
}




