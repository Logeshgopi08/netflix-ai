import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/usegetMovieTrailer";
// import useSeriesTrailer from "../hooks/seriesApi/useSeriesTrailer";
// import { API_OPTION } from "../utlis/constant";
// import { useEffect } from "react";

const VideoBackground = ({ movieId, seriesId }) => {
  const trailerVideo = useSelector((store) => store.movies?.movieTrailer);
  // console.log(trailerVideo);
     useMovieTrailer(movieId);
  // useSeriesTrailer(seriesId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?si=chwaBamuiuTlTbMW?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
