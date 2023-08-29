import {useState} from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('');

   const [aux, setAux] = useState('')

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   const repetido = (id) => {
      setAux(id)
      if (id !== aux) onSearch(id)
   }

   return (
      <div>
         <input 
         type='number' 
         onChange={handleChange}
         className={styles.input}
         value={id}/>
         <button className={styles.boton} onClick={() => repetido(id)}>Agregar</button>
      </div>
   );
}
