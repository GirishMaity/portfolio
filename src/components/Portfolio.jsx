import React from "react";
// import ReactDOM from "react-dom";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import chatApp from "../assets/portfolio/online-worlds.png";
import selectionSort from "../assets/portfolio/selectionSort.png";
import network from "../assets/portfolio/network.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/authentication.png";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import Carousel from "react-elastic-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "MERN Chat App",
      src: chatApp,
    },
    {
      id: 2,
      name: "Password Manager",
      src: reactParallax,
    },
    {
      id: 3,
      name: "Secure Institutional Network",
      src: network,
    },
    {
      id: 4,
      name: "Selection Sort simulator",
      src: selectionSort,
    },

    // {
    //   id: 3,
    //   src: navbar,
    // },
    // {
    //   id: 4,
    //   src: reactSmooth,
    // },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out my projects</p>
        </div>

        <div className=" ">
          <Carousel breakPoints={breakPoints}>
            {portfolios.map(({ id, src, name }) => (
              <div
                key={id}
                className=" shadow-md shadow-gray-600 rounded-lg items-center flex justify-center flex-col m-1"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 h-44 w-52"
                />
                <p className=" text-center">{name}</p>
                <div className=" flex items-center justify-center">
                  <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
