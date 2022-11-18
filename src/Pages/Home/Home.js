import React from "react";
import { useLoaderData } from "react-router-dom";
import Feature from "./Feature/Feature";
import Hero from "./Hero/Hero";
import News from "./News/News";
import Reason from "./Reason/Reason";
import Service from "./Service/Service";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Service services={services}></Service>
      <Feature></Feature>
      <Reason></Reason>
      <News></News>
    </div>
  );
};

export default Home;
