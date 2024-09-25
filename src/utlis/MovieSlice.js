import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies :null,
        nowPopularMovies:null,
        nowTopRatedMovies:null,
        upcomingMovies:null,
        movieTrailer:null
    },
    reducers :{
        addNowPlayingMovies :(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies :(state,action) =>{
            state.nowPopularMovies = action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.nowTopRatedMovies = action.payload;
        },
        addupcomingMovires:(state,action)=>{
            state.upcomingMovies = action.payload;
        },
        addMovieTrailer :(state,action)=>{
            state.movieTrailer = action.payload;
        }
    }
})

export   const   {addNowPlayingMovies,addMovieTrailer,addPopularMovies,addTopRatedMovies,addupcomingMovires} = MovieSlice.actions;


export default MovieSlice.reducer;