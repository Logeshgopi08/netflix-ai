import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utlis/MovieSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utlis/constant";

const useNowPlayingMovies =()=>{

    const dispatch = useDispatch();
    const NowPlayingMovies = async()=>{
        const data = await fetch ('https://api.themoviedb.org/3/movie/now_playing',API_OPTION);

        const json = await data.json();
        // console.log(json.results);
         dispatch(addNowPlayingMovies(json.results))
        
    }

    useEffect(()=>{
        NowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;