import { useDispatch } from "react-redux";
import { API_OPTION } from "../utlis/constant";
import { addMovieTrailer } from "../utlis/MovieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
  const getMovietrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos",
      API_OPTION
    );

    const json = await data.json();
    // console.log(json);

    const filterVideo = json.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterVideo.length ? filterVideo[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
    // console.log(trailer);
  };

  useEffect(() => {
    getMovietrailer();
  }, []);
};

export default useMovieTrailer;
