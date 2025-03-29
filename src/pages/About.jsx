import React from "react";
import {Link, Outlet} from 'react-router-dom';
import darkVan from "../images/dar2.png";
export default function About() {

    return (
        <div className="h-screen flex flex-col   text-left mb-10">

                <img src={darkVan} alt="" className="about-img"/>
                <div className="">
                <h1 className="text-2xl font-bold m-2 pb-4">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className="text-sm font-mono m-2 pb-2">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)</p>
                <p className="text-sm font-mono m-2 pb-8">
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            
            <div className="bg-amber-500 p-6 rounded-md pb-10 ">
            <h2 className="font-bold text-xl pb-5 mb-4">Your destination is waiting.
            Your van is ready.</h2>
            <Link to="/vans" className="bg-black rounded-md text-white px-6 py-4 font-bold  hover:bg-white hover:text-black hover:font-bold  ">Explore our vans</Link>
            </div>
                </div>
        </div>
    );
}