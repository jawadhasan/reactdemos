
import 'regenerator-runtime/runtime'

import 'bootstrap'
// import "bootstrap/dist/css/bootstrap.css";

import './resources/bootstrap.cyborg.css';
import Swal from 'sweetalert2'

import React from "react"
import { render } from "react-dom";
import { BrowserRouter} from "react-router-dom";

import App from "./app";

const rootElement = document.getElementById("root");

render(
    <BrowserRouter >       
        <App />
    </BrowserRouter >,
    rootElement

);


