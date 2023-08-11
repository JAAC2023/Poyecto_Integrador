import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Nav from './components/Nav';
import Cards from './components/Cards.jsx';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites.jsx';

const EMAIL = "jaac16@live.com";
const PASSWORD = "123456";


function App() {
   
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   let location = useLocation();
   let navigate = useNavigate();

   useEffect(() => {
      // eslint-disable-next-line
      !access && navigate("/");
      // eslint-disable-next-line
   }, [access]);

   function onSearch(id, string="all") {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
            if (data.name) {
               if(string !== "all"){
                  setCharacters(data);
               } else{
                  setCharacters([...characters, data]);
               }
            } else{
               window.alert('¡Por favor, ingresa una ID!');
            }
      });
      
   }

   function onClose (id) {
      const characterFilter = characters.filter(character => 
         character.id !== Number(id));
         setCharacters(characterFilter)
   }

   function login({ email, password }) {
      if (email === EMAIL && password === PASSWORD) {
         setAccess(true);
         navigate("/home");
      }
   }

   return (
      <div className='App'>
         {location.pathname !== "/" && <Nav onSearch={onSearch} />}

         <Routes>
            <Route path='/favorites' element={<Favorites></Favorites>} />
            <Route path='/' element={<Form login={login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail characters={characters} onSearch={onSearch} onClose={onClose} />} />
         </Routes>
      </div>
   );
}

export default App;
