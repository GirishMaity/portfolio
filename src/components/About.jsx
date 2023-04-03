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
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          numquam et voluptates recusandae explicabo, aperiam placeat quisquam
          accusamus? A ut distinctio harum explicabo tenetur optio qui veniam,
          ullam debitis molestias accusantium dolorem unde natus odio veritatis,
          exercitationem rem ipsum, ad eveniet repellat. Distinctio laborum
          minima id reiciendis et nulla nisi!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          nam aspernatur impedit perspiciatis corporis possimus eos veritatis
          rem officia dolore harum vero pariatur deleniti minima, temporibus
          alias tempore veniam ipsa aut fuga eligendi consequatur, perferendis
          qui tenetur! Necessitatibus tempore aut fugit, repellat quos corrupti
          temporibus error vitae facere rem impedit.
        </p>
      </div>
    </div>
  );
};

export default About;
