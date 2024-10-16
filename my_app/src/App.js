import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner";

function App() {
  return (
    <>
      <BrowserRouter>
      <Banner />
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="Blogs" element={<Blogs />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Services" element={<Services />} />
            <Route path="About" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
