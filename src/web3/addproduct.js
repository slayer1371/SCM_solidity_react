import { useState } from "react";
import { Supplychain, connectWallet } from "./connectmeta";
import { Button } from "react-bootstrap";

async function addProduct(name,price,location) {
    const walletResponse = await connectWallet();
    const productCode = await Supplychain.methods.pId().call(); // Retrieve the product code from the contract
    return Supplychain.methods.addProduct(name,price,location).send({from:walletResponse.address});
  }

function Product() {

    const [names,setNames] = useState('');
    const[prices,setPrices] = useState('');
    const [locations, setLocations] = useState('');

    const handlenameInputChange = (event) => {
        setNames(event.target.value);
      }; 

    const handlepriceInputChange = (event) => {
    setPrices(event.target.value);
    }; 

    const handlelocationInputChange = (event) => {
    setLocations(event.target.value);
    }; 

    return(
        <div>
            <input type="text" placeholder="Product's Name" value={names} onChange={handlenameInputChange}/><br /><br />
            <input type="text" placeholder="Product's Price" value={prices} onChange={handlepriceInputChange}/><br /><br />
            <input type="text" placeholder="Product's Production Location" value={locations} onChange={handlelocationInputChange}/><br /><br />
            <Button variant="primary" onClick={() => addProduct(names,prices,locations)}>
            Add Product
        </Button>
        </div>
    );
}

export default Product;
