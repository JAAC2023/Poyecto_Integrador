
export default function Card(datos) {
   return (
      <div id={datos.id}>
         <button onClick={datos.onClose}>X</button>
         {/* <h2>Id: {datos.id}</h2> */}
         <h2>{datos.name}</h2>
         <h2>{datos.status}</h2>
         <h2>{datos.species}</h2>
         <h2>{datos.gender}</h2>
         <h2>{datos.origin}</h2>
         <img src={datos.image} alt='imagen' />
      </div>
   );
}




