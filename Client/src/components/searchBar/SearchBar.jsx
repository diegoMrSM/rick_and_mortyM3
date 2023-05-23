import { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
/*function handleOnSearch(){ //en caso de usar el handle... en onClick de button
   if(typeof props.onSearch ==="function"){
      const input = document.getElementById("inputID")
      props.onSearch(input.value);
   }
}*/ 
   const [character, setCharacter] = useState("")
   
   const handleInputChange = (event) => {
      const {value} = event.target
      //console.log(value)
      setCharacter(value)
   }

   return (
      <div className={styles.container}>
      <input type='search' onChange={handleInputChange}/>
      <button onClick={()=> props.onSearch(character)}>Agregar</button> {/* el onClick es un evenListener 
                                                               y TIENE UNA FUNCION DE CALLBACK 
                                                               PARA QUE NO SE EJECUTE INMEIDATAMENTE 
                                                               AL MONTARSE EL COMPONENTE*/}
      </div>
   );
}
