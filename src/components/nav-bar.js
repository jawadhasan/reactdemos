import React from "react"
import { NavLink  } from 'react-router-dom';
const NavBar = () => {
    return (
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
                <NavLink className="nav-link" to="/">Home</NavLink>
             </li>   
             <li className="nav-item">
                <NavLink className="nav-link" to="/finalspace">FinalSpace</NavLink>
             </li>
             <li className="nav-item">
                <NavLink className="nav-link" to="/users">Users</NavLink>
             </li>         
             <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
             </li>
           
             <li className="nav-item">
                <NavLink className="nav-link" to="/dynamictable">Dynamic-Table</NavLink>
             </li>
             <li className="nav-item">
                <NavLink className="nav-link" to="/misc">Misc</NavLink>
             </li>
             <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
             </li>
             <li className="nav-item">
                <NavLink className="nav-link" to="/starmatch">Star Match</NavLink>
             </li>
             <li className="nav-item">
                <a className="nav-link" href="https://signalrchat.awsclouddemos.com/" target="_blank">SignalR Chat</a>
             </li>
          </ul>
          </div>
    </nav>
    );
   };
   
   export default NavBar;