import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utlis/constant";
import { addPopularMovies } from "../utlis/MovieSlice";

const usePopularMovies = ()=>{

    const dispatch = useDispatch();


    const PopularMovies = async()=>{
      
        const data = await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTION);

        const json = await data.json();

        // console.log(json);
        
             dispatch(addPopularMovies(json.results));
    }

    useEffect(()=>{
        PopularMovies();
    },[]);
}

export default usePopularMovies;