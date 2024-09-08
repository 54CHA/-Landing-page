import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tech" element={
          <>
          <Navbar />
          <Tech />
          <Footer />
          </>} />
        <Route path="/" element={
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
        } />
      </Routes>
    </Router>
  );
}

export default App;
