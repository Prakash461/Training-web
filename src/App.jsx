import React from "react";
import Hero from "./components/Hero";
import { UpdateFollower } from "react-mouse-follower";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import BannerText from "./components/Banner/BannerText";
import Blogs from "./components/Blogs/Blogs";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import AnimatedContactForm from "./components/ContactForm/ContactForm";
import AboutUs from "./components/AboutUs/AboutUs";


const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 10,
          followSpeed: 1.5,
        }}
      >
        <Hero />
        <AboutUs />
        <Services />
        <Banner />
        <BannerText />
        <Blogs />
        <FAQ />
        <AnimatedContactForm />
        <Footer />
      </UpdateFollower>
    </main>
  );
};

export default App;
