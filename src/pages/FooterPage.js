import React from "react";
import phonelogo from "../assests/phonelogo.jpg";
import chatlogo from "../assests/chatlogo.jpeg";
import messagelogo from "../assests/messagelogo.jpg";
import rhynologo from "../assests/Rhynologo.png";

const ContactSection = () => {
  return (
    <div className="bg-[#414141] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-around mb-8 space-y-8 md:space-y-0">
          {/* Contact Options */}
          <div className="flex flex-col items-center text-center md:w-1/3">
            <div className="mb-4 w-[60px]">
              <img src={phonelogo} alt="phonelogo" />
            </div>
            <p className="font-bold text-lg">NEED HELP?</p>
            <p className="mt-2">Our dedicated team are here to help</p>
            <button className="mt-4 px-4 py-2 bg-yellow-500 text-black font-bold rounded">
              CHAT NOW
            </button>
          </div>

          <div className="flex flex-col items-center text-center md:w-1/3">
            <div className="mb-4">
              <img src={chatlogo} alt="chatlogo" className="w-[60px]" />
            </div>
            <p className="font-bold text-lg">CALL US</p>
            <p className="mt-2">Talk to our team 24/7 about your needs.</p>
            <p className="mt-4 text-yellow-500 text-xl">+91-9023987528</p>
          </div>

          <div className="flex flex-col items-center text-center md:w-1/3">
            <div className="mb-4 w-[100px]">
              <img src={messagelogo} alt="messagelogo" />
            </div>
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

        {/* Footer Section */}
        <div className="border-t border-yellow-500 pt-8">
          <div className="flex flex-col md:flex-row justify-between text-center md:text-left space-y-8 md:space-y-0">
            {/* Logo & Description */}
            <div className="md:w-1/4">
              <img src={rhynologo} alt="rhynologo" className="mb-4 mx-auto md:mx-0" />
              <p>
                Let's Elevate Your Ride
                <br />
                Experience With Rhyno—Where Superiority Meets Style
              </p>
            </div>

            {/* Useful Links */}
            <div className="md:w-1/4">
              <h3 className="font-bold text-lg mb-4">USEFUL LINKS</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">Home</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">About us</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Products</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Contact us</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Pre-book</a>
                </li>
                <li>
                  <a href="/rentals" className="hover:underline">Rental</a>
                </li>
                <li>
                  <a href="https://in.linkedin.com/company/rhyno-wheels" className="hover:underline">Career</a>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div className="md:w-1/4">
              <h3 className="font-bold text-lg mb-4">PRODUCTS</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">SE03 Lite</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">SE03</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">SE03 Max</a>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div className="md:w-1/4">
              <h3 className="font-bold text-lg mb-4">POLICIES</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">Privacy policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Refund policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Website policy</a>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div className="md:w-1/4">
              <h3 className="font-bold text-lg mb-4">ADDRESS</h3>
              <p>info@rhyno.in</p>
              <p>+91-9023987528</p>
              <p>
                Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-yellow-500 mt-8 pt-4">
          <div className="text-sm text-gray-500 text-center md:text-left">
            © 2024 <a href="#">Rhyno EV Solutions Private Limited.</a> All Rights Reserved.
          </div>
          <div className="flex space-x-5 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="https://www.instagram.com/rhyno.in/" className="text-gray-400 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                className="w-5 h-5"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.7 9.9-93.8 36.2-26.3 26.2-34.5 58-36.2 93.9-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.3 26.2 58 34.5 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.3 34.4-58 36.2-93.9 2.1-37 2.1-147.9 0-184.9zm-48.8 224.5c-7.8 19.7-22.9 35-42.7 42.7-29.5 11.7-99.5 9-132.9 9s-103.4 2.6-132.9-9c-19.7-7.8-34.9-22.9-42.7-42.7-11.7-29.5-9-99.5-9-132.9s-2.6-103.4 9-132.9c7.8-19.7 22.9-35 42.7-42.7 29.5-11.7 99.5-9 132.9-9s103.4-2.6 132.9 9c19.7 7.8 35 22.9 42.7 42.7 11.7 29.5 9 99.5 9 132.9s2.6 103.4-9 132.9z"/>
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 13"
              >
                <path
                  fillRule="evenodd"
                  d="M14.293.11a3.823 3.823 0 0 1-1.183 1.624A3.352 3.352 0 0 0 12.75.98c-.798 0-1.556.293-2.152.82a3.038 3.038 0 0 0-1.418 2.13c-.028.194-.028.391 0 .586-2.39-.123-4.676-1.206-6.333-3.085a2.804 2.804 0 0 0-.388 2.747c.164.35.4.67.69.94a3.349 3.349 0 0 1-1.244-.346v.03c0 .73.265 1.433.746 1.99.48.557 1.14.928 1.86 1.058a3.371 3.371 0 0 1-1.525.056 3.032 3.032 0 0 0 1.13 1.41c.486.35 1.06.587 1.662.68a6.842 6.842 0 0 1-4.146 1.334c-.265 0-.53-.014-.793-.042A9.616 9.616 0 0 0 5.303 13c6.186 0 9.572-4.941 9.572-9.228 0-.14 0-.28-.008-.42a6.567 6.567 0 0 0 1.55-1.625A6.333 6.333 0 0 1 14.293.11Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path
                  fillRule="evenodd"
                  d="M9 0C4.029 0 0 4.029 0 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9Zm3.287 10.293c.036.54.07 1.08.105 1.62.007.1-.025.142-.13.14-.443-.008-.887-.001-1.33-.005a.161.161 0 0 1-.172-.138c-.12-.795-.242-1.59-.361-2.385-.01-.07-.048-.088-.104-.087-.457.002-.915.002-1.372 0-.046 0-.067.013-.077.06-.114.756-.23 1.51-.344 2.266-.012.078-.04.106-.123.104-.428-.004-.856-.002-1.285-.002-.2 0-.2 0-.166-.19.188-1.117.373-2.234.561-3.351.05-.302.1-.604.149-.907.012-.07-.014-.094-.085-.093-.451.003-.902.002-1.353 0-.113 0-.13-.026-.108-.135.094-.467.187-.933.28-1.4.04-.2.08-.402.12-.603.022-.11.043-.221.065-.331.022-.11.047-.22.065-.33.014-.08.046-.11.128-.109.473.004.947.002 1.42.002h.143c.018.054-.008.1-.016.147-.045.236-.091.472-.135.707-.04.209-.082.417-.122.626-.022.116-.043.233-.063.349-.011.06-.013.12.079.12.527.004 1.055.005 1.583 0 .099-.001.137.023.15.127.044.285.093.57.14.855.068.413.135.826.202 1.24.014.085.047.12.14.12h1.431c.136 0 .136 0 .112.131-.14.717-.277 1.434-.418 2.15-.035.177-.07.354-.106.531Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Pinterest page</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
