import React, { useState, useEffect } from "react";

import { TextField, Button } from "@material-ui/core";

import "./edit-vehicle-form.css";

const EditVehicleForm = (props) => {
  const [vehicle, setVehicle] = useState(props.currentVehicle);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setVehicle({ ...vehicle, [name]: value });
  };

  useEffect(() => {
    setVehicle(props.currentVehicle);
  }, [props]);

  return (
    <form
      id="edit-form"
      onSubmit={(event) => {
        event.preventDefault();
        props.updateVehicle(vehicle.id, vehicle);
      }}
    >
      <TextField
        required
        type="text"
        name="maker"
        value={vehicle.maker}
        label="Maker"
        variant="outlined"
        onChange={handleInputChange}
      />
      <TextField
        required
        type="text"
        name="model"
        value={vehicle.model}
        label="Model"
        variant="outlined"
        onChange={handleInputChange}
      />
      <TextField
        required
        type="text"
        name="year"
        value={vehicle.year}
        label="Year of production"
        variant="outlined"
        onChange={handleInputChange}
      />
      <TextField
        required
        type="text"
        name="owner"
        value={vehicle.owner}
        label="Owner"
        variant="outlined"
        onChange={handleInputChange}
      />
      <TextField
        required
        type="text"
        name="malfunction"
        value={vehicle.malfunction}
        label="Malfunction"
        variant="outlined"
        onChange={handleInputChange}
      />
      <Button color="primary" variant="contained" type="submit">
        Update vehicle
      </Button>
      <Button
        onClick={() => props.setEditing(false)}
        variant="contained"
        color="secondary"
      >
        Cancel
      </Button>
    </form>
  );
};

export default EditVehicleForm;
