
import 'regenerator-runtime/runtime'

import 'bootstrap'
import "bootstrap/dist/css/bootstrap.css";

import './resources/bootstrap.slate.css';
import Swal from 'sweetalert2'

import React from "react"
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom'


import App from "./app";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import {TodoApp} from "./todo-app/todo-app"
import Vehicles from './routes/vehicles';
import DataFlow from './routes/dataflow';
import GenericTable from './routes/generictable';

const rootElement = document.getElementById("root");

render(
    <HashRouter >
        <Routes>
            <Route path="/" element={<App />}>

                <Route path="dataflow" element={<DataFlow />} /> 
                <Route path="generictable" element={<GenericTable />} /> 

                <Route path="vehicles" element={<Vehicles />} />
                <Route path="todo" element={<TodoApp />} />
                <Route path="expenses" element={<Expenses />} />
                <Route path="invoices" element={<Invoices />} />

            </Route>
        </Routes>
    </HashRouter >,
    rootElement

);


setTimeout(() => {
    //call this method to display alerts....
    let msgObj = { "message": "Hello World!" };
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


