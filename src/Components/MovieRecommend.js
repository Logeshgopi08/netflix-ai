import { BG_LOGO } from "../utlis/constant";
import Header from "./Header";
import SearchBar from "./movieRecommendation/SearchBar";

const MovieRecommend =()=>{

    return(
        <div>
            <Header/>
            <div className="fixed -z-10">
                <img className="h-screen object-cover w-screen"
                 alt="bg-logo" src={BG_LOGO}/>
            </div>
            <div className="">
                <SearchBar/>
            </div>
        </div>
    );
}

export default MovieRecommend;