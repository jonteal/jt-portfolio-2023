import ResumePdf from "../../assets/images/resume.pdf";

import "./resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="text-black text-lg font-bold p-2">Resume</h1>
      <a
        className="transform transition duration-500 hover:text-gray-100 hover:scale-110 hover:bg-cyan-700 flex justify-center items-center mt-0 mb-5 py-5 text-gray-800 bg-gray-100 p-5 border rounded-xl w-60"
        href={ResumePdf}
      >
        Download
      </a>

      {/* <h2>Work</h2>
      <h3>CVS Health</h3>
      <p>Digital Software Engineer</p> */}
    </div>
  );
};

export default Resume;
