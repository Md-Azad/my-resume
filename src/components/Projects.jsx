const Projects = () => {
  return (
    <>
      <div className="ml-12">
        <p className="text-xl">Projects</p>
        <h1>
          <a
            className="text-blue-400"
            href="http://e-restaurant-frontend.vercel.app"
          >
            E-Restaurant
          </a>
            <span><a href="https://github.com/Md-Azad/e-restaurant-frontend">--(Github-Repository)</a></span>
        </h1>
        
        <ul className="list-disc ml-6">
          <li>
            Full-Stack e-commerce Website with distinguished dashboard for user
            and admin.{" "}
          </li>
          <li>Add to cart system and payment system using Stripe.</li>
          <li>
            Technologies: JavaScript, React.js, Node.js, Express.js,
            <br /> MongoDB, Context Api, Firebase, Rest api.
          </li>
        </ul>
      </div>
      <div className="ml-12">
        <h1>
          <a
            className="text-blue-400"
            href="http://car-service-liard.vercel.app"
          >
            CarService
          </a>
          <span><a href="http://github.com/Md-Azad/car-service">-- (GitHub-Repository)</a></span>
        </h1>
        
        <ul className="list-disc ml-6">
          <li>
            Full-Stack car service management system with Authentication with
            jwt
          </li>
          <li>Booking services and add to cart system.</li>
    
          <li>
            Technologies: JavaScript, React.js, Node.js, Express.js, MongoDB,
            Auth0, Context API, Firebase, Rest API.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Projects;
