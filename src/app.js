import React from "react"
import {Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border">
        <a className="navbar-brand" href="/">
          React Demos
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
           
            <li className="nav-item">
              <Link className="nav-link" to="/vehicles">Vehicles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo">Todo</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/invoices">Invoices</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/expenses">Expenses</Link>
            </li>
          </ul>
        </div>
      </nav>

      <section className="flex-grow-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="display-6">Basic React Demos</h1>
              <p className="fst-italic text-muted">This page is being used for testing React Demos. Powered by <a
                className="text-primary" href="https://hexquote.com/" target="_blank">hexquote</a></p>
              <hr />
            </div>

          </div>


        </div>
      </section>

      <Outlet />

    </div>
  );
}