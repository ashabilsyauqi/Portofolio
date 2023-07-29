// import React from "react";
// // import react from '../Images/react.png'
// // import bootstrap from '../Images/bootstrap.png'
// // import htmlcss from '../Images/html&css.png'
// // import javascript from '../Images/javascript.png'

// export default function SkillCard({skillData}) {
//    if (!skillData.data) {
//     return <div>Loading...</div>; // atau komponen lain untuk menunjukkan loading atau komponen kosong
//   }
//   const { Skills } = skillData[0];
//   if (!Skills) {
//     return <div>Loading...</div>;
//   }
//   const { logoskill, titleskill, setskill } = Skills;

//   return (
//     <div className="skillcard">
//       <h2 className="h4">{titleskill}</h2>
//       <div className="images-skill">
//         <img src={logoskill} alt="skills" className="skill-img" />
//       </div>
//       <ul>
//         {setskill.map((skill, index) => (
//           <li key={index}>{skill}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // belum selesai

import React from "react";

const SkillCard = ({skillData}) => {
  if (!skillData || !skillData.Skills) {
    return <div className="skillCard">Loading...</div>;
  }

  const { logoskill, titleskill, setskill } = skillData.Skills;

  return (
    <div className="skillcard">
      <h2 className="h4">{titleskill}</h2>
      <div className="images-skill">
        <img src={logoskill} alt="skills" className="skill-img" />
      </div>
      <ul>
        {setskill.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
