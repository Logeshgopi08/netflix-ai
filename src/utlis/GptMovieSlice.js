import { createSlice } from "@reduxjs/toolkit";

const GptMovieSlice = createSlice({
    name:"gptsearch",
    initialState:{
        movieResult :null,
        movieName: null
    },
    reducers:{
        addGptMovieResult :(state,action)=> {
            const {movieResult,movieName} = action.payload;
            state.movieResult = movieResult;
            state.movieName = movieName;
        }
    }

});

export const {addGptMovieResult} = GptMovieSlice.actions;


export default GptMovieSlice.reducer;