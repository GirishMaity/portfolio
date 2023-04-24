import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "./SkillCard.js";
import authentication from "../assets/portfolio/authentication.png";
import selectionSort from "../assets/portfolio/selectionSort.png";
import network from "../assets/portfolio/network.png";
import onlineworlds from "../assets/portfolio/online-worlds.png";

import hr from "../assets/curve-hr.svg";

export default function Projects() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div id="skills" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Skills</h1>
      <p className="font-light text-gray-400">Here are some of my skills</p>

      <div className="mt-4">
        <Slider {...settings}>
          <SkillCard
            name="Password Manager"
            experience="1 years"
            img={authentication}
          />
          <SkillCard
            name="Selection Sort visualizer"
            experience="1 years"
            img={selectionSort}
          />
          <SkillCard name="Secure Network" experience="1 years" img={network} />
          <SkillCard
            name="Mern Chat App"
            experience="1 years"
            img={onlineworlds}
          />
        </Slider>
      </div>
      <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
    </div>
  );
}
