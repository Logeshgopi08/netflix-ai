import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondContainer = ()=>{

    const movies = useSelector((store)=>store?.movies); 
    return (
        <div className="bg-black text-white w-screen">
            <div className="-mt-15">
                <div >
                    <MovieList title ={"Now Playing"} movies ={movies?.nowPlayingMovies}/>
                    <MovieList title ={"Romance"} movies ={movies?.nowTopRatedMovies}/>
                    <MovieList title ={"Popular"} movies ={movies?.nowPopularMovies}/>
                    <MovieList title ={"Crime Investigation"} movies ={movies?.upcomingMovies}/>
                    <MovieList title ={"Thriller "} movies ={movies?.nowPlayingMovies}/>
                </div>
            </div>
        </div>
    );
}

export default SecondContainer;