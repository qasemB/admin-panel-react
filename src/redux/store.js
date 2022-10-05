import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";
import rolesReducer from "./rolse/rolesReducer";

// const store = createStore(rolesReducer, applyMiddleware(thunk))
const store = configureStore({
    reducer:{
        rolesReducer
    },
})

export default store