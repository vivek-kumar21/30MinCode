import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Learning = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const cards = [
    {
      language: "C",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
    },
    {
      language: "C++",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    },
    {
      language: "Java",
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    },
    {
      language: "Python",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    },
    {
      language: "JavaScript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      language: "PHP",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0">
        <div className="flex items-center justify-center mt-12 w-full max-w-5xl">
          <Carousel
            width="100%"
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={5000}
            transitionTime={500}
          >
            <div>
              <img className="rounded-md" src={slide1} alt="Slide 1" />
            </div>
            <div>
              <img className="rounded-md" src={slide2} alt="Slide 2" />
            </div>
            <div>
              <img className="rounded-md" src={slide3} alt="Slide 3" />
            </div>
          </Carousel>
        </div>
        <div className="mt-16 w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800">
            Popular Programming Languages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-8 px-4 md:px-10">
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-white w-full sm:w-80 lg:w-96 rounded-lg shadow-md p-6 flex flex-col gap-y-12 hover:bg-gray-200 hover:-translate-y-2 transition duration-500 group"
              >
                <p className="text-xl font-bold">{card.language}</p>
                <div className="flex items-center justify-between">
                  <Link
                    to={isAuthenticated && `/learn/${card.language}`}
                    onClick={!isAuthenticated && loginWithRedirect}
                    className="px-6 py-2 border font-bold text-gray-700 border-black rounded-md hover:bg-gray-400 hover:border-gray-400 hover:text-white duration-500"
                  >
                    Get Started
                  </Link>
                  <img
                    src={card.image}
                    alt={card.language}
                    className="h-24 grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
