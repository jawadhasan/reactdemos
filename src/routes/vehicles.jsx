import React from "react"

import { fleet } from "../vehicles/fleet-data.js";
import { VehicleDataService } from '../vehicles/vehicle-data-service.js';
import { VehicleTable } from "../vehicles/vehicles-table";



export default function Vehicles() {

let dataservice = new VehicleDataService();
dataservice.loadData(fleet);

//cars data
let carsMap = dataservice.cars.map(elem => (
    {
      id: elem.id,
      license: elem.license,
      latlong: elem.latlong
    }));

//trucks data
let trucksMap = dataservice.trucks.map(elem => (
    {
      id: elem.id,
      license: elem.license,
      latlong: elem.latlong
    }));

let vehicles = carsMap.concat(trucksMap);



    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Vehicles</h2>

        <VehicleTable vehicles={vehicles} />;
      </main>
    );
  }