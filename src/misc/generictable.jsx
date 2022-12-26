import React from "react"

import { fleet } from "../vehicles/fleet-data.js";
import { VehicleDataService } from '../vehicles/vehicle-data-service.js';
import Table from "./table"



export default function GenericTable() {

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
      <div>
        <h6>Vehicles</h6>
        <Table tableData={vehicles} tableHeaders="id license latlong" />

       
      </div>
    );
  }