import Img from "../assets/Aza.png";

const Header = () => {
  return (
    <div className="flex gap-8 pt-2">
      <img className="w-36 h-36 rounded-full mx-12" src={Img} alt="" />
      <div className="mt-4">
        <h1 className="font-bold text-xl">Md Azad Hossain</h1>
        <h3 className="text-md font-semibold">Full-Stack Developer</h3>
        <p className="text-balance text-xs">
          I love to design and develop websites with react library and next.js
          framework. I am proficient in JavaScript, React, Next.js, MongoDB, and
          Node.js. Passionate about creating exceptional user experiences and
          building robust web applications. Skilled in turning creative frontend
          ideas into pixel- perfect designs. Collaborative team player with a
          track record of delivering high-impact projects. Eager to tackle new
          challenges and stay updated with the latest Front-End trend.
        </p>
      </div>
    </div>
  );
};

export default Header;
