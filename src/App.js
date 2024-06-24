import "./App.css";
import { Routes, Route } from "react-router-dom"; //Routes kapsayıcı , içinde route ile yönlendirme yapacağız
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import WrongPath from "./components/WrongPath";
import History from "./components/History";
import Company from "./components/Company";
import Team from "./components/Team";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/history" element={<History />}>
          <Route path="company" element={<Company />} />
          {/* routeun içine route yazınca path başına slash(/) koymuyoruz */}
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="*" element={<WrongPath />} />
        {/* yıldız işareti olmayan yol u temsil eder */}
      </Routes>
    </div>
  );
}

export default App;
