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
import Carousel from './Carousel';

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

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });
  const [ref6, inView6] = useInView({ triggerOnce: true });

  return (
    <div className="bg-black">
      <NavBar />
      <p className="text-[4.5vw] text-center font-bold text-white animate-zoomIn">
        “Let's Elevate Your Ride Experience With Rhyno
      </p>
      <p className="text-[4.5rem] px-[125px] font-bold text-white animate-zoomIn">
        Where Superiority Meets{" "}
        <span className="inline-block w-[7rem] text-center font-bold text-yellow-300">
          {words[currentWordIndex]}
        </span>
      </p>
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
      <section className="pt-[60px]" ref={ref4}>
        <div className={`container mx-auto ${inView4 ? "animate-zoomIn" : ""}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-1 bg-yellow-400 p-4 rounded">
              <h3 className="text-[30px] font-bold">Charge Time</h3>
              <img src={charge} alt="Charge Time" />
            </div>
            <div className="col-span-1 bg-yellow-400 p-4 rounded">
              <h3 className="text-[30px] font-bold">Anti-Theft System</h3>
              <img src={theft} alt="Anti-Theft System" />
            </div>
            <div className="col-span-1 bg-yellow-400 p-4 rounded">
              <h3 className="text-[30px] font-bold">Motor Power</h3>
              <img src={motor} alt="Motor Power" />
            </div>
            <div className="col-span-1 bg-yellow-400 p-4 rounded">
              <h3 className="text-[30px] font-bold">Color Options</h3>
              <img src={color} alt="Color Options" />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[60px]" ref={ref5}>
        <div className={`container mx-auto ${inView5 ? "animate-zoomIn" : ""}`}>
          <h3 className="text-[40px] text-yellow-400 text-center">Our Story</h3>
          <p className="text-white text-[20px] text-center">
            Founded with a vision to revolutionize the way we commute, Rhyno is
            at the forefront of the electric vehicle industry, setting new
            standards for performance, safety, and style. Our journey began with
            a simple idea - to create a scooter that not only meets the demands
            of modern urban life but also contributes to a greener and more
            sustainable future.
            <br></br>
            <br></br>
            Our commitment to excellence is evident in every Rhyno scooter,
            meticulously designed and engineered to deliver an unparalleled
            riding experience. From the robust motor to the advanced battery
            technology, every aspect of our scooters is crafted with precision
            and care.
            <br></br>
            <br></br>
            Join us in our mission to redefine urban mobility and make a
            positive impact on our planet. Experience the thrill of riding a
            Rhyno and be part of the electric revolution.
          </p>
        </div>
      </section>
      <section className="pt-[60px]" ref={ref6}>
        <div className={`container mx-auto ${inView6 ? "animate-zoomIn" : ""}`}>
          <Carousel />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;


// src/components/Home.js
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
import FloatingPrebookButton from "./FloatingPrebookButton"; // Import the FloatingPrebookButton component

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
    navigate("/prebook");
  };

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <div className="bg-black">
      <NavBar />
      <p className="text-[4.5vw] text-center font-bold text-white animate-zoomIn">
        “Let's Elevate Your Ride Experience With Rhyno
      </p>
      <p className="text-[4.5rem] px-[125px] font-bold text-white animate-zoomIn">
        Where Superiority Meets{" "}
        <span className="inline-block w-[7rem] text-center font-bold text-yellow-300">
          {words[currentWordIndex]}
        </span>
      </p>
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
                Introducing RHYNO SE02 LITE
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
              <img src={model1} alt="S02 LITE" />
            </div>
          </div>
        </div>
      </section>
      <div className="carousel">
        <Carousel />
      </div>
      <section>
        <ProductCard />
      </section>
      <Footer />
      <FloatingPrebookButton /> {/* Add the FloatingPrebookButton component */}
    </div>
  );
};

export default Home;
