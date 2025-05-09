import React from "react";
import {Link} from 'react-router-dom';
export default function Home() {

    return (

        <div className=" flex flex-col   text-center h-screen bg-background p-4 bg-[url(./images/dar2.png)] bg-cover bg-center  w-screen
 gap-2 font-mono  
   " >
            <h1 className="text-xl font-bold leading-8 text-white mt-20  lg:m-0  lg:sel lg:justify-items-center lg:text-6xl lg:p-8 px-4">You got the travel plans, we got the travel vans.</h1>
            <p className="shadow-md  leading-6 text-gray-300 text-sm  mt-10 pb-6  lg:m-0  lg:text-lg  lg:p-8 lg:mb px-4">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <Link to="/vans" className="px-4 py-4 text-sm bg-orange-500 rounded-md text-white transform hover:scale-105 transition-transform duration-200 ease-in-out font-bold  lg:w-40  lg:px-2 lg:mx-auto  ">Find your van</Link>


        </div>

    );
}