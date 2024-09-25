import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./MovieSlice";
// import TrailerReducer from "./TrailerSlice";
import SeriesReducer from "./SeriesSlice";
import LangReducer from "./langSlice" ;

const appStore = configureStore({
    reducer:{
       movies: MovieReducer,
       series:SeriesReducer,
       lang:LangReducer
    }
})


export default appStore;