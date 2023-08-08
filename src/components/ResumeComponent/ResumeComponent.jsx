import { FaExternalLinkAlt } from "react-icons/fa";

const ResumeComponent = () => {
  return (
    <div className="resume-body-container border w-screen rounded-xl flex flex-col items-center bg-gray-800 pt-7">
      <h1 className="text-gray-100 text-4xl font-bold mb-3">Jon Jackson</h1>

      <div className="personal-info-container mb-3">
        <p className="text-gray-100">Lowell, AR 72745</p>
        <span className="text-gray-100 ml-4 mr-4 vertical-bar">|</span>

        <p className="text-gray-100">479-601-3157</p>
        <span className="text-gray-100 ml-4 mr-4 vertical-bar">|</span>

        <p className="text-gray-100">jonjackson.webdesign@gmail.com</p>
      </div>

      <div className="flex flex-row mb-5">
        <a
          className="text-gray-100"
          href="www.linkedin.com/in/jonathanjackson25"
        >
          LinkedIn
        </a>
        <span className="text-gray-100 ml-4 mr-4">|</span>
        <a className="text-gray-100" href="https://github.com/jonteal">
          Github
        </a>
        <span className="text-gray-100 ml-4 mr-4">|</span>

        <a className="text-gray-100" href="https://jonjacksondev.netlify.app/">
          Portfolio
        </a>
      </div>

      <div className="brand-statement-section mb-3">
        <p className="text-gray-100">
          I am deeply passionate about bringing my willingness and ability to
          solve problems to an agile team working towards a common goal of
          bringing the maximum value to the customer in the most efficient
          manner possible. Before entering the world of tech, I worked in a
          fast-paced sales and marketing environment which I believe gave me an
          ability to see product development with a business-growth perspective
          and the ability to relate to customers. Additionally, I am an
          extremely active listener with experience in leadership, creativity,
          problem solving, and building projects from ideation to execution.
        </p>
      </div>
      {/* SUMMARY */}
      <div className="summary-section mb-3">
        <h2 className="text-gray-100 text-2xl font-bold">Summary</h2>
        <ul className="list-disc text-gray-100">
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
      </div>
      {/* TECHNICAL SKILLS */}
      <div className="mb-3 technical-skills-section">
        <div className="resume-header">
          <h2 className="text-gray-100 text-2xl font-bold mr-3">
            Technical Skills
          </h2>
          <p className="text-gray-100">* limited experience</p>
        </div>
        <div className="skill-item">
          <h3 className="text-gray-100 mr-3 font-bold">Languages</h3>
          <span className="text-gray-100 vertical-bar">|</span>
          <p className="text-gray-100 skill-desc">
            Javascript, Typescript, HTML, CSS, SQL*, Python*
          </p>
        </div>
        <div className="skill-item">
          <h3 className="text-gray-100 mr-3 font-bold">Frameworks</h3>
          <span className="text-gray-100 vertical-bar">|</span>
          <p className="text-gray-100 skill-desc">
            ReactJS, Wordpress, ExpressJS, NextJS, Bootstrap, Handlebars*
          </p>
        </div>
        <div className="skill-item">
          <h3 className="text-gray-100 mr-3 font-bold">Javascript</h3>
          <span className="text-gray-100 vertical-bar">|</span>
          <p className="text-gray-100 skill-desc">
            Lodash, Webpack*, NPM, Axios, jQuery*, Sequelize, Prettier, ESLint,
            MomentJS
          </p>
        </div>
        <div className="skill-item">
          <h3 className="text-gray-100 mr-3 font-bold">CSS</h3>
          <span className="text-gray-100 vertical-bar">|</span>
          <p className="text-gray-100 skill-desc">
            SASS, TailwindCSS, Material UI, Styled Components
          </p>
        </div>
        <div className="skill-item">
          <h3 className="text-gray-100 mr-3 font-bold">Request/Formats</h3>
          <span className="text-gray-100 vertical-bar">|</span>
          <p className="text-gray-100 skill-desc">AJAX, JSON, REST, GraphQL</p>
        </div>
        <div className="skill-item">
          <h3 className="text-gray-100 mr-3 font-bold">Databases</h3>
          <span className="text-gray-100 vertical-bar">|</span>
          <p className="text-gray-100 skill-desc">
            MySQL*, PostgreSQL*, MongoDB, Sqlite*
          </p>
        </div>
        <div className="skill-item">
          <h3 className="text-gray-100 mr-3 font-bold">Cloud Services</h3>
          <span className="text-gray-100 vertical-bar">|</span>
          <p className="text-gray-100 skill-desc">
            AWS*, Google Cloud - Firebase*
          </p>
        </div>
        <div className="skill-item">
          <h3 className="text-gray-100 mr-3 font-bold">Platforms</h3>
          <span className="text-gray-100 vertical-bar">|</span>
          <p className="text-gray-100 skill-desc">Web, Microsoft Office</p>
        </div>
        <div className="skill-item">
          <h3 className="text-gray-100 mr-3 font-bold">Dev Ops</h3>
          <span className="text-gray-100 vertical-bar">|</span>
          <p className="text-gray-100 skill-desc">
            Docker* , BitBucket*, Github, CircleCI*
          </p>
        </div>
        <div className="skill-item">
          <h3 className="text-gray-100 mr-3 font-bold">Third Party Services</h3>
          <span className="text-gray-100 vertical-bar">|</span>
          <p className="text-gray-100 skill-desc">Stripe*</p>
        </div>
        <div className="skill-item">
          <h3 className="text-gray-100 mr-3 font-bold">Other</h3>
          <span className="text-gray-100 vertical-bar">|</span>
          <p className="text-gray-100 skill-desc">
            Figma*, Miro, NodeJS, Redux, Contentful (CMS), Micro-frontends*
          </p>
        </div>
      </div>
      {/* RECENT PROJECTS */}
      <div className="recent-projects-section mb-3">
        <h2 className="text-gray-100 text-2xl font-bold">Recent Projects</h2>
        <div className="recent-project-container mb-5">
          <div className="project-title-container">
            <div className="flex flex-row">
              <h3 className="text-gray-100 mr-3 font-bold">Study Buddy</h3>
              <span className="text-gray-100">|</span>
              <p className="text-gray-100 ml-3">Sole Project Developer</p>
            </div>
            <p className="text-gray-100">October 2022 - Present</p>
          </div>
          <p className="text-gray-100 italic">
            A MERN full stack application developed to provide a tool for
            studying for upcoming tests and exams.
          </p>
          <p className="text-gray-100">
            <span className="text-gray-100">Technologies:</span> MongoDB,
            ExpressJS, ReactJS, NodeJS
          </p>
          <p className="text-gray-100">Role: Architect, designer, developer</p>
          <a
            className="text-gray-100 mr-3 flex flex-row items-center"
            href="https://github.com/jonteal/studybuddy"
          >
            <span className="mr-3">Github</span>
            <FaExternalLinkAlt className="text-gray-100" />
          </a>
        </div>
        <div className="recent-project-container mb-5">
          <div className="project-title-container">
            <div className="flex flex-row">
              <h3 className="text-gray-100 mr-3 font-bold">Crown Clothing</h3>
              <span className="text-gray-100">|</span>
              <p className="text-gray-100 ml-3">Sole Project Developer</p>
            </div>
            <p className="text-gray-100">September 2022</p>
          </div>
          <p className="text-gray-100 italic">
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
            className="text-gray-100 mr-3 flex flex-row items-center"
            href="https://github.com/jonteal/capstone-e-commerce"
          >
            <span className="mr-3">Github</span>
            <FaExternalLinkAlt className="text-gray-100" />
          </a>
        </div>
        <div className="recent-project-container mb-5">
          <div className="project-title-container">
            <div className="flex flex-row">
              <h3 className="text-gray-100 mr-3 font-bold">Ozark AirBnb</h3>
              <span className="text-gray-100">|</span>
              <p className="text-gray-100 ml-3">Sole Project Developer</p>
            </div>
            <p className="text-gray-100">August 2022 - Present</p>
          </div>
          <p className="text-gray-100 italic">
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
            className="text-gray-100 mr-3 flex flex-row items-center"
            href="https://github.com/jonteal/ozark-airbnb"
          >
            <span className="mr-3">Github</span>
            <FaExternalLinkAlt className="text-gray-100" />
          </a>
        </div>
      </div>
      {/* EXPERIENCE SECTION */}
      <div className="experience-section mb-3">
        <h2 className="text-gray-100 text-2xl font-bold">Experience</h2>
        <div className="experience-item">
          <h3 className="text-gray-100 font-bold mr-3">CVS Health</h3>
          <span className="text-gray-100 vertical-bar">|</span>
          <p className="text-gray-100 experience-title">
            Digital Software Development Engineer
          </p>
        </div>
        <p className="text-gray-100 italic mb-2">
          Frontend web developer for Aetna Health using React, Typescript,
          Contentful, Redux, Sagas, GraphQL, and AWS.
        </p>
        <ul className="list-disc">
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
        <div className="experience-item mt-5">
          <h3 className="text-gray-100 font-bold mr-3">2U / edX</h3>
          <span className="text-gray-100 vertical-bar">|</span>
          <p className="text-gray-100 experience-title">Tutor & Grader</p>
        </div>
        <p className="text-gray-100 italic mb-2">
          Tutor and grader supporting students going through a 6-month full
          stack engineering program.
        </p>
        <ul className="list-disc">
          <li className="text-gray-100">
            Tutoring 8 students for 1 hour per week each to support their
            learning and comprehension of concepts ranging from basic HTML, CSS,
            Javascript, developing and consuming APIs, SQL and NoSQL database
            creation and management, React, Git/Github, and more.
          </li>
          <li className="text-gray-100">
            Grading the weekly assignments of students and offering written
            feedback, guidance, and support.
          </li>
        </ul>
      </div>

      <div className="education-section">
        <h2 className="text-gray-100 text-2xl font-bold">Education</h2>
        <div className="education-item mb-5">
          <div className="education-item-container">
            <p className="text-gray-100 font-bold">
              University of Denver, Denver, CO
            </p>
            <p className="text-gray-100">2021 - 2022</p>
          </div>
          <p className="text-gray-100">
            Full Stack Web Development Certificate
          </p>
        </div>
        <div className="education-item mb-5">
          <div className="education-item-container">
            <p className="text-gray-100 font-bold mr-3">
              University of Arkansas, Fayetteville, AR
            </p>
            <p className="text-gray-100">2015 - 2019</p>
          </div>
          <p className="text-gray-100">Bachelor of Science, Marketing</p>
        </div>
      </div>

      <div className="personal-section">
        <h2 className="text-gray-100 text-2xl font-bold">Personal</h2>
        <div className="personal-item-container">
          <h3 className="text-gray-100 font-bold mr-3">Interests</h3>
          <span className="text-gray-100 vertical-bar">|</span>
          <p className="text-gray-100 personal-item-desc">
            Spending time with family, avid reader, technology, writing music,
            running, rock climbing
          </p>
        </div>
        <div className="personal-item-container mb-20">
          <h3 className="text-gray-100 font-bold mr-3">Goals</h3>
          <span className="text-gray-100 vertical-bar">|</span>
          <p className="text-gray-100 personal-item-desc">
            Start a tech company, climb a 14,000 foot mountain, read a book a
            week, always be improving
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;
