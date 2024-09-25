const VideoTitle = ({ title, overview }) => {
  return (
    <div className= "w-screen aspect-video pt-[20%] px-4 md:px-24 absolute text-white bg-gradient-to-r from-black"  >
      <h1 className="text-3xl py-2 font-bold">{title}</h1>
      <p className="w-1/4 text-xl">{overview}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;


//

//"w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black"

//"  w-screen aspect-video  absolute pt-[16%] px-6 text-white  bg-gradient-to-r from-black "