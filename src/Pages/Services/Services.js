import React, { useContext, useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";

import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import TabTitle from "../../Utility/General";

import ServiceCard from "../Shared/ServiceCard/ServiceCard";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";

const Services = () => {
  const { loading, setLoading } = useContext(AuthContext);

  const [services, setServices] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch("https://my-life-guide-server.vercel.app/servicesall")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  TabTitle("Services");
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader active inline="centered" />
      </div>
    );
  }

  return (
    <div>
      <TittleHeader title={"All Services"}></TittleHeader>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 justify-items-center container mx-auto my-24">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
