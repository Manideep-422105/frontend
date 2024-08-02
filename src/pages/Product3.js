import React from "react";
import bikeImage from "../assests/black.png";
import Navbar from "./NavBar.js";
import Footer from "./FooterPage.js";

const Product1 = () => {
  return (
    <div>
      <Navbar/>
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-[#F9ED32] flex items-center justify-center p-8 relative animate-zoomIn">
          <div className="text-center relative z-10">
            <img src={bikeImage} alt="RV400" className="mx-auto animate-zoomIn" />
          </div>
          <div className="absolute top-12 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white text-[100px] font-bold z-0 opacity-170 text-shadow animate-zoomIn">
            SE03 MAX
          </div>
        </div>
        <div className="md:w-1/2 bg-black p-8 animate-zoomIn">
          <h className="text-white text-[50px] animate-zoomIn">Rhyno SE03 MAX</h>
          <br />
          <br />
          <p className="text-white text-[20px] animate-zoomIn">
            Indulge in the perfect harmony of power and range with this Rhyno.
            Offering an exhilarating experience with its robust 2000W motor, it
            ensures a thrilling ride while still delivering an impressive 80-100
            km range on a single charge.
          </p>
          <br />
          <br />
          <p className="text-white text-[20px] animate-zoomIn">
            Like its counterparts, this machine features the safety assurance of
            a fire-safe advanced LFP battery, along with the comprehensive
            benefits of owning a Rhino. Boasting a formidable combination of a
            2000W motor and a 2.7kWh battery, this beast is ready to roar on the
            roads, providing an electrifying journey at every turn.
          </p>
          <br />
          <br />
          <div className="flex items-center animate-zoomIn">
            <h className="text-white text-[30px]">Colors</h>
            <div className="flex space-x-2 ml-4">
              <span className="w-8 h-8 bg-yellow-500 inline-block rounded-full"></span>
              <span className="w-8 h-8 bg-red-500 inline-block rounded-full"></span>
              <span className="w-8 h-8 bg-blue-500 inline-block rounded-full"></span>
              <span className="w-8 h-8 bg-gray-500 inline-block rounded-full"></span>
              <span className="w-8 h-8 bg-black inline-block rounded-full"></span>
            </div>
          </div>

          <div className="mt-8 flex justify-center animate-zoomIn">
            <button className="relative px-8 py-2 rounded-md bg-white border-2 border-yellow-500 transition-all duration-700 hover:bg-yellow-500 hover:text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product1;
