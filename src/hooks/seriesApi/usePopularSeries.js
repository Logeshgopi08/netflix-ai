import { useEffect } from "react";
import { API_OPTION } from "../../utlis/constant";
import { useDispatch } from "react-redux";
import { addPopularSeries } from "../../utlis/SeriesSlice";

const usePopularSeries = ()=>{

    const dispatch = useDispatch();

  const getPopularSeries =async()=>{
    const data = await fetch("https://api.themoviedb.org/3/tv/airing_today",API_OPTION);
    const json = await data.json();

    // console.log(json);
    dispatch(addPopularSeries(json.results));
  }

  useEffect(()=>{
    getPopularSeries();
  },[]);

}

export default usePopularSeries;