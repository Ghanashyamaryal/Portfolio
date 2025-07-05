import {
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoRedux,
  BiLogoMongodb,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  TbBrandNextjs,
  TbBrandGraphql,
} from "react-icons/tb";
import {
  SiExpress,
  SiAppwrite,
  SiNodedotjs,
  SiSanity,
} from "react-icons/si";
import { FaEnvelope } from "react-icons/fa"; // as replacement for nodemailer icon

const ProjectsData = [
  {
    id: "1",
    name: "Hamro Motors",
    image: "./hamromotors.png",
    icons: [
      TbBrandNextjs,
      BiLogoTypescript,
      BiLogoTailwindCss,
      TbBrandGraphql,
      SiSanity,
      FaEnvelope, // used instead of Nodemailer
    ],
    description:
      "A full-fledged automobile portal built with Next.js, TypeScript, GraphQL, Sanity CMS, and Nodemailer.",
    github: "",
    demo: "https://hamromotorsnp.com/",
  },
  {
    id: "2",
    name: "Travel Recommendation Website",
    image: "./Travel.png",
    icons: [
      BiLogoReact,
      BiLogoRedux,
      BiLogoTailwindCss,
      SiExpress,
      BiLogoMongodb,
      SiNodedotjs,
    ],
    description:
      "A MERN stack-based website that recommends travel destinations based on user preferences.",
    github: "https://github.com/Ghanashyamaryal/frontend",
    demo: "https://sfgtravel.vercel.app/",
  },
  {
    id: "3",
    name: "Blog Application",
    image: "./blog.png",
    icons: [
      BiLogoReact,
      BiLogoTailwindCss,
      BiLogoRedux,
      SiAppwrite,
    ],
    description:
      "A blogging platform that allows users to create, edit, and manage posts using Appwrite backend.",
    github: "https://github.com/Ghanashyamaryal/Blog-website",
    demo: "",
  },
];

export default ProjectsData;
