import React from "react"
import { Routes, Route } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import { About } from "./about/about";
import Home from "./home"
import Products from "./products"
import ProductDetails from "./products/product-details";
import NoMatch from "./components/no-match"
import NavBar from "./components/nav-bar"
import Users from "./users/users";
import AddUser from "./users/add-user";
import EditUser from "./users/edit-user"
import UserDetails from "./users/user-details";
import MiscDemo from "./misc/misc"
import FinalSpace from "./misc/final-space"
import DynamicTable from "./dynamic-table/dynamic-table"

const App = () => {
   return (
      <>
         <NavBar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="/users/:slug" element={<UserDetails />} />
            <Route path="/users/edit/:slug" element={<EditUser />} />
            <Route path="/users/add" element={<AddUser />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="/dynamictable" element={ <DynamicTable />} />
            <Route path="finalspace" element={<FinalSpace />} />
            <Route path="/misc" element={ <MiscDemo />} />
            <Route path="/about" element={<About />} />
            
            <Route path="*" element={<NoMatch />} />
         </Routes>
      </>
   );
};

export default App;