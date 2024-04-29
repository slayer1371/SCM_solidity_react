import React, { useState, useEffect } from "react";
import Navigationn from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./Layout.css";


export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });


const Layout = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
  
    return (
      <div>
        <Navigationn />
        <Header data={landingPageData.Header} />
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Team data={landingPageData.Team} />
        <Contact data={landingPageData.Contact} />
      </div>
    );
  };
  
export default Layout;