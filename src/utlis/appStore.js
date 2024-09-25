import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./MovieSlice";
import TrailerReducer from "./TrailerSlice";
import SeriesReducer from "./SeriesSlice";

const appStore = configureStore({
    reducer:{
       movies: MovieReducer,
       series:SeriesReducer
    }
})


export default appStore;