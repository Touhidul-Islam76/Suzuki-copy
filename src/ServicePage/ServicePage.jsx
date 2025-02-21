import React from "react";

const services = [
  {
    title: "Bike Repair",
    description: "Professional bike repair services to keep your ride smooth and safe.",
    icon: "🔧",
  },
  {
    title: "Custom Modifications",
    description: "Enhance your bike with custom modifications and upgrades.",
    icon: "⚙️",
  },
  {
    title: "Bike Rental",
    description: "Affordable and high-quality bike rental services for all riders.",
    icon: "🚴",
  },
];

const ServicePage = () => {
  return (
    <div className="service_page min-h-screen bg-transparent flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Our Bike Services</h1>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white bg-opacity-40 p-6 rounded-2xl shadow-md text-center">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-white">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
