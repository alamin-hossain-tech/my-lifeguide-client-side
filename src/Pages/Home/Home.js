import React from "react";
import Feature from "./Feature/Feature";
import Hero from "./Hero/Hero";
import News from "./News/News";
import Reason from "./Reason/Reason";
import Service from "./Service/Service";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Service></Service>
      <Feature></Feature>
      <Reason></Reason>
      <News></News>
    </div>
  );
};

export default Home;
