import { Link } from "react-router-dom";
import { APP_LOGO } from "../utlis/constant";
import { useDispatch } from "react-redux";
import { changeTrailer } from "../utlis/TrailerSlice";

const Header = () => {
  const dispatch = useDispatch();

  // const changeMovieTrailer =()=>{
  //      dispatch(changeTrailer(true));
  // }

  // const changeSeriesTrailer = ()=>{
  //   dispatch(changeTrailer(false));
  // }
  return (
    <div className="bg-black    w-screen flex justify-between items-center ">
      <div className="mx-3 px-4 py-1">
        <img className="w-44" alt="Netflix-logo" src={APP_LOGO} />
      </div>
      <div className="text-center px-2">
        <ul className=" text-lg flex mx-4 px-3">
          <li className="px-3 hover:underline cursor-pointer text-white" >
           <Link to={"/home"}> Home</Link>
          </li>
          <li className="px-3 hover:underline cursor-pointer text-white" >
            <Link to={"/series"}>Tv Series</Link>
          </li>
          <li className="px-3 hover:underline cursor-pointer text-white">
            <Link to={"/movierecommend"}>Movie Recommendation</Link>
          </li>
          <li className="px-3 hover:underline cursor-pointer text-white">
            <Link to={"/mylist"}> My List</Link>
          </li>
          <li className="px-3  cursor-pointer">
            <button className="bg-red-700 text-white p-2 rounded-lg text-sm">
              SignOut
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
