import { ADD_FAVORITE, DELETE_FAVORITE, FILTER_CARDS, ORDER_CARDS } from "./actionsTypes";

import axios from "axios";

   // ACTION | addFav
   export const addFavorite = (character) => {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return (dispatch) => {
         axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
               type: ADD_FAVORITE,
               payload: data,
            });
         });
      };
   };

export const deleteFavorite = (id) => {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return (dispatch) => {
         axios.delete(endpoint).then(({ data }) => {
            return dispatch({
               type: DELETE_FAVORITE,
               payload: data,
         });
         });
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
