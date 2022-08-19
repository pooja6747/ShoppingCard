import addItem from "./Additem";
import { combineReducers } from "redux";

//if number of reduder present in application then all combine USING combine reducer
const rootReducers = combineReducers({
    addItem
})

export default rootReducers;