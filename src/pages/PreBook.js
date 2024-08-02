import React from "react";
import NavBar from "./NavBar";
import Footer from "./FooterPage";
const PreBook = () => {
  return (
    <div>
      <NavBar />
      <div className="relative bg-[#252525] text-white h-24 flex items-center justify-center">
        <div className="container mx-auto">
          <div className="flex items-center">
            <p className="text-sm font-light ml-2">
              Home Page -&gt; Prebook-now
            </p>
          </div>
          <h2 className="text-3xl font-bold">Prebook now</h2>
          <h1 className="absolute top-1/2 transform md:-translate-y-1/2 right-9 text-[100px] font-bold text-white opacity-10 z-0 hidden md:block">
            PREBOOK-NOW
          </h1>
        </div>
      </div>
      <div className="bg-yellow-400 min-h-screen flex items-center justify-center py-10">
        <div className="bg-white w-full max-w-4xl p-8 shadow-lg rounded-lg">
          <h2 className="text-xl font-bold mb-6">Bike Details</h2>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Select Rhyno Model*
            </label>

            <select className="border border-gray-300 p-2 w-full rounded">
              <option>Select Model</option>
              <option>SE03 LITE</option>
              <option>SE02</option>
              <option>SE03 MAX</option>
            </select>
          </div>
          <hr className="my-6" />
          <h2 className="text-xl font-bold mb-6">Personal Details</h2>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                First & Last Name*
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full rounded"
                placeholder="Enter first name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2"> </label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full rounded mt-5"
                placeholder="Enter last name"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Email*</label>
            <input
              type="email"
              className="border border-gray-300 p-2 w-[420px] rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Mobile Number*
            </label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-[420px] rounded"
              placeholder="Enter your number"
            />
          </div>
          <hr className="my-6" />
          <h2 className="text-xl font-bold mb-6">Personal Details</h2>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Your Address*
            </label>
            <textarea
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Enter your address"
              rows="4"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Location*
              </label>
              <select className="border border-gray-300 p-2 w-full rounded">
                <option>Select state</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2"> </label>
              <select className="border border-gray-300 p-2 w-full rounded mt-5">
                <option>Select city</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PreBook;
