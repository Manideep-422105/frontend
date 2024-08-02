import React from "react";
import phonelogo from "../assests/phonelogo.jpg";
import chatlogo from "../assests/chatlogo.jpeg";
import meessagelogo from "../assests/messagelogo.jpg";
import rhynologo from "../assests/Rhynologo.png";
const ContactSection = () => {
  return (
    <div className="bg-[#414141] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-around mb-8">
          <div className="flex flex-col items-center mb-6 md:mb-0 md:pr-8 md:border-r md:border-yellow-500">
            <div className="mb-4 w-[60px]">
              {/* <svg className="w-12 h-12 text-yellow-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M13 12h7v2h-7zm0 4h7v2h-7zm0-8h7v2h-7zm-2-1h-4v-4h4v4zm0 2h-4v4h4v-4zm-4 6v4h4v-4h-4zm-2 4h-2v-2h-2v4h4v-2zm6-12v-6h-10v16h10v-2h-2v-8h2zm-8 8h2v2h-2v-2zm0-6h2v2h-2v-2zm0-6h2v2h-2v-2z"/>
              </svg> */}
              <img src={phonelogo} alt="phonelogo" />
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">NEED HELP?</p>
              <p className="mt-2">Our dedicated team are here to help</p>
              <button className="mt-4 px-4 py-2 bg-yellow-500 text-black font-bold rounded">
                CHAT NOW
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center mb-6 md:mb-0 md:pr-12 md:border-r md:border-yellow-500">
            <div className="mb-4">
              {/* <svg className="w-12 h-12 text-yellow-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M13 12h7v2h-7zm0 4h7v2h-7zm0-8h7v2h-7zm-2-1h-4v-4h4v4zm0 2h-4v4h4v-4zm-4 6v4h4v-4h-4zm-2 4h-2v-2h-2v4h4v-2zm6-12v-6h-10v16h10v-2h-2v-8h2zm-8 8h2v2h-2v-2zm0-6h2v2h-2v-2zm0-6h2v2h-2v-2z"/>
              </svg> */}
              <img src={chatlogo} alt="chatlogo" className="bg-black" />
            </div>
            <div className="text-center ">
              <p className="font-bold text-lg">CALL US</p>
              <p className="mt-2">Talk to our team 24/7 about your needs.</p>
              <p className="mt-4 text-yellow-500 text-xl">+91-9023987528</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 w-[100px]">
              {/* <svg className="w-12 h-12 text-yellow-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M13 12h7v2h-7zm0 4h7v2h-7zm0-8h7v2h-7zm-2-1h-4v-4h4v4zm0 2h-4v4h4v-4zm-4 6v4h4v-4h-4zm-2 4h-2v-2h-2v4h4v-2zm6-12v-6h-10v16h10v-2h-2v-8h2zm-8 8h2v2h-2v-2zm0-6h2v2h-2v-2zm0-6h2v2h-2v-2z"/>
              </svg> */}
              <img src={meessagelogo} alt="meessagelogo" />
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">SUBSCRIBE US</p>
              <p className="mt-2">And get the scoop on sales & new gear!</p>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="mt-4 px-4 py-2 w-full bg-gray-700 border border-gray-700 rounded"
              />
              <button className="mt-4 px-4 py-2 bg-yellow-500 text-black font-bold rounded">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-yellow-500 pt-8 pb-[20px]">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0 w-[300px]">
              {/* <h3 className="font-bold text-lg mb-4">RHINO</h3> */}
              <img src={rhynologo} alt="rhynologo" />
              <p>
                Let's Elevate Your Ride
                <br></br>
                Experience With Rhyno—Where Superiority Meets Style
              </p>
            </div>
            <div className="mb-6 md:mb-0 pl-[120px]">
              <h3 className="font-bold text-lg mb-4">USEFUL LINKS</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Pre-book
                  </a>
                </li>
                <li>
                  <a href="/rentals" className="hover:underline">
                    Rental
                  </a>
                </li>
                <li>
                  <a href="https://in.linkedin.com/company/rhyno-wheels" className="hover:underline">
                    Career
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0 px-[80px]">
              <h3 className="font-bold text-lg mb-4">PRODUCTS</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    SE03 Lite
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    SE03
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    SE03 Max
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold text-lg mb-4">PRODUCTS</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy policy
                  </a>
                </li>
                <br></br>
                <li>
                  <a href="#" className="hover:underline">
                    Refund policy
                  </a>
                </li>
                <br></br>
                <li>
                  <a href="#" className="hover:underline">
                    Website policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-[100px]">
              <h3 className="font-bold text-lg mb-4 ">ADDRESS</h3>
              <p>info@rhyno.in</p>
              <p>+91-9023987528</p>
              <p>
                Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar,
                Gujarat, India.
              </p>
            </div>
          </div>
        </div>
        <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <div flex flex-column>
            <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2024 <a href="#">Rhyno EV Solutions Private Limited.</a>.
            </span>
            <p className="px-[45px] text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              All Rights Reserved.
            </p>
          </div>

          <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a
              href="#"
              class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Facebook page</span>
            </a>

            <a
              href="https://www.instagram.com/rhyno.in/"
              class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <span class="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </a>

            <a
              href="https://in.linkedin.com/company/rhyno-wheels"
              class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <span class="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </a>

            <a
              href="#"
              class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
