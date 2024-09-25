const MovieCard = ({ posterpath }) => {
 
  if(!posterpath) return null;
  return (
    <div className="w-36 pr-4">
      <img
        alt="movie poster"
        src={"https://image.tmdb.org/t/p/w500" + posterpath}
      />
    </div>
  );
};

export default MovieCard;
