import { legacy_createStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/Reducer";


const store = legacy_createStore(rootReducer);


export default store