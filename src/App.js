import "./App.css";
import Navbar from "./components/Navbar";
import FrontPage from "./components/FrontPage";
import RegWindow from "./components/RegWindow";
import AboutUs from "./components/AboutUs";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";
import WhyUs from "./components/WhyUs";
import Questions from "./components/Questions";

function App() {
  return (
    <>
      <RegWindow />
      <Navbar />
      <FrontPage />
      <AboutUs />
      <Jobs />
      <WhyUs />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
