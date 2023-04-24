import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import cpp from "../assets/cpp.png";
import aws from "../assets/aws.png";
import mongodb from "../assets/mongodb.png";
import firebase from "../assets/firebase.png";
import linux from "../assets/linux2.png";
import nodejs from "../assets/node-js.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 5,
      src: nodejs,
      title: "Node Js",
      style: "shadow-lime-500",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: cpp,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: aws,
      title: "AWS",
      style: "shadow-amber-500",
    },
    {
      id: 9,
      src: firebase,
      title: "Firebase",
      style: "shadow-amber-400",
    },
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-zinc-100",
    },
    {
      id: 11,
      src: linux,
      title: "Linux",
      style: "shadow-amber-400",
    },
    {
      id: 12,
      src: mongodb,
      title: "Mongo DB",
      style: "shadow-lime-600",
    },
  ];

  return (
    <div
      name="skills"
      className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-16"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className=" w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
