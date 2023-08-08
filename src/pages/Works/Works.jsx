import ProjectCard from "../../components/ProjectCard/ProjectCard";
import crownClothingImage from "../../assets/images/crown-clothing.png";
import ozarkAirbnbImage from "../../assets/images/ozark-airbnb.png";
import studyBuddyImage from "../../assets/images/study-buddy.png";

import "./works.css";

const projects = [
  {
    id: 1,
    name: "Capstone Clothing",
    description:
      "A sleek and minimal e-commerce platform with cart, navigation, and stripe payment processing integration.",
    github: "https://github.com/jonteal/capstone-e-commerce",
    liveLink: "https://capstone-clothing.netlify.app/",
    image: crownClothingImage,
    imageDesc: "E-Commerce store for clothing",
    technologies:
      "React, Redux, Redux-Saga, Firebase, SASS, Typescript, Styled Components, Stripe",
  },
  {
    id: 2,
    name: "Ozark Airbnb",
    description:
      "A front end layout for an Airbnb website with dynamic routing and local static database driving dynamic content.",
    github: "https://github.com/jonteal/ozark-airbnb",
    liveLink: "https://ozark-airbnb.netlify.app/",
    image: ozarkAirbnbImage,
    imageDesc: "Front end website for an Airbnb business called Ozark Airbnb",
    technologies: "React",
  },
  {
    id: 3,
    name: "Study Buddy",
    description:
      "A full stack MERN tool to help students study and prepare for tests as well as enhance memorization skills.",
    github: "https://github.com/jonteal/studybuddy",
    // liveLink: "https://studybuddy-frontend.vercel.app/",
    image: studyBuddyImage,
    imageDesc: "A tool for students to use in order to prepare for tests",
    technologies: "React, Express, MongoDB, Node, GraphQL",
  },
];

const Works = () => {
  return (
    <div className="border m-3 flex flex-col items-center bg-gray-800 p-14">
      <h1 className="text-gray-100 font-light text-6xl mb-2">Works</h1>
      <div className="works-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Works;
