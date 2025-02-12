import React from "react";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Services from "./Pages/Services";
import NotFound from "./Pages/NotFound";
import Ecommerce from "./Pages/Ecommerce";
import AgentSingle from "./Pages/AgentSingle";
import Blog from "./Pages/Blog";
import BlogSingle from "./Pages/BlogSingle";
import TimeLine from "./Pages/TimeLine";
import ComingSoon from "./Pages/ComingSoon";
import EcommerceSingle from "./Pages/EcommerceSingle";
import Faq from "./Pages/Faq";
import FindProperty from "./Pages/FindProperty";
import Login from "./Pages/Login";
import SignUP from "./Pages/SignUP";
import Properties from "./Pages/Properties";
import PropertiesSingle from "./Pages/PropertiesSingle";
import SearchResults from "./Pages/SearchResults";
import { BrowserRouter, Route, Routes } from "react-router-dom";





const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singup" element={<SignUP />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ecommerce" element={<Ecommerce />} />

          
          <Route path="/ecommerce-single" element={<EcommerceSingle />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties-single" element={<PropertiesSingle />} />
          <Route path="/find-property" element={<FindProperty />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/agent-single" element={<AgentSingle />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
