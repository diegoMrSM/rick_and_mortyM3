import styles from "./Card.module.css"
import {Link} from "react-router-dom";

export default function Card({id, name, species, image, gender, onClose}) {
   return (
      <div className={styles.container}><div className={styles.buttonContainer}>
         <button onClick={onClose} className={styles.button}>X</button> {/* lo tuve que sacar de adentro  <Link></Link> para que no ejecue el detail al quere cerrar la card con el boton X */}
         </div>
      <Link to={`/detail/${id}`} className={styles.link}>{/*lo que envuelve Link funciona como link al clickear */}
      
         <div className={styles.imageContainer}>  
            <img  src={image} alt="Not Found" /> 
            <h2 className={styles.name}>{name}</h2>
         </div> 
         
         <div className={styles.propsContainer}>
            <h2>{species}</h2>
            <h2>{gender}</h2> 
         </div>        
      
      </Link>

      </div>
   );
}
