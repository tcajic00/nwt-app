import React, { useState } from "react";

import CarTable from "./components/CarTable";
import AddVehicleForm from "./components/AddVehicleForm";

import "./App.css";

const App = () => {
  const vehiclesData = [
    {
      id: 1,
      maker: "Ford",
      model: "Focus",
      year: "2010",
      owner: "John Doe",
      malfunction: "Brakes",
    },
    {
      id: 2,
      maker: "Opel",
      model: "Corsa",
      year: "2011",
      owner: "Mark Doe",
      malfunction: "Oil needs change",
    },
    {
      id: 3,
      maker: "Ford",
      model: "Manta",
      year: "1978",
      owner: "Bill Doe",
      malfunction: "Air filter",
    },
  ];

  const [vehicles, setVehicles] = useState(vehiclesData);

  const addVehicle = (vehicle) => {
    vehicle.id = vehicles.length + 1;
    setVehicles([...vehicles, vehicle]);
  };

  const deleteVehicle = (id) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
  };

  return (
    <div className="container">
      <h1>Auto repair shop</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add vehicle</h2>
          <AddVehicleForm addVehicle={addVehicle} />
        </div>
        <div className="flex-large">
          <h2>Vehicle queue</h2>
          <CarTable vehicles={vehicles} deleteVehicle={deleteVehicle} />
        </div>
      </div>
    </div>
  );
};

export default App;
