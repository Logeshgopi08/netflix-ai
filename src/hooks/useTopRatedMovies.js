import { useDispatch } from "react-redux";
import { API_OPTION } from "../utlis/constant";
import {addTopRatedMovies, nowTopRatedMovies} from "../utlis/MovieSlice";
import { useEffect } from "react";

const useTopRatedMovies = ()=>{

    const dispatch = useDispatch();


    const  TopRatedMovies =async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTION);

        const json = await data.json();

        dispatch(addTopRatedMovies(json.results));

    }

    useEffect(()=>{
        TopRatedMovies();
    },[]);
}

export default useTopRatedMovies;