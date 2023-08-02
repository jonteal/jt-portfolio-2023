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

      <div className="border w-screen m-3 rounded-xl flex flex-col items-center bg-gray-800 p-14">
        <h1 className="text-gray-100">Jon Jackson</h1>
        <p className="text-gray-100">Lowell, AR 72745</p>
        <p className="text-gray-100">479-601-3157</p>
        <p className="text-gray-100">jonjackson.webdesign@gmail.com</p>
        <a
          className="text-gray-100"
          href="www.linkedin.com/in/jonathanjackson25"
        >
          LinkedIn
        </a>
        <a className="text-gray-100" href="https://github.com/jonteal">
          Github
        </a>
        <a className="text-gray-100" href="https://jonjacksondev.netlify.app/">
          Portfolio
        </a>
        {/* SUMMARY */}
        <ul>
          <li className="text-gray-100">
            Experienced in software design responsive design, frontend
            engineering in large-scale applications that are used by millions of
            daily active users
          </li>
          <li className="text-gray-100">
            Over 1 year of professional software development experience
          </li>
          <li className="text-gray-100">
            6+ software projects. 3 projects live
          </li>
        </ul>
        {/* TECHNICAL SKILLS */}
        <h2 className="text-gray-100">Technical Skills</h2>
        <p className="text-gray-100">* limited experience</p>
        <div className="flex flex-row">
          <h3 className="text-gray-100">Languages</h3>
          <span className="text-gray-100">|</span>
          <p className="text-gray-100">
            Javascript, Typescript, HTML, CSS, SQL*, Python*
          </p>
        </div>
        <div className="flex flex-row">
          <h3 className="text-gray-100">Frameworks</h3>
          <span className="text-gray-100">|</span>
          <p className="text-gray-100">
            ReactJS, Wordpress, ExpressJS, NextJS, Bootstrap, Handlebars*
          </p>
        </div>
        <div className="flex flex-row">
          <h3 className="text-gray-100">Javascript</h3>
          <span className="text-gray-100">|</span>
          <p className="text-gray-100">
            Lodash, Webpack*, NPM, Axios, jQuery*, Sequelize, Prettier, ESLint,
            MomentJS
          </p>
        </div>
        <div className="flex flex-row">
          <h3 className="text-gray-100">CSS</h3>
          <span className="text-gray-100">|</span>
          <p className="text-gray-100">
            SASS, TailwindCSS, Material UI, Styled Components
          </p>
        </div>
        <div className="flex flex-row">
          <h3 className="text-gray-100">Request/Formats</h3>
          <span className="text-gray-100">|</span>
          <p className="text-gray-100">AJAX, JSON, REST, GraphQL</p>
        </div>
        <div className="flex flex-row">
          <h3 className="text-gray-100">Databases</h3>
          <span className="text-gray-100">|</span>
          <p className="text-gray-100">MySQL*, PostgreSQL*, MongoDB, Sqlite*</p>
        </div>
        <div className="flex flex-row">
          <h3 className="text-gray-100">Cloud Services</h3>
          <span className="text-gray-100">|</span>
          <p className="text-gray-100">AWS*, Google Cloud - Firebase*</p>
        </div>
        <div className="flex flex-row">
          <h3 className="text-gray-100">Platforms</h3>
          <span className="text-gray-100">|</span>
          <p className="text-gray-100">Web, Microsoft Office</p>
        </div>
        <div className="flex flex-row">
          <h3 className="text-gray-100">Dev Ops</h3>
          <span className="text-gray-100">|</span>
          <p className="text-gray-100">
            Docker* , BitBucket*, Github, CircleCI*
          </p>
        </div>
        <div className="flex flex-row">
          <h3 className="text-gray-100">Third Party Services</h3>
          <span className="text-gray-100">|</span>
          <p className="text-gray-100">Stripe*</p>
        </div>
        <div className="flex flex-row">
          <h3 className="text-gray-100">Other</h3>
          <span className="text-gray-100">|</span>
          <p className="text-gray-100">
            Figma*, Miro, NodeJS, Redux, Contentful (CMS), Micro-frontends*
          </p>
        </div>
        {/* RECENT PROJECTS */}
        <h2 className="text-gray-100">Recent Projects</h2>
        <div className="recent-project-container mb-5">
          <div className="flex flex-row">
            <h3 className="text-gray-100">Study Buddy</h3>
            <span className="text-gray-100">|</span>
            <p className="text-gray-100">Sole Project Developer</p>
            <p className="text-gray-100">October 2022 - Present</p>
          </div>
          <p className="text-gray-100">
            A MERN full stack application developed to provide a tool for
            studying for upcoming tests and exams.
          </p>
          <p className="text-gray-100">
            <span className="text-gray-100">Technologies:</span> MongoDB,
            ExpressJS, ReactJS, NodeJS
          </p>
          <p className="text-gray-100">Role: Architect, designer, developer</p>
          <a
            className="text-gray-100"
            href="https://github.com/jonteal/studybuddy"
          >
            Github
          </a>
        </div>
        <div className="recent-project-container mb-5">
          <div className="flex flex-row">
            <h3 className="text-gray-100">Crown Clothing</h3>
            <span className="text-gray-100">|</span>
            <p className="text-gray-100">Sole Project Developer</p>
            <p className="text-gray-100">September 2022</p>
          </div>
          <p className="text-gray-100">
            A simple E-Commerce frontend application with standard cart features
            and payment processing.
          </p>
          <p className="text-gray-100">
            <span className="text-gray-100">Technologies:</span> ReactJS, Redux,
            Redux-Saga, Firebase, SASS, Typescript, Styled Components, Stripe
          </p>
          <p className="text-gray-100">
            Developed during Udemy course covering the latest standards and
            practices in large-scale apps
          </p>
          <a
            className="text-gray-100"
            href="https://github.com/jonteal/capstone-e-commerce"
          >
            Github
          </a>
        </div>
        <div className="recent-project-container mb-5">
          <div className="flex flex-row">
            <h3 className="text-gray-100">Ozark AirBnb</h3>
            <span className="text-gray-100">|</span>
            <p className="text-gray-100">Sole Project Developer</p>
            <p className="text-gray-100">August 2022 - Present</p>
          </div>
          <p className="text-gray-100">
            A simple front end website for a small business within the Airbnb
            industry.
          </p>
          <p className="text-gray-100">
            <span className="text-gray-100">Technologies:</span> ReactJS
          </p>
          <p className="text-gray-100">
            Developed as a website for a company I am developing as a side
            business.
          </p>
          <a
            className="text-gray-100"
            href="https://github.com/jonteal/meshell-jackson-properties"
          >
            Github
          </a>
        </div>
        <h2>Experience</h2>
        <div className="flex flex-row">
          <h3 className="text-gray-100">CVS Health</h3>
          <span className="text-gray-100">|</span>
          <p className="text-gray-100">Digital Software Development Engineer</p>
        </div>
        <p className="text-gray-100">
          Frontend web developer for Aetna Health using React, Typescript,
          Contentful, Redux, Sagas, GraphQL, and AWS.
        </p>
        <ul>
          <li className="text-gray-100">
            Develop features used by millions of healthcare members every day
          </li>
          <li className="text-gray-100">
            Maintain and increase code unit testing coverage, regression and
            end-to-end UI testing via Playwright
          </li>
          <li className="text-gray-100">
            Integrate features with CMS-driven content with GraphQL for full
            multi-language translatability
          </li>
          <li className="text-gray-100">
            Demonstrate sprint progress and new feature development to team
            leadership and stakeholders
          </li>
          <li className="text-gray-100">
            Implement tooling and programmatic prevention of accessibility
            (a11y) defects
          </li>
          <li className="text-gray-100">
            Review and quality test all pull requests on my team prior to code
            merge
          </li>
        </ul>
        <h2 className="text-gray-100">Education</h2>
        <div className="education-item mb-5">
          <div className="flex flex-row">
            <h3 className="text-gray-100">2U / edX</h3>
            <span className="text-gray-100">|</span>
            <p className="text-gray-100">
              University of Denver (DU), Denver, CO
            </p>
            <p className="text-gray-100">Aug 2021 - Feb 2022</p>
          </div>
          <p className="text-gray-100">
            Full Stack Web Development Certificate
          </p>
        </div>
        <div className="education-item mb-5">
          <div className="flex flex-row">
            <h3 className="text-gray-100">2U / edX</h3>
            <span className="text-gray-100">|</span>
            <p className="text-gray-100">
              University of Arkansas, Fayetteville, AR
            </p>
            <p className="text-gray-100">2015 - 2019</p>
          </div>
          <p className="text-gray-100">Bachelor of Science, Marketing</p>
        </div>
        <h2 className="text-gray-100">Personal</h2>
        <div className="flex flex-row">
          <h3 className="text-gray-100">Interests</h3>
          <span className="text-gray-100">|</span>
          <p className="text-gray-100">
            Spending time with family, avid reader, technology, writing music,
            running, rock climbing
          </p>
        </div>
        <div className="flex flex-row">
          <h3 className="text-gray-100">Goals</h3>
          <span className="text-gray-100">|</span>
          <p className="text-gray-100">
            Start a tech company, climb a 14,000 foot mountain, read a book a
            week, always be improving
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
