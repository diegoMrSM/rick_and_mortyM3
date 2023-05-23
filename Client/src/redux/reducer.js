import {ADD_FAVORITE, DELETE_FAVORITE, FILTER_CARDS, ORDER_CARDS} from "./actionsTypes"

const initialState = {
    
    myFavorites: [],
    allCharacters: []
    
}

const reducer = (state = initialState, {type, payload}) =>{

    switch(type) {

            case ADD_FAVORITE:
               /* let copy1 = state.myFavorites
                    copy1.push(payload)*/
                return {...state, 
                    allCharacters: [...state.allCharacters, payload],
                    myFavorites: [...state.allCharacters, payload]
                 } // a la copia del arreglo myFavorites le agrego el payload

            case DELETE_FAVORITE:
                const filtered = state.myFavorites.filter((character) => {return character.id !== Number(payload)})
                return {...state, myFavorites:filtered};
                
            case FILTER_CARDS: 
                 const filterByGender = [...state.allCharacters].filter((char) => char.gender.toLowerCase() === payload.toLowerCase());
                 return {...state, myFavorites: filterByGender};
        
            case ORDER_CARDS:
                 const filterByOrder = [...state.allCharacters].sort((a,b)=>{
                    if(a.id > b.id){
                    return payload ==="Ascendente" ? 1 : -1;
                } else if(a.id < b.id){
                        return payload === "Descendente" ? 1: -1;
                    } else {
                        return 0; 
                    }
                /*if(payload === "Ascendente" && a.id > b.id){
                    return  1;
                }else if("Ascendente" && a.id < b.id)
                return -1;*/
                
                });

                return {...state, myFavorites: filterByOrder};


        default:
                return {...state}
    }
}
export default reducer