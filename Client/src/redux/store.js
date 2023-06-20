import {createStore, applyMiddleware} from "redux"
import reducer from "./reducer"
import thunk from "redux-thunk"
import { initialState } from "./reducer";

const middleware = applyMiddleware(thunk); 

const store = createStore(reducer, 
   initialState, middleware// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store