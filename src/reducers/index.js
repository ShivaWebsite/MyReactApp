import counterReducer from "./Counter";
import loggedReducer from "./Logged";
import {combineReducers} from 'redux';
import ListReducer from "./ListReducer";

const allReducers=combineReducers({
    counter:counterReducer,
    isLogged:loggedReducer,
    List:ListReducer
})
export default allReducers;