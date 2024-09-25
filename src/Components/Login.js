import { useState } from "react";
import { BG_LOGO } from "../utlis/constant";
import Header from "./Header";

const Login = () => {
 
  const [isSignin,setIsSignUp] = useState(true);

  const toggleSignin =()=>{
    setIsSignUp(!isSignin);
  }

  return (
    <div className="scroll-bar-none">
      <Header/>
      <div className="absolute bg-black">
        <img  className="h-screen object-cover w-screen" 
        src={BG_LOGO} alt=""/>
      </div>
        <form onSubmit={(e)=>e.preventDefault()} 
         className="absolute w-3/12 bg-black opacity-90 my-28 mx-auto right-0 left-0 p-5 text-white">
          <h1 className="text-red-600 text-xl font-bold py-2">{isSignin ?"SignIn" :"SignUp"}</h1>
          { !isSignin && <input className="w-full bg-gray-700 py-3 rounded-lg px-2 my-2 "
           type="text" placeholder="Full Name"/>}
          <input className="w-full bg-gray-700 py-3 rounded-lg px-2 my-2"
           type ="text" placeholder ="Email or Phone"/>
          <input  className="w-full bg-gray-700 py-3 rounded-lg px-2 my-2"
          type="password" placeholder="Password" />
          <button className="bg-red-700 w-full p-2 rounded-lg my-2" >
            {isSignin ? "SignIn": "SignUp"}
          </button>
          
          <p onClick={toggleSignin} 
           className="text-white cursor-pointer hover:underline py-2">
            { isSignin ?"New User? SignUp Now" : "Already have Account? SignIn Now"}</p>
          
        </form>
        
    </div>
  );
};

export default Login;
