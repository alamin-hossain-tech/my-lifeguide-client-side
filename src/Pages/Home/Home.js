import React, { useContext, useEffect, useState } from "react";

import { Loader } from "semantic-ui-react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import TabTitle from "../../Utility/General";
import Feature from "./Feature/Feature";
import Hero from "./Hero/Hero";
import News from "./News/News";
import Reason from "./Reason/Reason";
import Service from "./Service/Service";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  TabTitle("Home");
  AOS.init();
  const { loading, setLoading } = useContext(AuthContext);
  const [services, setServices] = useState([]);

  // const services = [];

  useEffect(() => {
    setLoading(true);

    fetch("https://my-life-guide-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader active inline="centered" />
      </div>
    );
  }
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
