import { useState } from "react";
import ResumePdf from "../../assets/images/resume.pdf";
import ReferencesPdf from "../../assets/images/references-no-heather.pdf";
import { FaExternalLinkAlt } from "react-icons/fa";
import ReferencesComponent from "../../components/ReferencesComponent/ReferencesComponent";
import ResumeComponent from "../../components/ResumeComponent/ResumeComponent";

import "./resume.css";

const Resume = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="resume-container">
      <h1 className="text-gray-800 font-light text-6xl mb-2">Resume</h1>
      <div className="resume-btns-container w-screen justify-center mt-5">
        <a
          rel="noreferrer noopener"
          target="_blank"
          className="resume-dl-btn border transform transition duration-500 hover:text-gray-100 hover:scale-110 hover:bg-cyan-700 flex justify-center items-center py-3 text-gray-800 bg-gray-100 p-3 rounded-xl w-60"
          href={ResumePdf}
        >
          <span className="mr-3">Download Resume</span>
          <FaExternalLinkAlt className="text-black-100" />
        </a>
        <a
          rel="noreferrer noopener"
          target="_blank"
          className="references-dl-btn border transform transition duration-500 hover:text-gray-100 hover:scale-110 hover:bg-cyan-700 flex justify-center items-center py-3 text-gray-800 bg-gray-100 p-3 rounded-xl w-60"
          href={ReferencesPdf}
        >
          <span className="mr-3">Download References</span>
          <FaExternalLinkAlt className="text-black-100" />
        </a>
      </div>
      <>
        <div className="resume-button-container">
          <button
            className={active ? "active-tab" : "non-active-tab"}
            onClick={() => setActive(true)}
          >
            Resume
          </button>
          <button
            className={active ? "non-active-tab" : "active-tab"}
            onClick={() => setActive(false)}
          >
            References
          </button>
        </div>
        {active ? <ResumeComponent /> : <ReferencesComponent />}
      </>
    </div>
  );
};

export default Resume;
