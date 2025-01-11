import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import TaskBoard from "./components/Task/TaskBoard";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <TaskBoard></TaskBoard>
    </div>
  );
};

export default App;
