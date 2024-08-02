import React, { useState, useEffect } from "react";
import Img1 from "../assests/slider1.png";
import Img2 from "../assests/slider2.png";
import Img3 from "../assests/slider3.png";
import Img4 from "../assests/slider4.png";
import Img5 from "../assests/slider5.png";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [Img1, Img2, Img3, Img4, Img5];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="controls-carousel"
      className="relative w-full h-full bg-[#202020]"
      data-carousel="slide"
    >
      <div className="relative h-64 overflow-hidden rounded-lg md:h-[600px]">
        <div
          className="flex h-full items-center transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full h-[85%] flex justify-center items-center flex-shrink-0 origin-left"
            >
              <img
                src={item}
                style={{
                  transition: "transform 0.7s ease-out",
                  boxShadow: "0 10px 20px rgba(244, 245, 200, 0.5)",
                  transform:
                    "scale3d(.95,.95,.95) scale(.95) rotateY(20deg) rotateZ(1deg) rotateX(10deg)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform =
                    "scale3d(.95,.95,.95) scale(.95) rotateY(20deg) rotateZ(1deg) rotateX(10deg)")
                }
                className="h-full w-[65%] rounded-md bg-white border-1 border-white text-white"
              />
              {/* <div className="absolute top-[50%] left-[20%] ">
                <div
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.color = "transparent";
                  }}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform =
                      "scale3d(.95,.95,.95) scale(.95) rotateY(30deg) rotateZ(1deg) rotateX(10deg)")
                  }
                  style={{
                    transition: "transform 0.7s ease-out",
                    transform:
                      "scale3d(.95,.95,.95) scale(.95) rotateY(30deg) rotateZ(1deg) rotateX(10deg)",
                    textShadow:
                      "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
                  }}
                  className="font-extrabold text-[50px] text-white font-lato"
                >
                  Photograph
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-400/30 group-hover:bg-white/50 dark:group-hover:bg-gray-600/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-300 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-400/30 group-hover:bg-white/50 dark:group-hover:bg-gray-600/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-300 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
