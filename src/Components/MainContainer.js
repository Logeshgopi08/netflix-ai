import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = ()=>{
   
   const movies = useSelector((store)=>store.movies?.nowPlayingMovies);

   if(!movies) return;

   const WantedMovie = movies[0];
   console.log(WantedMovie);

       const {original_title,overview ,id} = WantedMovie;


    return (
        <div className=" bg-black ">
            <VideoTitle title ={original_title} overview = {overview}/>
            <VideoBackground movieId ={id}/>
        </div>
    );
}

export default MainContainer;