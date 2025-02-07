import React from "react";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import About from "./Pages/About";




const App = () => {
  return (
    <>
      <Header />
      {/* <Home/> */}
      <About/>
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default App;
