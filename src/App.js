import './App.css';
import axios from 'axios'
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import {useState} from 'react';


function App() {
   
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]); 
            } else {
               alert('¡Por favor, ingresa una ID!');
            }
      });
      
   }

   function onClose (id) {

      const characterFilter = characters.filter(character => 
         character.id !== Number(id));

         setCharacters(characterFilter)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
