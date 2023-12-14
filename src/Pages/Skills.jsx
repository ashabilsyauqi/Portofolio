import React from "react";
import SkillCard from "../Components/SkillCard";

// import images
import react from "../Images/react.png";
import javascript from "../Images/javascript.png";
import bootstrap from "../Images/bootstrap.png";
import jquery from '../Images/Jquery.png';
import php from '../Images/pngwing.com.png';



const Skills = () => {
  
  const MySkill = [
    {
      Skills: {
        logoskill: react,
        titleskill: "React js",
        setskill: [
          "React Components",
          "React Functional and Class Components",
          "React State Management",
          "React hooks",
          "Single Page Application",
        ],
      },
    },
    {
      Skills: {
        logoskill: javascript,
        titleskill: "Javascript",
        setskill: [
          "API Fetching Data",
          "Asychronous Await",
          "Basic Syntax",
          "Form handling",
          "DOM Manupulation",
        ],
      },
    },
    {
      Skills: {
        logoskill: bootstrap,
        titleskill: "Bootstrap",
        setskill: [
          "Bootstrap UI Components",
          "Classes",
          "Javascript Classes",
          "Responsive Web Design",
          "Input Form",
        ],
      },
    },
    {
      Skills: {
        logoskill: jquery,
        titleskill: "Jquery",
        setskill: [
          "Jquery UI Components",
          "Classes",
          "Javascript Plugins",
          "Jquery Ui's",
          "Jquery CDN",
        ],
      },
      Skills: {
        logoskill: php,
        titleskill: "PHP",
        setskill: [
          "Form Handling",
          "Basic",
          "CRUD to Database",
          "GET & POST",
        ],
      },
      
    },
  ]
  
  return (
    <div className="wrapper">
      <div className="box-content-home skills">
        {/* Mengirimkan data skillsData sebagai props */}
        {MySkill.map((skill, index) => (
          <SkillCard key={index} skillData={skill} />
        ))}
      </div>

      {/* <div className="btn-wrap new">
        <Link className="button-56" to="/about">
          back
        </Link>
        <Link className="button-56" to="/project">
          Next
        </Link>
      </div> */}
    </div>
  );
};

export default Skills;
