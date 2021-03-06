import "./App.css";
import Carousel from "./Components/Carousel/Carousel";
// import Faq from "./Components/Faq/Faq";
import Navbar from "./Components/Navbar/Navbar";
import Team from "./OurTeam/Team";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <h1>CSS AMU Website Frontend</h1> */}
      <Carousel />
      <Team />
      {/* <Faq/> */}
    </div>
  );
}

export default App;
