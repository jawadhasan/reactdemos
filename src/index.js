
import 'regenerator-runtime/runtime'

import 'bootstrap'
import "bootstrap/dist/css/bootstrap.css";

import React from "react"
import ReactDOM from "react-dom"

import './resources/bootstrap.slate.css';
import Swal from 'sweetalert2'

import { TodoApp } from "./todo-app/todo-app.js";

//App start
const app = document.getElementById("root");
ReactDOM.render(<TodoApp />, app);



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



$(function () {

    application.showToast(application.title, 'Application Ready!');

    //Acitve Link, Highlighting
    $('.navbar-nav .nav-link').on('click', (e) => {
        $('.navbar-nav .nav-link').removeClass('active');
        $(e.target).addClass('active');
    });



    //footer links - click event binding
    $(".footer-links a").on('click', (e) => {
        let pageLink = e.target.getAttribute("data-link");
        console.log('data-', pageLink);
        application.activateRoute(pageLink ?? 'Contact');
    });

})
