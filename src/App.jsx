import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Counter from "./components/Counter";
import BackToTop from "./components/common/BackToTop";


const App = () => {
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/Usestate" element={<Counter/>} />
        <Route path="/BackToTop" element={<BackToTop/>} />
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
