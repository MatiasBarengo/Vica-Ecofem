import { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/shared/NavBar";
import Products from "./pages/Products";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./pages/About";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </>
  );
}

export default App;
