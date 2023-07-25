export default function SearchBar(datos) {
   return (
      <div>
         <input type='search' id="input"/>
         <button onClick={datos.onSearch}>Agregar</button>
      </div>
   );
}
