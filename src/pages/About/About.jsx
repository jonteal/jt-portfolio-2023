import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-row w-screen justify-center">
      <div className="border w-screen m-3 rounded-xl flex flex-col items-center bg-gray-800">
        <h1 className="rounded-xl text-6xl text-center px-28 py-14 bg-gray-800 text-gray-100">
          Hey, I'm Jon! I'm a professional full stack engineer, specializing in
          front-end web development using React & Typescript.
        </h1>
        <Link className="contact-me-link" to="/contact">
          <button className="contact-me-button transform transition duration-500 hover:text-gray-100 hover:scale-110 hover:bg-cyan-700 flex justify-center items-center mt-0 mb-5 py-5 text-gray-800 bg-gray-100 p-5 border rounded-xl w-60">
            Join my journey
          </button>
        </Link>
        <div className="flex flex-row items-end mb-10 mt-8 self-end mr-10">
          <div className="mr-3 flex flex-col items-end">
            <p>
              <span className="italic text-gray-200">
                Step into my digital universe
              </span>
            </p>
            <p className="text-gray-100">Jon Jackson</p>
          </div>
          <img
            className="w-20 rounded-xl self-end"
            src="/images/me.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
