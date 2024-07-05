import { Link } from "react-router-dom";
import hero_logo from "../assets/hero-logo.png";

const Home = () => {
  return (
    <div className="bg-custom-gradient h-auto md:h-[585px] flex flex-col md:flex-row items-center justify-between">
      <img
        className="h-[340px] md:h-[700px] mt-0 md:mt-0 mb-10 md:mb-28 order-1 md:order-2"
        src={hero_logo}
        alt="hero_logo"
      />
      <div className="text-center md:text-left md:ml-36 order-2 md:order-1 px-6 md:px-0">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Empower your future
          <br />
          through coding
        </h1>
        <h2 className="text-lg md:text-xl text-gray-500 mt-4">
          The best platform to learn to code in 30 minutes
          <br /> quick, efficient, and effective learning.
        </h2>
        <Link to="/learn">
          <button className="px-6 py-2 bg-red-400 rounded-md mt-10 mb-10 font-bold text-white hover:bg-red-500 duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
