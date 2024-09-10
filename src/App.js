import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
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
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Tech />
              <Questions />
              <Footer />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <RegWindow />
              <FrontPage />
              <AboutUs />
              <Jobs />
              <WhyUs />
              <Documents />
              <Services />
              <Questions />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
