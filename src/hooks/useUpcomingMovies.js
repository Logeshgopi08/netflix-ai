import { useDispatch } from "react-redux";
import { API_OPTION } from "../utlis/constant";
import {addupcomingMovires} from "../utlis/MovieSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();


    const UpcomingMovies =async()=>{

        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTION);

        const json = await data.json();
         dispatch( addupcomingMovires(json.results));

    }

    useEffect(()=>{
        UpcomingMovies();
    },[])
}

export default useUpcomingMovies;