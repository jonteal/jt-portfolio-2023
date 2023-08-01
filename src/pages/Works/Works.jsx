import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./works.css";
import crownClothingImage from "../../assets/images/crown-clothing.png";
import ozarkAirbnbImage from "../../assets/images/ozark-airbnb.png";
import studyBuddyImage from "../../assets/images/study-buddy.png";

const projects = [
  {
    id: 1,
    name: "Capstone Clothing",
    description:
      "A sleek and minimal e-commerce platform with cart, navigation, and stripe payment processing integration.",
    github: "https://github.com/jonteal/capstone-e-commerce",
    liveLink: "https://radiant-cactus-aa7b51.netlify.app/",
    image: crownClothingImage,
    imageDesc: "E-Commerce store for clothing",
  },
  {
    id: 2,
    name: "Ozark Airbnb",
    description: "A front end layout for an Airbnb website with navigation",
    github: "https://github.com/jonteal/meshell-jackson-properties",
    liveLink: "https://splendorous-paprenjak-226b7b.netlify.app/",
    image: ozarkAirbnbImage,
    imageDesc: "Front end website for an Airbnb business called Ozark Airbnb",
  },
  {
    id: 3,
    name: "Study Buddy",
    description: "A full stack MERN tool to help students study",
    github: "https://github.com/jonteal/studybuddy",
    // linkLink: '',
    image: studyBuddyImage,
    imageDesc: "A tool for students to use in order to prepare for tests",
  },
];

const Works = () => {
  return (
    <div className="works-container">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Works;
