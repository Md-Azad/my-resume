const Experience = () => {
  return (
    <div className="ml-12">
      <h1 className="text-xl">Experience</h1>
      <a href="https://agency.playwithppc.com/">
        <span className="text-md text-blue-400">Playwithppc</span>
      </a>
      <div className="text-sm flex justify-between mr-36">
        <p>01/2022-12/2022</p>
        <p>Dhaka,Bangladesh</p>
      </div>
      <p className="italic text-sm">Responsibilities:</p>

      <div className="text-sm flex leading-relaxed">
      <ul className="list-disc ml-6">
        <li>
          Developed front-end websites according to stockholders&apos;
          requirements.
        </li>
        <li>
          Following an agile environment with daily stand- ups and biweekly
          sprints.
        </li>
        </ul>
        <ul className="list-disc ml-6">
        <li>
          Worked on optimizing website&apos;s performance and page speed by 23%.
        </li>
        <li>Technologies: JavaScript, React.js, TypeScript, HTML, CSS</li>
      </ul>
      </div>
    </div>
  );
};

export default Experience;
