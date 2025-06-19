import Navbar from "./Components/Navbar";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Dot from "./Components/Dot/Dot";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#F9F4EB]">
        <Navbar />
        <Hero />
        <Dot />
      </div>
    </>
  );
}

export default App;
