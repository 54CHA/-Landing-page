import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react"; 
import Navbar from "./components/Navbar";
import FrontPage from "./components/FrontPage";
import RegWindow from "./components/RegWindow";
import AboutUs from "./components/AboutUs";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";
import WhyUs from "./components/WhyUs";
import Questions from "./components/Questions";
import Services from "./components/Services";
import Tech from "./components/Tech";
import Documents from "./components/Documents";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  const [selectedCity, setSelectedCity] = useState("Москва"); 

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/services"
          element={
            <>
              <Navbar selectedCity={selectedCity} setSelectedCity={setSelectedCity} /> 
              <Tech />
              <Questions />
              <Footer selectedCity={selectedCity} /> 
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Navbar selectedCity={selectedCity} setSelectedCity={setSelectedCity} /> 
              <RegWindow />
              <FrontPage />
              <AboutUs />
            
              <WhyUs />
              <Documents />
              <Jobs />
              <Services />
              <Questions />
              <Footer selectedCity={selectedCity} /> 
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
