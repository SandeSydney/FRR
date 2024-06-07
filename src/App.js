import "./App.css";
import About from "./components/about";
import MainCarousel from "./components/carousel";
import Features from "./components/features";
import Navbar_Main from "./components/navbar";
import Numbers from "./components/numbers";
import Team from "./components/team";

function App() {
  return (
    <div className="flex flex-col gap-5">
      <div className="home">
        <div>
          
        </div>
      </div>
      <Navbar_Main />
      <About />
    </div>
  );
}

export default App;
