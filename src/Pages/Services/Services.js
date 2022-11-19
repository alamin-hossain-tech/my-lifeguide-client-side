import React from "react";
import { useLoaderData } from "react-router-dom";
import TabTitle from "../../Utility/General";

import ServiceCard from "../Shared/ServiceCard/ServiceCard";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";

const Services = () => {
  const services = useLoaderData();
  TabTitle("Services");
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
