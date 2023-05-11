import { ADD_FAVORITE, DELETE_FAVORITE, FILTER_CARDS, ORDER_CARDS } from "./actionsTypes";

export const addFavorite =(character) =>
{
    console.log(character)
    return{
        type: ADD_FAVORITE,
        payload: character
    }
}

export const deleteFavorite =(id) =>
{

    return{
        type: DELETE_FAVORITE,
        payload: id
    };
};

export const filterCards =(gender) =>
{

    return{
        type: FILTER_CARDS,
        payload: gender
    };
};

export const orderCards =(order) => // si es orden ascendente o descendente
{

    return{
        type: ORDER_CARDS,
        payload: order
    };
};
