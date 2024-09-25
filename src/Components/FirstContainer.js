import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import useSeriesTrailer from "../hooks/seriesApi/useSeriesTrailer";

const FirstContainer = () => {
  const series = useSelector((store) => store.series?.popularseries);

  if (!series) return;
  
  
  const WantedSeries = series[0];
  
  console.log(WantedSeries);
  
  const { original_name, overview, id } = WantedSeries;
 
  
  
  return <div className="bg-black">
           <VideoTitle title={original_name} overview={overview}/>
           <VideoBackground  seriesId={id} />
  </div>;
};

export default FirstContainer;
