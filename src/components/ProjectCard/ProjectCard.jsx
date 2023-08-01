import { FaGithub, FaRegEye } from "react-icons/fa";

import "./projectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="border rounded-xl h-96 w-96 project-container flex flex-col">
      <div className="project-header-container">
        <h3 className="text-black text-lg font-bold p-2">{project.name}</h3>
      </div>
      <div className="image-container">
        <img
          className="project-image"
          alt={project.imageDesc}
          src={project.image}
        />
        <p className="project-description">{project.description}</p>
      </div>
      <div className="project-card-link-container">
        <a
          className="mx-12 project-card-link transform transition duration-500 hover:text-gray-100 hover:scale-110 hover:bg-cyan-700 flex justify-center items-center mt-0 text-gray-800 bg-gray-100 p-2 border rounded-xl w-60"
          rel="noreferrer noopener"
          target="_blank"
          href={project.github}
        >
          <FaGithub />
        </a>
        <a
          rel="noreferrer noopener"
          target="_blank"
          className="mx-12 project-card-link transform transition duration-500 hover:text-gray-100 hover:scale-110 hover:bg-cyan-700 flex justify-center items-center mt-0 text-gray-800 bg-gray-100 p-2 border rounded-xl w-60"
          href={project.liveLink}
        >
          <FaRegEye />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
