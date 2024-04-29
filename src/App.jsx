import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Customerpage from "./entities/customerpage";
import Distributorpage from "./entities/distributorpage";
import Manufacturerpage from "./entities/manufacturerpage";
import Retailerpage from "./entities/retailerpage";
import Product from "./web3/addproduct";
import Viewproductbyid from "./web3/viewproductbyid";
import ViewCurrentState from "./web3/currentstae";
import UpdateStateByManufacturer from "./web3/updatestate";
import GridExample from "./containers/cardgrid";
import Metamaskconnect from "./web3/login";


const App = () => { 
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/products" element={<GridExample />}></Route>
        <Route path = "/login" element ={<Metamaskconnect />}></Route>
        <Route path="/manufacturers" element={<Manufacturerpage />}></Route>
        <Route path="/customers" element={<Customerpage />}></Route>
        <Route path="/distributors" element={<Distributorpage />}></Route>
        <Route path="/retailers" element={<Retailerpage />}></Route>
        <Route path="/addproduct" element={<Product />}></Route>
        <Route path="viewproduct" element={<Viewproductbyid />}></Route>
        <Route path="/current" element={<ViewCurrentState />}></Route>
        <Route path="/updatestate" element={<UpdateStateByManufacturer />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
