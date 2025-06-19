import Navbar from "./Components/Navbar";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Dot from "./Components/Dot/Dot";
import Service from "./Components/Service/Service";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#F9F4EB]">
        <Navbar />
        <Hero />
        <Dot />
        <Service/>
        <Footer />
      </div>
    </>
  );
}

export default App;
