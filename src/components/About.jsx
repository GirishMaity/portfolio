import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Hi, I am Girish Maity, an enthusiastic full-stack developer currently
          pursuing B.Tech in Computer Science from The Northcap University. I
          have practical experience working with Node.js, Express.js, MongoDB,
          React.js, AWS, Git, and Linux. My expertise includes building secure
          and scalable web applications, as demonstrated in my projects such as
          MERN Chat Application, Password Manager, and Secure Institutional
          Network.
        </p>
        <br />
        <p className="text-xl">
          I am dedicated to perfecting my craft and am always eager to learn new
          technologies and programming languages. Connect with me on LinkedIn or
          check out my Github profile to learn more about my impressive
          portfolio.
        </p>
      </div>
    </div>
  );
};

export default About;
