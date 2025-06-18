import Navbar from "./Components/Navbar";
import "./App.css";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#F9F4EB]">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
