import React, { useState } from "react";

import { TextField, Button } from "@material-ui/core";

import "./add-vehicle-form.css";

const AddVehicleForm = (props) => {
  const initialFormState = {
    id: null,
    maker: "",
    model: "",
    year: "",
    owner: "",
  };
  const [vehicle, setVehicle] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setVehicle({ ...vehicle, [name]: value });
  };

  return (
    <form
      id="add-form"
      onSubmit={(event) => {
        event.preventDefault();
        if (!vehicle.maker || !vehicle.model || !vehicle.year || !vehicle.owner)
          return;

        props.addVehicle(vehicle);
        setVehicle(initialFormState);
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
      <Button color="primary" variant="contained" type="submit">
        Add vehicle
      </Button>
    </form>
  );
};

export default AddVehicleForm;
