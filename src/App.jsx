import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Language from "./components/Language";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="  ">
      <Header />
      <Contact />
      <div className="grid grid-cols-2 gap-8">
        <div>
        <Experience />
        <Projects />
        </div>
        <div>
        <Education />
        <Skills />
        <Language />
        </div>
      </div>
    </div>
  );
}

export default App;
