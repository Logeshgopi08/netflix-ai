import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Body from "./Body";
import TvSeries from "./TvSeries";
import MovieRecommend from "./MovieRecommend";
import MyList from "./MyList";


const Browse = ()=>{

    const appRouter = createBrowserRouter([
         
        {
            path:'/',
            element:<Login/>
        },
        {
            path:"/home",
            element:<Body />
        },
        {
            path:"/series",
            element:<TvSeries/>
        },
        {
            path:"/movierecommend",
            element:<MovieRecommend/>
        },
        {
            path:"/mylist",
            element:<MyList/>
        }

    ]);


    return (
         <div>
            <RouterProvider router={appRouter} />
         </div>
    );
}

export default Browse;