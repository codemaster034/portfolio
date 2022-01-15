import React from "react";

const skillsContent = [
  //Basic
  { skillPercent: "87", skillName: "C++" },
  { skillPercent: "64", skillName: "Python" },
  { skillPercent: "72", skillName: "JAVASCRIPT" },
  { skillPercent: "65", skillName: "TYPESCRIPT" },
  //Fron-end
  { skillPercent: "87", skillName: "HTML5" },
  { skillPercent: "83", skillName: "CSS" },
  { skillPercent: "69", skillName: "SCSS" },
  { skillPercent: "59", skillName: "LESS" },
  { skillPercent: "82", skillName: "REACT" },
  { skillPercent: "64", skillName: "VUE" },
  { skillPercent: "50", skillName: "ANGULAR" },

  //Back-end
  { skillPercent: "86", skillName: "NODEJS" },
  { skillPercent: "73", skillName: "PHP" },
  { skillPercent: "85", skillName: "MYSQL" },
  { skillPercent: "73", skillName: "MONGODB" },

  //WEB3
  { skillPercent: "88", skillName: "WEB3" },
  { skillPercent: "69", skillName: "DEX" },
  { skillPercent: "72", skillName: "SOLIDITY" },
  { skillPercent: "63", skillName: "RUST" },
  { skillPercent: "53", skillName: "SOLANA" },
  { skillPercent: "66", skillName: "MORALIS" },
  { skillPercent: "78", skillName: "HARDHAT" },
  { skillPercent: "66", skillName: "TRUFFLE" },

  //OTHERS
  { skillPercent: "84", skillName: "STREAMING" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className='col-6 col-md-3 mb-3 mb-sm-5' key={i}>
          <div className={`c100 p${val.skillPercent}`}>
            <span>{val.skillPercent}%</span>
            <div className='slice'>
              <div className='bar'></div>
              <div className='fill'></div>
            </div>
          </div>
          <h6 className='text-uppercase open-sans-font text-center mt-2 mt-sm-4'>
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
