import React from "react";
import product1 from "../assests/blue.png";
import Navbar from "./NavBar.js";
import Footer from "./FooterPage.js";
import { useNavigate } from "react-router-dom";

const ComparisonPage = () => {
  const navigate = useNavigate();

  const Checkout1 = () => {
    navigate("/product1");
  };
  const Checkout2 = () => {
    navigate("/product2");
  };
  const Checkout3 = () => {
    navigate("/product3");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-100 text-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-evenly items-center mb-12">
            <div className="w-full md:w-[240px] p-4 text-center md:text-left">
              <h2 className="text-[18px] md:text-[20px] mb-4">
                To access all the amazing features that come with your Rhyno
                Scooter
              </h2>
            </div>
            <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col items-center relative px-[20px] mb-6 md:mb-0">
                <img
                  src={product1}
                  alt="Bike 1"
                  className="bg-[#F9ED32] w-[250px] md:w-[350px] object-cover transform transition duration-500 hover:scale-105 hover:shadow-lg"
                  onClick={Checkout1}
                />
                <h3 className="text-[20px] md:text-[25px] font-bold mt-4">
                  SE03 LITE
                </h3>
              </div>
              <div className="flex flex-col items-center relative px-[20px] mb-6 md:mb-0">
                <img
                  src={product1}
                  alt="Bike 2"
                  className=" bg-[#424242] w-[250px] md:w-[350px] object-cover transform transition duration-500 hover:scale-105 hover:shadow-lg"
                  onClick={Checkout2}
                />
                <h3 className="text-[20px] md:text-[25px] font-bold mt-4">
                  SE03
                </h3>
              </div>
              <div className="flex flex-col items-center relative px-[20px] mb-6 md:mb-0">
                <img
                  src={product1}
                  alt="Bike 3"
                  className="bg-[#F9ED32] w-[250px] md:w-[350px] object-cover transform transition duration-500 hover:scale-105 hover:shadow-lg"
                  onClick={Checkout3}
                />
                <h3 className="text-[20px] md:text-[25px] font-bold mt-4">
                  SE03 MAX
                </h3>
              </div>
            </div>
          </div>
          <div className="bg-white py-4 overflow-x-auto">
            <div className="container mx-auto px-4 max-h-[500px] overflow-y-auto">
              <table className="w-full table-auto text-sm md:text-base">
                <thead>
                  <tr>
                    <th className="py-2 text-center text-[20px] md:text-[30px]">
                      Specification
                    </th>
                    <th className="py-2 text-center text-[15px] md:text-[30px]">
                      SE03 LITE
                    </th>
                    <th className="py-2 text-center text-[15px] md:text-[30px]">
                      SE03
                    </th>
                    <th className="py-2 text-center text-[15px] md:text-[30px]">
                      SE03 MAX
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#F9ED32]">
                    <td className="py-2 px-2 md:px-4 font-semibold">Battery</td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      1.8kWh
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      2.7kWh
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      2.7kWh
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2 px-2 md:px-4 font-semibold">
                      Battery Features
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      LFP with 1500 cycles, <br />
                      Active Balancing, <br />
                      Waterproof (IP67)
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      LFP with 1500 cycles, <br />
                      Active Balancing,
                      <br />
                      Waterproof (IP67)
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      LFP with 1500 cycles,
                      <br />
                      Active Balancing,
                      <br />
                      Waterproof (IP67)
                    </td>
                  </tr>
                  <tr className="bg-[#F9ED32]">
                    <td className="py-2 px-2 md:px-4 font-semibold">
                      Battery Warranty
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      3 Years
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      3 Years
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      3 Years
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2 px-2 md:px-4 font-semibold">
                      Charging Time
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      3 hours (12A)
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      4 hours (12A)
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      4 hours (12A)
                    </td>
                  </tr>
                  <tr className="bg-[#F9ED32]">
                    <td className="py-2 px-2 md:px-4 font-semibold">Motor</td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      1500W
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      1500W
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      2000W
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2 px-2 md:px-4 font-semibold">
                      Max Speed
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      55 km/h
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      55 km/h
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      65 km/h
                    </td>
                  </tr>
                  <tr className="bg-[#F9ED32]">
                    <td className="py-2 px-2 md:px-4 font-semibold">
                      Warranty on electronics
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      1 year
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      1 year
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      1 year
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2 px-2 md:px-4 font-semibold">
                      Max range (@30km/h)
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      100 km
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      150 km
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      120 km
                    </td>
                  </tr>
                  <tr className="bg-[#F9ED32]">
                    <td className="py-2 px-2 md:px-4 font-semibold">
                      Max range (@45km/h)
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      90 km
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      110 km
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      100 km
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2 px-2 md:px-4 font-semibold">
                      Max range (@full speed)
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      60 km
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      90 km
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      80 km
                    </td>
                  </tr>
                  <tr className="bg-[#F9ED32]">
                    <td className="py-2 px-2 md:px-4 font-semibold">
                      Other key benefits
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      Fire-safe Battery
                      <br />
                      Range prediction
                      <br />
                      Comfortable ride
                      <br />
                      Stable and safe
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      Fire-safe Battery
                      <br />
                      Range prediction
                      <br />
                      Comfortable ride
                      <br />
                      Stable and safe
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center font-semibold">
                      Fire-safe Battery
                      <br />
                      Range prediction
                      <br />
                      Comfortable ride
                      <br />
                      Stable and safe
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2 px-2 md:px-4 text-center">
                      <button></button>
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center">
                      <button className="relative px-6 py-2 md:px-8 rounded-md bg-white border-2 border-yellow-500 transition-all duration-700 hover:bg-yellow-500 hover:text-white">
                        Buy Now
                      </button>
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center">
                      <button className="relative px-6 py-2 md:px-8 rounded-md bg-white border-2 border-yellow-500 transition-all duration-700 hover:bg-yellow-500 hover:text-white">
                        Buy Now
                      </button>
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center">
                      <button className="relative px-6 py-2 md:px-8 rounded-md bg-white border-2 border-yellow-500 transition-all duration-700 hover:bg-yellow-500 hover:text-white">
                        Buy Now
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComparisonPage;
