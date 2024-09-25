import { useRef } from "react";
import { API_OPTION, Lang_Constants, OPEN_AI_KEY, SUPPORTED_LANG } from "../../utlis/constant";
import { useDispatch, useStore } from "react-redux";
import { changelang } from "../../utlis/langSlice";
// import openai from "../../utlis/openai";
// import OpenAI from "openai";

const SearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch;
  const langKey = useStore((store)=>store.lang.lang);

  // const client = new OpenAI({
  //   apiKey:OPEN_AI_KEY , 
  //   dangerouslyAllowBrowser: true// This is the default and can be omitted
  // });

  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
      API_OPTION
    );

    const json = await data.json();
    console.log(json);

    return json.results;
    
  };

  const handleGptSearchClick = async () => {
      
    try {
        console.log(searchText.current.value);

      const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const gptResults = await client.chat.completions.create({
    //     messages: [{ role: 'user', content: 'Say this is a test' }],
    //     model: 'gpt-3.5-turbo',
    //   });

    // console.log(gptResults.choices);
        
    } catch (error) {
        console.log(error.message);
        
    }
      

  };

  const handlechangelang =(e)=>{
     dispatch(changelang(e.target.value));
  }
  return (
    <div className="pt-[7%]  pl-[25%] ">
      <form className="w-full" onSubmit={(e) => e.preventDefault()}>
        <input
          className="px-4 py-3 w-5/12 mx-2 rounded-lg "
          placeholder= {Lang_Constants[langKey].gptSearchPlaceholder}
          ref={searchText}
        />

        <button
          onClick={handleGptSearchClick}
          className="bg-red-700 text-white  px-5 py-2 mx-2 rounded-lg "
        >
          Search
        </button>

        <select  onClick={handlechangelang}
        className="bg-blue-700 text-white px-5 py-2  mx-2 rounded-lg">
             {SUPPORTED_LANG.map((lang)=>{
               return <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
             })}
        </select>
      </form>
    </div>
  );
};

export default SearchBar;
