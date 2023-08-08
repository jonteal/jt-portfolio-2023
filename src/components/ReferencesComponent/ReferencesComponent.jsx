const ReferencesComponent = () => {
  return (
    <div className="resume-body-container border w-screen rounded-xl flex flex-col items-center bg-gray-800 pt-7">
      <h1 className="text-gray-100 text-4xl font-bold mb-3">Jon Jackson</h1>
      <h2 className="text-gray-100 text-3xl font-bold mb-3">References</h2>

      {/* REFERENCES */}
      {/* <div className="summary-section mb-3 mt-5 flex items-center">
        <h3 className="text-gray-100 text-2xl font-bold">Heather Newton</h3>
        <p className="text-gray-100 text-1xl">
          Senior Manager of Digital Engineering
        </p>
        <p className="text-gray-100 text-1xl">CVS Health / Aetna</p>
        <a href="mailto: newtonh1@aetna.com" className="text-gray-100 text-1xl">
          newtonh1@aetna.com
        </a>
        <a href="tel:5752025485" className="text-gray-100 text-1xl">
          575-202-5485
        </a>
        <p className="text-gray-100 text-1xl">Relationship: Manager</p>
      </div> */}
      <div className="summary-section mb-3 mt-5 flex items-center">
        <h3 className="text-gray-100 text-2xl font-bold">
          Francis Vithayathil
        </h3>
        <p className="text-gray-100 text-1xl">
          Digital Senior Development Engineer I
        </p>
        <p className="text-gray-100 text-1xl">CVS Health / Aetna</p>
        <a
          href="mailto: vithayathilf@aetna.com"
          className="text-gray-100 text-1xl"
        >
          vithayathilf@aetna.com
        </a>
        <a href="tel:8635134134" className="text-gray-100 text-1xl">
          863-513-4134
        </a>
        <p className="text-gray-100 text-1xl">Relationship: Team Member</p>
      </div>
      <div className="summary-section mb-3 mt-5 flex items-center">
        <h3 className="text-gray-100 text-2xl font-bold">Mason Holland</h3>
        <p className="text-gray-100 text-1xl">
          Digital Development Engineer III
        </p>
        <p className="text-gray-100 text-1xl">CVS Health / Aetna</p>
        <a
          href="mailto: hollandm2@aetna.com"
          className="text-gray-100 text-1xl"
        >
          hollandm2@aetna.com
        </a>
        <a href="tel:3104158457" className="text-gray-100 text-1xl">
          310-415-8457
        </a>
        <p className="text-gray-100 text-1xl">Relationship: Team Member</p>
      </div>
      <div className="summary-section mb-3 mt-5 flex items-center">
        <h3 className="text-gray-100 text-2xl font-bold">Ivan Ontiveros</h3>
        <p className="text-gray-100 text-1xl">Digital Development Engineer I</p>
        <p className="text-gray-100 text-1xl">CVS Health / Aetna</p>
        <a
          href="mailto: ontiverosi@aetna.com"
          className="text-gray-100 text-1xl"
        >
          ontiverosi@aetna.com
        </a>
        <a href="tel:6025763985" className="text-gray-100 text-1xl">
          602-576-3985
        </a>
        <p className="text-gray-100 text-1xl">Relationship: Team Member</p>
      </div>
      <div className="summary-section mb-3 mt-5 flex items-center">
        <h3 className="text-gray-100 text-2xl font-bold">Laurel Thorburn</h3>
        <p className="text-gray-100 text-1xl">Software Developer</p>
        <p className="text-gray-100 text-1xl">Shopify</p>
        <a
          href="mailto: laurelthorburn@gmail.com"
          className="text-gray-100 text-1xl"
        >
          laurelthorburn@gmail.com
        </a>
        <a href="tel:4082505504" className="text-gray-100 text-1xl">
          408-250-5504
        </a>
        <p className="text-gray-100 text-1xl">Relationship:</p>
        <p className="text-gray-100 text-1xl">Shared project contributor</p>
      </div>
      <div className="summary-section mb-3 mt-5 flex items-center">
        <h3 className="text-gray-100 text-2xl font-bold">Robert Parsons</h3>
        <p className="text-gray-100 text-1xl">Position Title, Company Name</p>
        <a
          href="mailto: rmpcoding@gmail.com"
          className="text-gray-100 text-1xl"
        >
          rmpcoding@gmail.com
        </a>
        <a href="tel:6267031909" className="text-gray-100 text-1xl">
          626-703-1909
        </a>
        <p className="text-gray-100 text-1xl">Relationship: Fellow tutor</p>
      </div>
    </div>
  );
};

export default ReferencesComponent;
