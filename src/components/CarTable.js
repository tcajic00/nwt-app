import React from "react";

import { IconButton } from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import "./car-table.css";

const CarTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Maker</th>
        <th>Model</th>
        <th>Year of production</th>
        <th>Owner name</th>
        <th>Malfunction</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody id="table-body">
      {props.vehicles.length > 0 ? (
        props.vehicles.map((vehicle) => (
          <tr key={vehicle.id}>
            <td>{vehicle.maker}</td>
            <td>{vehicle.model}</td>
            <td>{vehicle.year}</td>
            <td>{vehicle.owner}</td>
            <td>{vehicle.malfunction}</td>
            <td id="actions">
              <IconButton color="primary">
                <EditIcon />
              </IconButton>
              <IconButton
                color="secondary"
                onClick={() => props.deleteVehicle(vehicle.id)}
              >
                <DeleteIcon />
              </IconButton>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default CarTable;
