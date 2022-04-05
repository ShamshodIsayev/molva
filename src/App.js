import "./App.css";
import Catalog from "./components/Catalog";
import Certificate from "./components/Certificate";
import Equipment from "./components/Equipment";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomeSlider from "./components/HomeSlider/HomeSlider";
import OurMission from "./components/OurMission";
import Planner from "./components/Planner/Planner";
import Results from "./components/results/Results";
import Service from "./components/service/Service";
import Solution from "./components/Solution";
import Team from "./components/Team";
import WorkReport from "./components/WorkReport";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSlider />
      <WorkReport />
      <OurMission />
      <Team />
      <Planner />
      <Equipment />
      <Service />
      <Solution />
      <Results />
      <Certificate />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
