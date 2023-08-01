import ResumePdf from "../../assets/images/resume.pdf";

const Resume = () => {
  return (
    <div>
      <h1 className="text-black text-lg font-bold p-2">Resume</h1>
      <a href={ResumePdf}>Download</a>

      <h2>Work</h2>
      <h3>CVS Health</h3>
      <p>Digital Software Engineer</p>
    </div>
  );
};

export default Resume;
