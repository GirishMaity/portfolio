import React from "react";
import chatApp from "../assets/portfolio/online-worlds.png";
import selectionSort from "../assets/portfolio/selectionSort.png";
import network from "../assets/portfolio/network.png";
import reactParallax from "../assets/portfolio/authentication.png";
import Carousel from "react-elastic-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { enqueueSnackbar, SnackbarProvider } from "notistack";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "MERN Chat App",
      src: chatApp,
      demo: "https://www.chat-up.me/",
      code: "https://github.com/GirishMaity/Secure-chat-application",
    },
    {
      id: 2,
      name: "Password Manager",
      src: reactParallax,
      demo: null,
      code: "https://github.com/GirishMaity/Password_Manager",
    },
    {
      id: 3,
      name: "Secure Institutional Network",
      src: network,
      demo: null,
      code: "https://github.com/GirishMaity/CISCO-internship-project",
    },
    {
      id: 4,
      name: "Selection Sort simulator",
      src: selectionSort,
      demo: "https://girishmaity.github.io/Selection-Sort-Visualizer/",
      code: "https://github.com/GirishMaity/Selection-Sort-Visualizer",
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  const handleNoDemo = () => {
    enqueueSnackbar("Demo for this project is currently unavailable", {
      variant: "error",
    });
  };

  return (
    <SnackbarProvider>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-5"
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
              {portfolios.map(({ id, src, name, demo, code }) => (
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
                    <button
                      className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      onClick={() =>
                        demo === null ? handleNoDemo() : window.open(demo)
                      }
                    >
                      Demo
                    </button>
                    <button
                      className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      onClick={() => window.open(code)}
                    >
                      Code
                    </button>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </SnackbarProvider>
  );
};

export default Portfolio;
