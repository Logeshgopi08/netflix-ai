import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import useNowPlayingMovies from "../hooks/usenowplayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularSeries from "../hooks/seriesApi/usePopularSeries";

const Body = ()=>{
    
 
   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();
  
    return (
        <div>
            <Header/>
            <MainContainer />
            <SecondContainer />
        </div>
    )
}

export default Body;