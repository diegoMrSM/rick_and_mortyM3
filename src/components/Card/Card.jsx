import styles from "./Card.module.css"
import {Link} from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import {connect} from "react-redux"
import { useState } from "react";
import { useEffect } from "react";

function Card({id, name, species, image, gender, onClose, deleteFavorite, addFavorite, myFavorites}) {// al comenzar a realizar el ejercicio de reac redux, se quita el export defaul de esta linea y se coloca abajo para el connec de redux

   const [isFav, setIsFav] = useState(false)
   
   const handleFavorite = () => {
      if(isFav){
         deleteFavorite(id)
         setIsFav(!isFav)
      }else{
         setIsFav(true)
         addFavorite({id, name, species, image, gender, onClose}); // se agrega a  la lista de favoritos
      }
   };

   useEffect(() => {
      
      myFavorites.forEach((fav) => {
         console.log(myFavorites);
         if (fav.id === id ) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.container}><div className={styles.buttonContainer}>
         {
            isFav ? (<button onClick={handleFavorite}>❤️</button>) :  //click favoritos
                    (<button onClick={handleFavorite}>🤍</button>)
         }
         {isFav ? null: (<button onClick={onClose} className={styles.button}>X</button>)}
          {/* lo tuve que sacar de adentro  <Link></Link> para que no ejecue el detail al quere cerrar la card con el boton X */}
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

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      addFavorite: (character) => {
         dispatch(addFavorite(character));
      },
      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id))
      }
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);