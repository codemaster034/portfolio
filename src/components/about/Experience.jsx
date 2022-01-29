import React from "react";

const experienceContent = [
  {
    year: "May 2021 - Dec 2021",
    position: " Senior Full-Stack Blockchain Developer",
    compnayName: "Self-Employed",
    details:
      "Developed lots of DeFi projects like ERC721, ERC1155, NFT Marketplace, Dex and so on.",
  },
  {
    year: "Sep 2018 - Dec 2019",
    position: "Full-Stack Web Developer",
    compnayName: "Fuzzy.one",
    details: `Structrued main projects and also developed lots of sites using MERN Stack and Responsive design`,
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
