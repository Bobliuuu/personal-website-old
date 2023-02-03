import Navbar from "../components/navbar";
import Intro from "./intro";
import Skills from "./skills";
import Experience from "./experience";
import Projects from "./projects";
import About from './about';
import Contact from "./contact";
import Awards from "./awards";
import Footer from "../components/footer";

export default function App() {
    return (
        <>
            <div className="min-h-screen bg-intro bg-cover bg-no-repeat bg-center">
                <Navbar /> 
                <Intro />
            </div>
            <Skills />
            <Experience />
            <About />
            <Projects />
            <Awards />
            <Contact />
            <Footer />
        </>
    );
}