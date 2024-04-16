import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { IoMdPhonePortrait } from "react-icons/io";

const Contact = () => {
  return (
    <div className=" px-12 flex items-center justify-evenly mt-6 bg-slate-200">
      <div className="flex flex-col">
        <span className="my-1 p-1">
          <MdEmail className="inline" />{" "}
          <a href="azadh4110@gmail.com">: azadh4110@gmail.com</a>
        </span>
        <span className="my-1 p-1">
          <FaLocationDot className="inline" /> <span>: Dortmund, Germany</span>
        </span>
        <span className="my-1 p-1">
          <FaLinkedin className="inline" />{" "}
          <a href="https://www.linkedin.com/in/md-azad-hossain1">: linkedin </a>
        </span>
      </div>
      <div className="flex flex-col">
        <span className="my-1 p-1">
          <IoMdPhonePortrait className="inline" />
          <a href="azadh4110@gmail.com">: +491774044617</a>
        </span>
        <span className="my-1 p-1">
          <FaGithub className="inline" />
          <a href="https://www.github/md-azad">: GitHub</a>
        </span>
        <span className="my-1 p-1">
          <CiGlobe className="inline" />
          <a href="https://www.portfolio-pi-eight-32.vercel.app">: Portfolio</a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
