import "./Pages.css";

import profile from "../Images/profile.jpg";
import { BsInstagram } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import ModalCard from "../Components/Modal";

const Home = ({ data }) => {
  return (
    <div className="wrapper">
      <div className="box-content-home about">

        <div className="content images">
          <img className="photoProfile" src={profile} alt="Ashabil" />
        </div>
        <div className="content headings">
          {/* header 1 */}
          <div className="header">
            <h3 className="myName">Hey I'm {data[0].name}</h3>
            <h1 className="myTitle text-center">{data[0].job}</h1>
          </div>
          {/* header 2 = social media embeded */}
          <div className="header social-media">
            <a
              href="https://www.instagram.com/ashabilsyauqi/"
              rel="noreferrer"
              target="_blank"
            >
              <BsInstagram />
            </a>
            <a
              href="https://github.com/ashabilsyauqi/"
              rel="noreferrer"
              target="_blank"
            >
              <ImGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ashabil-syauqi-869b45236/"
              rel="noreferrer"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://drive.google.com/file/d/1QcYTim88fnGL2I4IH1nAqgSTuv1IpePH/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              <HiDocumentText />
            </a>
            <ModalCard />
          </div>
        </div>
  
      </div>

    </div>
  );
};

export default Home;
