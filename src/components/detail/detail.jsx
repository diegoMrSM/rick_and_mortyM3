import React, {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom" // ver para que es el Use params
import styles from "./Detail.module.css"

export default function Detail(props){
    const navigate = useNavigate()
    const {detailId} = useParams() //captura el parametro enviado en la ruta que dirije a este componente
    const [character, setCharacter] = useState({}) 
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((res)=> res.json())
        .then((data)=> {data.name ? setCharacter(data): alert("No hay personajes con ese nombre")})
        .catch((err)=> {console.log(err)
        alert("algo salio mal")})
    }, [])// repasar esta parte en caso de poner detailId dentro de los corchetes para que sea "dinamico"
    return(
        <div className={styles.container}>
            <button onClick={()=> navigate("/home")}>Regresar</button>
         <div className={styles.contentInfo }> {/*para separar en dos , izq el contenid, derecha imagen*/ }
           <div>
            <h1>Name: {character.name}</h1>
            <h1>Status: {character.status}</h1>
            <h1>Specie: {character.species}</h1>
            <h1>Gender: {character.gender}</h1>
            <h1>Origin: {character.origin?.name}</h1> {/* ¿POR QUÉ para un objeto debe ser con operador ternario"?" ? */}
            <h1>Location: {character.location?.name}</h1>
           </div>
            <img src={character.image} alt="" />
         </div> 
        </div>
        
    )
}