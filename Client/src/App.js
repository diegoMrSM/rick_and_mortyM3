import './App.css'
import { useState, useEffect } from 'react'
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/searchBar/SearchBar.jsx' // porque se usa desde el Nav
import characters, { Rick } from './data.js'
import Nav from "./components/nav/Nav";
import {Routes, Route, useLocation, useNavigate}  from "react-router-dom"
import About from "./components/about/About";
import Detail from "./components/detail/detail" // por qué no puedo ponerle D mayuscula al archivo detail.jsx
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites"
import {Provider} from "redux"


function App () {
  const navigate = useNavigate()
  const location = useLocation() // Location para ver en qué ruta me encuentro
  const [characters, setCharacters] = useState([])
 /* const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 };*/
 const [acces, setAcces] = useState(false)
 const userName ="diego@henry.com"
 const password = "die123"

 const onSearch = (id) =>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)     //BUSCAMOS LA CARD POR ID CUANDO ESTAMOS EN EL NAV --> SearchBar  tiene un button que ejecuta esta funcion
    .then((res)=>res.json())// se parsea el objeot json a objeto Javascript para luego hacer lo que quiera con el, en este caso iterarlo
    .then((data)=>{(data.name ? characters.filter((char)=>             
      char.id === data.id).length === 0: "")                            // IMPORTANTE: (debuggear para ver como funciona)
      ? setCharacters([...characters, data]):alert("Pesonaje ya existe") // PARA VERIFICAR SI BUSCA AGREGAR UN PERSONAJE QUE YA FUE AGREGADO EN EL HOME
    })       //ese setCharacter de arriba es mas o menos como hacer un push al array characters               
    .catch((error)=>console.log(error)) 
 }
  
 const onClose = (id) =>{
  const filtered = characters.filter((char)=> char.id !==   id)
  setCharacters(filtered) //setCharacters setea el arrat characters para mostrar
 };

 const login = (userData) => {  //**(3)**
  if(userData.userName ===userName && userData.password === password){ //**(4)**
  setAcces(true)// USUARIO SE CONSIGUE ACCEDER 
  navigate("/home");   //**(4)**/    //  Y VA AL HOME
    }
 }

 useEffect(()=>{ !acces && navigate("/")},[acces]) //** (1)**//para que la aplicacion escuche cuando el usuario
                                                    // NO tenga acceso en el login, que lo redirija 
                                                    //a lo que la ruta diga segun el path="/" 
  return (
    <div className='App' style={{ padding: '25px' }}>
     {location.pathname !== "/" &&   <Nav onSearch={onSearch}/>}{/* para validar si NO HAY / entonces sí renderice el Nav*/}
    
      {/*<hr/>
      <div style={{display:"flex", justifyContent:"center"}}>
        <Card
          id = {Rick.id}
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />*/}
      <div>
        <Routes> {/* eje central de la aplicacion (las rutas)*/}
          <Route path="/" element={<Form login={login}/>}/> {/** (2)**/}
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/> {/**4**/}
          <Route path="/about" element={<About />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/detail/:detailId" element={<Detail/>}/>
        </Routes>
        
      </div>
      <hr />
      
    </div>
  )
}

export default App
