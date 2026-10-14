import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Counter from "./components/Counter";


const App = () => {
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/Usestate" element={<Counter/>} />
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
