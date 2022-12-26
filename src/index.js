
import 'regenerator-runtime/runtime'

import 'bootstrap'
// import "bootstrap/dist/css/bootstrap.css";

import './resources/bootstrap.cyborg.css';
import Swal from 'sweetalert2'

import React from "react"
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./app";

import Invoices from "./routes/invoices";
import { TodoApp } from "./todo-app/todo-app"
import { AjaxTest } from './ajax-test/ajax-test';

import { About } from './about/about';

import DynamicTable from './dynamic-table/dynamic-table';
import ProductsApp from './products/products-app';
import MiscDemo from './misc/misc';
import FinalSpace from './misc/final-space';
import FeaturedProduct from './products/featured-product';
import Product from './products/product';
import SearchResults from './products/search-results';

const rootElement = document.getElementById("root");

render(
    <BrowserRouter >       
        <App />
    </BrowserRouter >,
    rootElement

);


