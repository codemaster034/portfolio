import React from "react";

const experienceContent = [
  {
    year: "   Sep 2020 - July 2021",
    position: " Senior DApp Developer",
    compnayName: "Plethori company",
    details: `  Developed a number of tokens based on ERC20 and ERC721,NFT Marketplace, and lots of DeX
and Defi projects on Ethereum, Optimistic, Harmony etc. `,
  },
  {
    year: "Sep 2018 - Aug 2020",
    position: "Full Stack Web Developer",
    compnayName: "Fuzzy.one",
    details: `Implemented sign in/up page and also developed lots of sites using MERN Stack and Responsive design`,
  },
  {
    year: "Sep 2017 - Jul 2018",
    position: "Front-end Developer Internship",
    compnayName: "Shure Incorporated",
    details: `Learned the basic HTML5 and CSS skills and built lots of static pages,  it was a short period but I have mastered the basics of Web technologies.
`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className='icon'>
            <i className='fa fa-briefcase'></i>
          </div>
          <span className='time open-sans-font text-uppercase'>{val.year}</span>
          <h5 className='poppins-font text-uppercase'>
            {val.position}
            <span className='place open-sans-font'>{val.compnayName}</span>
          </h5>
          <p className='open-sans-font'>{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
