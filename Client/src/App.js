
import styles from "./App.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites.jsx";

// const EMAIL = "jaac16@live.com";
// const PASSWORD = "123456";

function App() {

   const location = useLocation();
   const navigate = useNavigate(); 
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   useEffect(() => {
      // eslint-disable-next-line
      !access && navigate("/");
      // eslint-disable-next-line
   }, [access]);

   // function login({ email, password }) {
   //    if (email === EMAIL && password === PASSWORD) {
   //       setAccess(true);
   //       navigate("/home");
   //    } else {
   //       window.alert("Datos incorrectos, el usuario o la contraseña no coinciden");
   //    }
   // }

   //!______________________EXPRESS___________________________

   // function login({ email, password }) {
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`)
   //    .then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }

   // const onSearch = (id) => {
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`)
   //    .then(({data}) => {
   //          if (data.name){
   //             setCharacters((oldChars) => [...oldChars, data]);
   //          } 
   //          else {
   //             window.alert("¡Por favor, ingresa una ID!")
   //          };
   //    });
   // }

   //!______________________ASYNC AWAIT_________________________

   const login = async ({ email, password }) => {
      try {
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios (URL + `?email=${email}&password=${password}`);
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         window.alert (error)
      }
      
   }

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
            if (data.name){
               setCharacters((char) => [...char, data]);
            } 
      } catch (error) {
         window.alert ("No existe personaje")
      }
      
      
   }

   function onClose(id) {
      const characterFilter = characters.filter((character) => character.id !== Number(id));
      setCharacters(characterFilter);
   }


//______________________Estilos____________________________
   let estilos = styles.login

   if (location.pathname !== '/') {estilos = styles.app}
//_________________________________________________________
   
   return (
      <div className={estilos}>
         {location.pathname !== "/" && <Nav onSearch={onSearch} />}
         
         <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/" element={<Form login={login} />} />
            <Route path="/detail/:id" element={<Detail characters={characters}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
         </Routes>
      </div>
   );
}

export default App;
