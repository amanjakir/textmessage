import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import AllMovies from "./Components/Pages/Allmovies/AllMovies"; 
import"./Components/style.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/AllMovies" element={<AllMovies/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
     </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
