import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HighLights from "./components/HighLights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <HighLights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default App;
