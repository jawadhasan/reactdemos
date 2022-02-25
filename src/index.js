
import 'regenerator-runtime/runtime'

import 'bootstrap'
import "bootstrap/dist/css/bootstrap.css";

import React from "react"
import ReactDOM from "react-dom"

import './resources/bootstrap.slate.css';
import Swal from 'sweetalert2'

import { TodoApp } from "./todo-app/todo-app.js";

import { fleet } from "./vehicles/fleet-data.js";
import {VehicleDataService} from './vehicles/vehicle-data-service.js';

import {VehicleTable} from "./vehicles/vehicles-table";

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

console.log('vehicles:', vehicles);

//Vehicle  example
const app = document.getElementById("root");
ReactDOM.render(<VehicleTable vehicles={vehicles} />, app);



//Todo app example
// const app = document.getElementById("root");
// ReactDOM.render(<TodoApp />, app);


setTimeout(() => {
    //call this method to display alerts....
    let msgObj = {"message": "Hello World!"};
    displayObject(msgObj);

}, 2000);


function displayObject(data) {
    Swal.fire({
        title: data && (data.message || data.title || ''),
        html: `<div class="text-danger" style="text-align:left">  ${JSON.stringify(data || {}, null, 6)
            .replace(/\n( *)/g, function (match, p1) {
                return '<br>' + '&nbsp;'.repeat(p1.length);
            })}</div>`
    })
}


