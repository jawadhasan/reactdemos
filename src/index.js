
import 'regenerator-runtime/runtime'

import 'bootstrap'
// import "bootstrap/dist/css/bootstrap.css";

import './resources/bootstrap.cyborg.css';
import Swal from 'sweetalert2'

import React from "react"
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom'


import App from "./app";

import Invoices from "./routes/invoices";
import { TodoApp } from "./todo-app/todo-app"
import Vehicles from './routes/vehicles';
import DataFlow from './routes/dataflow';
import { AjaxTest } from './ajax-test/ajax-test';

import { Sum } from './sum/sum';
import { About } from './about/about';

import DynamicTable from './dynamic-table/dynamic-table';
import MiscDemo from './misc/misc';
import FinalSpace from './misc/final-space';

const rootElement = document.getElementById("root");

render(
    <HashRouter >
        <Routes>
            <Route path="/" element={<App />}>

                <Route path="dataflow" element={<DataFlow />} />
      

                <Route path="vehicles" element={<Vehicles />} />
                <Route path="todo" element={<TodoApp />} />              
                <Route path="invoices" element={<Invoices />} />
                <Route path="ajaxtest" element={<AjaxTest />} />               
                <Route path="sum" element={<Sum a={4} b={5} />} />               
                <Route path="dynamictable" element={<DynamicTable />} />
                <Route path="finalspace" element={<FinalSpace />} />
                <Route path="misc" element={<MiscDemo />} />
                <Route path="about" element={<About />} />

            </Route>
        </Routes>
    </HashRouter >,
    rootElement

);


setTimeout(() => {
    //call this method to display alerts....
    let msgObj = { "message": "Hello World!" };
    // displayObject(msgObj);

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


