import React, { useState } from "react";
import { Link } from "react-router-dom";

import BuildIcon from "@material-ui/icons/Build";

import CarTable from "../../components/CarTable";
import AddVehicleForm from "../../components/AddVehicleForm";
import EditVehicleForm from "../../components/EditVehicleForm";

import "./home-page.css";

const HomePage = (props) => {
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

  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: null,
    maker: "",
    model: "",
    year: "",
    owner: "",
    malfunction: "",
  };

  const [currentVehicle, setCurrentVehicle] = useState(initialFormState);

  const editVehicle = (vehicle) => {
    setEditing(true);

    setCurrentVehicle({
      id: vehicle.id,
      maker: vehicle.maker,
      model: vehicle.model,
      year: vehicle.year,
      owner: vehicle.owner,
      malfunction: vehicle.malfunction,
    });
  };

  const updateVehicle = (id, updatedVehicle) => {
    setEditing(false);

    setVehicles(
      vehicles.map((vehicle) => (vehicle.id === id ? updatedVehicle : vehicle))
    );
  };

  const addVehicle = (vehicle) => {
    vehicle.id = vehicles.length + 1;
    setVehicles([...vehicles, vehicle]);
  };

  const deleteVehicle = (id) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
  };

  return (
    <div className="container">
      <p className="logged-user">{props.logged.username}</p>
      <Link className="logged-user" to="/login" onClick={props.handleLogout}>
        {props.logged.loggedIn ? "Log out" : "Log in"}
      </Link>
      <div className="flex-row">
        <BuildIcon fontSize="large" className="build-icon" />
        <h1>Auto repair shop</h1>
      </div>

      {props.logged.loggedIn ? (
        <div className="flex-row">
          {props.logged.username === "tcajic00" ? (
            <div className="flex-large">
              {editing ? (
                <div>
                  <h2>Edit vehicle</h2>
                  <EditVehicleForm
                    setEditing={setEditing}
                    currentVehicle={currentVehicle}
                    updateVehicle={updateVehicle}
                  />
                </div>
              ) : (
                <div>
                  <h2>Add vehicle</h2>
                  <AddVehicleForm addVehicle={addVehicle} />
                </div>
              )}
            </div>
          ) : (
            <div className="flex-large">You're not permited to edit data!</div>
          )}

          <div className="flex-large">
            <h2>Vehicle queue</h2>
            <CarTable
              vehicles={vehicles}
              editVehicle={editVehicle}
              deleteVehicle={deleteVehicle}
              logged={props.logged}
            />
          </div>
        </div>
      ) : (
        <div>Log in to see data...</div>
      )}
    </div>
  );
};

export default HomePage;
