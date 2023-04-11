import React from "react";
import HeroImage from "../assets/dev-ed-wave.webp";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Hey there! I'm Girish Maity, a full stack developer with a knack for
            Node.js, Express.js, and MongoDB. Along the way, I've picked up some
            C++, React JS, JavaScript, AWS, Git, and other nifty skills. I've
            also worked on some pretty cool projects like a MERN chat
            application and a web-based password manager. Ready to code my way
            into the future!
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className=" group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <Player
            src="https://assets8.lottiefiles.com/packages/lf20_v9riyrep.json"
            background="transparent"
            speed="1"
            style={{ width: "350px", height: "350px" }}
            loop
            controls
            autoplay
          />
          {/* <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
