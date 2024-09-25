import MovieCard from "./MovieCard";

const MovieList = ({title,movies})=>{

  // console.log(movies);
  
    return (
        <div className="px-10">
          <h1 className="py-3 text-lg">{title}</h1>
              <div className="flex  overflow-x-scroll no-scrollbar">
              <div className="flex">
                {movies?.map((movie) => {
                   return   <MovieCard key={movie.id} posterpath= {movie.poster_path} />
                })}
              </div>
              </div>

        </div>
    );
}

export default MovieList;