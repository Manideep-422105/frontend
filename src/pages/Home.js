import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import model1 from "../assests/red.png";
import model2 from "../assests/black.png";
import group from "../assests/grp.png";
import Footer from "./FooterPage";
import charge from "../assests/charge.jpg";
import theft from "../assests/theft.jpg";
import motor from "../assests/motor.jpg";
import color from "../assests/color.jpg";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import ProductCard from "./ProductCard.js";
import grp from "../assests/rhyno final.95.png";
import Carousel from "./Carousel";
import FloatingPrebook from "./FloatingPrebook.js";
import full from "../assests/full.jpg";
import sturdy from "../assests/sturdy.jpg";
import battery from "../assests/charge.jpg";
import tech from "../assests/tech.jpg";
const words = ['Elegance."', 'Minimalism."', 'Comfort."', 'Style."'];

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const Checkout1 = () => {
    navigate("/product1");
  };
  const Checkout2 = () => {
    navigate("/product2");
  };
  const Checkout3 = () => {
    navigate("/product3");
  };
  const Prebook = () => {
    navigate("./prebook");
  };

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <div className="bg-black w-[100vw]">
      <div className="max-w-[100%]">
        <NavBar />
      </div>
      <p className="text-[4.5vw] text-center font-bold text-white animate-zoomIn">
        “Let's Elevate Your Ride Experience With Rhyno
      </p>
      <div className="w-[100%] md:text-center text-left md:text-[4.5rem] text-[40px] md:px-[125px] px-[10px] font-bold text-white animate-zoomIn">
        Where Superiority Meets{" "}
        <span className="inline-block md:w-[7rem] text-center font-bold text-yellow-300">
          {words[currentWordIndex]}
        </span>
      </div>

      <div className="bg-[#F9ED32]">
        <img src={group} alt="grp" />
      </div>
      <section className="model1 pt-[60px]" ref={ref1}>
        <div className={`container mx-auto ${inView1 ? "animate-zoomIn" : ""}`}>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 order-2 md:order-1 px-4">
              <h3 className="text-yellow-400 text-[40px]">
                Introducing RHYNO SE03 LITE
              </h3>
              <p className="text-white text-[20px]">
                Indulge in the perfect harmony of power and range with this
                Rhyno. Offering an exhilarating experience with its robust 2000W
                motor, it ensures a thrilling ride while still delivering an
                impressive 80-100 km range on a single charge.
                <br></br>
                <br></br>
                Like its counterparts, this machine features the safety
                assurance of a fire-safe advanced LFP battery, along with the
                comprehensive benefits of owning a Rhino. Boasting a formidable
                combination of a 2000W motor and a 2.7kWh battery, this beast is
                ready to roar on the roads, providing an electrifying journey at
                every turn.
                <br></br>
                <br></br>
                Check out the other details below!
              </p>
              <div className="link-more mt-5 hide-mobile text-center">
                <button
                  className="overflow-hidden w-40 p-2 h-13 bg-black text-white border-solid border-4 border-gray-400 rounded-md text-[30px] font-bold cursor-pointer relative z-10 group"
                  onClick={Checkout1}
                >
                  Checkout
                  <span className="absolute w-52 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                  <span className="absolute w-52 h-32 -top-8 -left-2 bg-yellow-300 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                  <span className="absolute w-52 h-32 -top-8 -left-2 bg-yellow-400 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                  <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                    Explore!
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 px-4 bg-white">
              <img src={model1} alt="S03 LITE" />
            </div>
          </div>
        </div>
      </section>
      <section className="model1 pt-[60px]" ref={ref2}>
        <div className={`container mx-auto ${inView2 ? "animate-zoomIn" : ""}`}>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 order-1 md:order-1 px-4 bg-white">
              <img src={model2} alt="S03 LITE" />
            </div>
            <div className="w-full md:w-1/2 order-2 md:order-2 px-4">
              <h3 className="text-yellow-400 text-[40px]">
                Introducing RHYNO SE03
              </h3>
              <p className="text-white text-[20px]">
                Indulge in the perfect harmony of power and range with this
                Rhyno. Offering an exhilarating experience with its robust 2000W
                motor, it ensures a thrilling ride while still delivering an
                impressive 80-100 km range on a single charge.
                <br></br>
                <br></br>
                Like its counterparts, this machine features the safety
                assurance of a fire-safe advanced LFP battery, along with the
                comprehensive benefits of owning a Rhino. Boasting a formidable
                combination of a 2000W motor and a 2.7kWh battery, this beast is
                ready to roar on the roads, providing an electrifying journey at
                every turn.
                <br></br>
                <br></br>
                Check out the other details below!
              </p>
              <div className="link-more mt-5 hide-mobile text-center">
                <button
                  className="overflow-hidden w-40 p-2 h-13 bg-black text-white border-solid border-4 border-gray-400 rounded-md text-[30px] font-bold cursor-pointer relative z-10 group"
                  onClick={Checkout2}
                >
                  Checkout
                  <span className="absolute w-52 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                  <span className="absolute w-52 h-32 -top-8 -left-2 bg-yellow-300 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                  <span className="absolute w-52 h-32 -top-8 -left-2 bg-yellow-400 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                  <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                    Explore!
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="model1 pt-[60px]" ref={ref3}>
        <div className={`container mx-auto ${inView3 ? "animate-zoomIn" : ""}`}>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 order-2 md:order-1 px-4">
              <h3 className="text-yellow-400 text-[40px]">
                Introducing RHYNO SE03 MAX
              </h3>
              <p className="text-white text-[20px]">
                Indulge in the perfect harmony of power and range with this
                Rhyno. Offering an exhilarating experience with its robust 2000W
                motor, it ensures a thrilling ride while still delivering an
                impressive 80-100 km range on a single charge.
                <br></br>
                <br></br>
                Like its counterparts, this machine features the safety
                assurance of a fire-safe advanced LFP battery, along with the
                comprehensive benefits of owning a Rhino. Boasting a formidable
                combination of a 2000W motor and a 2.7kWh battery, this beast is
                ready to roar on the roads, providing an electrifying journey at
                every turn.
                <br></br>
                <br></br>
                Check out the other details below!
              </p>
              <div className="link-more mt-5 hide-mobile text-center">
                <button
                  className="overflow-hidden w-40 p-2 h-13 bg-black text-white border-solid border-4 border-gray-400 rounded-md text-[30px] font-bold cursor-pointer relative z-10 group"
                  onClick={Checkout3}
                >
                  Checkout
                  <span className="absolute w-52 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                  <span className="absolute w-52 h-32 -top-8 -left-2 bg-yellow-300 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                  <span className="absolute w-52 h-32 -top-8 -left-2 bg-yellow-400 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                  <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                    Explore!
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 px-4 bg-white">
              <img src={model1} alt="S03 LITE" />
            </div>
          </div>
        </div>
      </section>

      {/* <div className="flex flex-row justify-between pt-[30px] bg-[#F9ED32]">
        <div className="items-center justify-center">
          <h1 className="text-white text-[50px]">REASONS TO CHOOSE RHYNO</h1>
        </div>
        <img src={full} alt="full"></img>
      </div> */}

      <div className="max-w-[100vw] pt-[20px]">
        <div className="flex md:flex-row flex-col gap-10">
          <div className="flex-1 bg-black py-8">
            <h1 className="text-white text-4xl md:text-5xl text-center">
              REASONS TO CHOOSE RHYNO
            </h1>
            <div className="flex w-full justify-center items-center gap-5 flex-wrap pt-[1rem] flex-col">
              <img
                src={sturdy}
                alt="sturdy"
                className="w-32 h-32 md:w-[300px] md:h-[300px]"
              ></img>
              <img
                src={battery}
                alt="battery"
                className="w-32 h-32 md:w-[300px] md:h-[300px]"
              ></img>
              <img
                src={tech}
                alt="tech"
                className="w-32 h-32 md:w-[300px] md:h-[300px]"
              ></img>
            </div>
          </div>
          <div className="flex-1 bg-[#F9ED32] flex justify-center items-center pt-[20px] pb-[20px]">
            <img
              src={full}
              alt="full"
              className="w-[90%] h-auto md:w-[600px] md:h-[600px]"
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-black flex items-center justify-center">
        <Carousel />
      </div>

      <div className="pt-[30px] " ref={ref3}>
        <div className="relative bg-[#F9ED32] pb-[30px] text-white flex items-center justify-center">
          <div className="container mx-auto flex md:flex-row flex-col md:gap-0 gap-4 items-center justify-between w-[95%] relative z-10">
            <div className="flex-1">
              <img src={grp} alt="Bikes" className="w-full h-auto" />
            </div>
            <div className="flex-1 md:text-right text-center">
              <h2 className="md:text-6xl text-5xl font-bold mb-4 text-black">
                Pre-booking
              </h2>
              <p className="text-lg mb-4 text-black">
                Did you know that you could pre-book <br></br>your bike on the
                Rhyno! Yes, you heard that right!
              </p>
              <button
                className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-bold "
                onClick={Prebook}
              >
                Pre-book now &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[40px]">
        <div className="flex-grow bg-[#2C2A2A] text-white py-12">
          <h2 className="text-center text-4xl mb-12">Pick your quick</h2>
          <div className="flex md:flex-row flex-col items-center gap-8 justify-center">
            <ProductCard
              imageSrc={model2}
              title="SE03 LITE"
              linkText="Explore SE03 LITE"
              linkUrl="/product1"
            />
            <ProductCard
              imageSrc={model2}
              title="SE03"
              linkText="Explore SE03"
              linkUrl="/product2"
            />
            <ProductCard
              imageSrc={model2}
              title="SE03 MAX"
              linkText="Explore SE03 MAX"
              linkUrl="/product3"
            />
          </div>
        </div>
      </div>

      <div className="flex-grow bg-[#F9ED32] text-white py-12">
        <div className="container mx-auto flex md:flex-row flex-col gap-8 items-center">
          <div className="md:w-1/4 w-full p-4">
            <h2 className="text-4xl font-bold mb-4">Insights about Rhyno</h2>
            <p className="text-lg">
              Some insightful text about Rhyno products goes here. It can be a
              description or any other relevant information.
            </p>
          </div>
          <div className="md:w-3/4 w-full flex md:flex-row flex-col justify-center items-center gap-4">
            <img
              src={charge}
              alt="Bike 1"
              className="md:w-1/4 w-3/4 object-cover transform transition duration-500 hover:scale-105 hover:shadow-lg"
            />
            <img
              src={theft}
              alt="Bike 2"
              className="md:w-1/4 w-3/4 object-cover transform transition duration-500 hover:scale-105 hover:shadow-lg"
            />
            <img
              src={motor}
              alt="Bike 3"
              className="md:w-1/4 w-3/4 object-cover transform transition duration-500 hover:scale-105 hover:shadow-lg"
            />
            <img
              src={color}
              alt="Bike 4"
              className="md:w-1/4 w-3/4 object-cover transform transition duration-500 hover:scale-105 hover:shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="pt-[50px]">
        <Footer />
      </div>
      <FloatingPrebook />
    </div>
  );
};

export default Home;
