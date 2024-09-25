import { useEffect } from "react";
import { API_OPTION } from "../../utlis/constant";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../../utlis/MovieSlice";

const useSeriesTrailer = (seriesId)=>{

    const dispatch = useDispatch();

    const SeriesTrailer = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/tv/63770/videos",
          API_OPTION
        );
    
        const json = await data.json();
        console.log(json);

        const filterSeriestrailer = json.results?.filter((video)=>video.type ==="Trailer");

        const seriesTrailer = filterSeriestrailer.length? filterSeriestrailer[0] :json.results[0];
    
          dispatch(addMovieTrailer(seriesTrailer));
      };
    
      useEffect(() => {
        SeriesTrailer();
      }, []);

}

export default useSeriesTrailer;