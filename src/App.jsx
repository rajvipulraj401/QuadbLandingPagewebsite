import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Hirings from "./pages/Hirings/Hirings";
import Footer from "./components/Footer/Footer";
import Blogs from "./pages/Blogs/Blogs";
import ContactUs from "./components/ContactUs/ContactUs";
import NewBlogs from "./pages/Blogs/NewBlogs";

function App() {
  const gradientStyle = {
    background:
      "linear-gradient(to right, #3a3a3a 0%, #252525 50%, #060606 100%)",
    // height:"100%"
  };

  useEffect(() => {
    const trailer = document.getElementById("trailer");

    const handleMouseMove = (e) => {
      // every event passes the object it has which has what the event occured

      trailer.style.opacity = 1;
      const x = e.clientX - trailer.offsetWidth / 2;
      const y = e.clientY - trailer.offsetHeight / 2;

      trailer.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseLeave = () => {
      trailer.style.opacity = 0;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="overflow-x-hidden" style={gradientStyle}>
      <div className="">
        <div
          // className=" w-[40px] h-[40px] sm:w-[0px] sm:h-[0px]"
          className=" w-[0px] h-[0px]"
          // we will keep width and height 0 and just create the light pointer with box shadow
          id="trailer"
        ></div>

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/hiring" element={<Hirings />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/blogs" element={<NewBlogs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
