import React from "react";
import Announcement from "../components/Announcement/Announcement";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";

const Home = () => {
  return (
    <div className="home">
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;