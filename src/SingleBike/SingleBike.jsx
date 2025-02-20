import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import All_Data_Context from "../All_Data/All_Data_Context"; // Import context
import { Collapse, Divider } from 'antd';


const SingleBike = () => {
  const { id } = useParams(); // Get bike ID from URL
  const { bike_info } = useContext(All_Data_Context); // Get bike_info from context

  if (!bike_info) {
    return <h1>Loading...</h1>; // If data is not available yet
  }

  // Find the specific bike by ID
  const bike = bike_info.find((b) => b.id === parseInt(id));

  if (!bike) {
    return <h1>Bike Not Found</h1>;
  }

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      <img src={bike.img} alt="" />
      <h1 className="font-extrabold text-3xl md:text-6xl text-center mb-6">{bike.name}</h1>
      <h1 className="font-semibold text-gray-500 text-xl md:text-4xl text-center mb-6">BDT :{bike.price}/=</h1>
      <div className="specification w-full flex flex-col items-start">
        <h1 className=" text-gray-500 font-semibold text-3xl md:text-6xl text-center mb-6 pb-3 border-b-[5px]">Specifications</h1>
      </div>
      <Divider orientation="left">Default Size</Divider>
    <Collapse className="w-full"
      items={[
        {
          key: '1',
          label: 'Brand',
          children: <p>Suzuki</p>,
        },
      ]}
    />
    <Collapse className="w-full"
      items={[
        {
          key: '1',
          label: 'Bike Category',
          children: <p>{bike.name}</p>,
        },
      ]}
    />
    <Collapse className="w-full"
      items={[
        {
          key: '1',
          label: 'Type',
          children: <p>{bike.name}</p>,
        },
      ]}
    />
    <Collapse className="w-full"
      items={[
        {
          key: '1',
          label: 'Displacement (cc)',
          children: <p>{bike.name}</p>,
        },
      ]}
    />
    <Collapse className="w-full"
      items={[
        {
          key: '1',
          label: 'Max Power',
          children: <p>{bike.name}</p>,
        },
      ]}
    />
    <Collapse className="w-full"
      items={[
        {
          key: '1',
          label: 'Max Torque',
          children: <p>{bike.name}</p>,
        },
      ]}
    />
    <Collapse className="w-full"
      items={[
        {
          key: '1',
          label: 'Mileage (Company)',
          children: <p>{bike.name}</p>,
        },
      ]}
    />
    <Collapse className="w-full"
      items={[
        {
          key: '1',
          label: 'Mileage (user)',
          children: <p>{bike.name}</p>,
        },
      ]}
    />
    <Collapse className="w-full"
      items={[
        {
          key: '1',
          label: 'Cooling',
          children: <p>{bike.name}</p>,
        },
      ]}
    />
    <Collapse className="w-full"
      items={[
        {
          key: '1',
          label: 'Starting Method',
          children: <p>{bike.name}</p>,
        },
      ]}
    />
    <Collapse className="w-full"
      items={[
        {
          key: '1',
          label: 'Gears',
          children: <p>{bike.name}</p>,
        },
      ]}
    />
    <Collapse className="w-full"
      items={[
        {
          key: '1',
          label: 'Clutch',
          children: <p>{bike.name}</p>,
        },
      ]}
    />
    <Collapse className="w-full"
      items={[
        {
          key: '1',
          label: 'Engine Oil Grade',
          children: <p>{bike.name}</p>,
        },
      ]}
    />
    </div>
  );
};

export default SingleBike;
