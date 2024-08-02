import React from "react";
import Footer from "./FooterPage.js";
import Navbar from "./NavBar.js";
import blacklogo from "../assests/black_logo.png";

const AboutUs = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://t4.ftcdn.net/jpg/03/07/56/71/360_F_307567102_lcPJUW10EdNeMKBTyUFg41QDWSFg6f0h.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
      }}
    >
      <Navbar />
      <div className="relative bg-[#252525] text-white h-24 flex items-center justify-center">
        <div className="container mx-auto">
          <div className="flex items-center">
            <p className="text-sm font-light ml-2">Home Page -&gt; About Us</p>
          </div>
          <h2 className="text-3xl font-bold">About Us</h2>
          <h1 className="absolute top-1/2 transform md:-translate-y-1/2 right-9 text-[100px] font-bold text-white opacity-10 z-0">
            ABOUT US
          </h1>
        </div>
      </div>

      <div className="px-4 py-8 md:px-[50px] md:py-[50px] text-4xl md:text-[70px]">
        About Us
      </div>
      <div className="relative flex flex-col items-start px-4 md:px-[50px]">
        <div className="flex flex-col md:flex-row">
          <div className="h-[8em] w-[15em] bg-white rounded-[1em] overflow-hidden relative group p-2 z-0 animate-slideInLeft mb-4 md:mb-[20px]">
            <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#F9ED32] group-hover:scale-[800%] duration-500 z-[-1]"></div>
            <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.9em]">
              YOUNG INNOVATORS
            </h1>
          </div>
        </div>
        <div className="w-full md:w-[80%] lg:w-[60%] xl:w-[50%] bg-white p-4 md:p-[20px] rounded-[1em] shadow-lg animate-fadeIn mb-4 md:mb-[20px]">
          <p className="text-lg md:text-[24px] font-medium text-[#6d6d6d]">
            Established in 2019 by an automotive engineer with a vision for
            sustainable and robust mobility solutions, Rhyno EV is not just a
            company; it's a collective effort of a dynamic team of young
            individuals passionately driving innovation in the electric vehicle
            industry. We believe in engineering solutions that solve problems.
          </p>
        </div>
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-32 h-32 md:w-[530px] md:h-[530px]">
          <img
            src={blacklogo}
            alt="blacklogo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row items-start px-4 md:px-[50px] mb-8 md:mb-[40px]">
        <div className="flex-1 flex items-center justify-end">
          <div className="h-[8em] w-[15em] bg-white rounded-[1em] overflow-hidden relative group p-2 z-0 animate-slideInLeft mb-4 md:mb-[20px] flex items-center justify-center">
            <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#F9ED32] group-hover:scale-[800%] duration-500 z-[-1]"></div>
            <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.9em] text-center">
              INNOVATIONS
            </h1>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full bg-white p-4 md:p-[20px] rounded-[1em] shadow-lg animate-fadeIn">
            <p className="text-lg md:text-[24px] font-medium text-[#6d6d6d]">
              With our first product, we've taken a bold step to create
              something more than just a vehicle; it's a unique experience of
              elegance, comfort and style, addressing the pitfalls of
              conventional electric scooters. Our design prioritizes safety,
              eliminating concerns of fires and ensuring a longer battery
              lifespan with our battery technology. Perfectly suited for fleet
              operators, especially in tourist-centric locations like Goa, our
              rugged yet aesthetically appealing scooters are engineered for
              longevity and reliability. Join us as we pioneer a new era in
              sustainable and dependable electric transportation.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-4 md:pt-[40px]">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
