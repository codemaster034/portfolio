import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Ryo" },
  { meta: "last name", metaInfo: "Kanazawa" },
  { meta: "Age", metaInfo: "26 Years" },
  { meta: "Nationality", metaInfo: "Japan" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Kamisato, Okazaki, Japan" },
  { meta: "phone", metaInfo: "+81 50 5539 9613" },
  { meta: "Email", metaInfo: "ryo.kanazawa34@gmail.com" },
  { meta: "Skype", metaInfo: "live:.cid.2aa1850fbe7d60ae" },
  { meta: "langages", metaInfo: "English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
