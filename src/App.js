import "./App.css";
import NavBar from "./Components/NavBar";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Companies from "./Components/Companies";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="">
        {/* NavBar */}
        <NavBar />
        {/* Intro */}
        <Intro />
      </div>

      {/* About Me */}
      <AboutMe />

      {/* Skills */}
      <Skills />

      {/* Services */}

      {/* Portfolio */}
      <Portfolio />

      {/* Companies */}
      <Companies />

      {/* Contact Us */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
