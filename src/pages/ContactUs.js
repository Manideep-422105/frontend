import React from "react";
import Navbar from "./NavBar";
import Footer from "./FooterPage";
import indiaMap from "../assests/map2.jpg";
import front from "../assests/front.png";
const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="relative bg-[#252525] text-white h-24 flex items-center justify-center">
        <div className="container mx-auto">
          <div className="flex items-center">
            <p className="text-sm font-light ml-2">
              Home Page -&gt; Contact Us
            </p>
          </div>
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <h1 className="absolute top-1/2 transform md:-translate-y-1/2 right-9 text-[100px] font-bold text-white opacity-10 z-0 hidden md:block">
            CONTACT US
          </h1>
        </div>
      </div>

      {/* <div className="px-4 py-8 md:px-12 md:py-16 text-4xl md:text-6xl font-bold text-center">
        Contact Us
      </div> */}
      <div className="relative flex justify-center items-center md:px-[215px] md:py-8 py-4 bg-[#FFF225]">
        <img
          src={indiaMap}
          alt="India Map"
          className="w-full max-w-[90%] md:block hidden"
          style={{ left: "5%" }}
        />
        <img
          src={front}
          alt="bike"
          style={{ right: "5%" }}
          className="px-4 md:block hidden"
        />

        <div className="md:absolute relative bg-white p-4 shadow-lg rounded-lg md:w-[250px] w-[90%] md:top-[27%] md:left-[4%]">
          <div className="flex items-center mb-2">
            <img
              src="https://flagcdn.com/in.svg"
              alt="India Flag"
              className="w-6 h-6 mr-2"
            />
            <h2 className="text-lg font-bold">OFFICE (INDIA)</h2>
          </div>
          <p className="text-[15px]">
            Mail: info@rhyno.in,
            <br />
            Mobile: +91-9023987528,
            <br />
            Location: Rhyno Wheels Pvt Ltd,
            <br />
            Near UG hostel gate #2,
            <br />
            Behind PDEU, Raisan,
            <br />
            Gandhinagar, Gujarat, India.
          </p>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center bg-[#202020] pt-[20px]">
        <div className="border-solid border-4 border-white p-6 w-full max-w-2xl">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-white">
              SEND US A MESSAGE
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 text-white">
              Let's Work Together
            </h1>
          </div>
          <form className="mt-8 w-full">
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Your Name*"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="email"
                  placeholder="Email Address*"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Company"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  placeholder="Message*"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
