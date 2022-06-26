import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Organogram from "./pages/Organogram/Organogram";
import Programs from "./pages/Programs/Programs";
import Gallery from "./components/Gallery/Gallery";
import AboutMain from "./pages/About/AboutMain";
import ScrollToTop from "./ScrollToTop";
import TeamMain from "./components/Team/TeamMain";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutMain />} />
          <Route exact path="/organogram" element={<Organogram />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/team" element={<TeamMain />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/programs" element={<Programs />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
