import { connect } from "react-redux"
import Card from "../Card/Card"
import {useDispatch} from "react-redux";
import {orderCards, filterCards} from "../../redux/actions";

function Favorites({myFavorites}) {
    const dispatch = useDispatch();
    const handleClick = (e) => { 
        const {name, value} = e.target 
        switch (name) {
            case "order":
                    return dispatch(orderCards(value));
            case "filter":
                    return dispatch(filterCards(value));
            default: 
            break;
        }
    }
    
    return (
        <div>
            <div>
                <select name ="order" onClick = {handleClick }>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name ="filter" onClick = {(e) => {dispatch(filterCards(e.target.value)); } }>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknow">unknow</option>
                </select>
                

            </div>
            
            {myFavorites?.map(({id, name, species, image, gender})=> ( // se quita el boton onclose por criterio del profe
                <Card id={id} key={id} name={name} species={species} image={image} gender={gender}/>
            ))}
            
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}



export default connect(mapStateToProps, null)(Favorites)