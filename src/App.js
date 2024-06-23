import "./App.css";
import { Routes, Route } from "react-router-dom"; //Routes kapsayıcı , içinde route ile yönlendirme yapacağız
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* home elementine local host 3000 de ulaştık */}
        <Route path="/AboutUs" element={<AboutUs />} />
        {/* AboutUs elementine local host 3000/AboutUs ta ulaştık */}
      </Routes>
    </div>
  );
}

export default App;
