import React from "react";
import ContactData from "../data/contact";

const SocialHandles = ({textColor}) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      data-aos-once="false"
      className="flex gap-5 my-4"
    >
      {ContactData?.links?.map((link, index) => (
        <a
          key={index}
          className={`text-${textColor} hover:bg-gray-400 p-1 rounded-md transition-colors duration-300`}
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
};

export default SocialHandles;
