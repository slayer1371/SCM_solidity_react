import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Customerpage from "./entities/customerpage";
import Distributorpage from "./entities/distributorpage";
import Manufacturerpage from "./entities/manufacturerpage";
import Retailerpage from "./entities/retailerpage";
import Product from "./web3/addproduct";
import Viewproductbyid from "./web3/viewproductbyid";
import ViewCurrentState from "./web3/currentstate";
import UpdateStateByManufacturer from "./web3/updatestate/manufacturer";
import UpdateStateByCustomer from "./web3/updatestate/customer";
import UpdateStateByDistributor from "./web3/updatestate/distributor";
import UpdateStateByRetailer from "./web3/updatestate/retailer";
import ProductPage from "./containers/cardgrid";
import Metamaskconnect from "./web3/login";
import Maps from "./maps";


const App = () => { 
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path = "/login" element ={<Metamaskconnect />}></Route>
        <Route path="/manufacturers" element={<Manufacturerpage />}></Route>
        <Route path="/customers" element={<Customerpage />}></Route>
        <Route path="/distributors" element={<Distributorpage />}></Route>
        <Route path="/retailers" element={<Retailerpage />}></Route>
        <Route path="/addproduct" element={<Product />}></Route>
        <Route path="viewproduct" element={<Viewproductbyid />}></Route>
        <Route path="/current" element={<ViewCurrentState />}></Route>
        <Route path="/updatestate_manufacturer" element={<UpdateStateByManufacturer />}></Route>
        <Route path="/updatestate_distributor" element={<UpdateStateByDistributor />}></Route>
        <Route path="/updatestate_retailer" element={<UpdateStateByRetailer />}></Route>
        <Route path="/updatestate_customer" element={<UpdateStateByCustomer />}></Route>
        <Route path="/test" element= {<Maps />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
