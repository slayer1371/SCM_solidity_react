import { useState , useEffect} from "react";
import { Supplychain } from "../web3/connectmeta";

const Retailerpage = () => {
    const [retailers, setRetailers] = useState([]);
  
    useEffect(() => {
      const viewRetailers = async () => {
        try {
          const retailers = await Supplychain.methods.viewRetailers().call();
          setRetailers(retailers);
        } catch (error) {
          console.error("Error:", error);
        }
      };
  
      viewRetailers();
    }, []);
  
    return (
      <div>
        <h1>Manufacturers registered in the contract</h1>
        <ul>
          {retailers.map((retailer, index) => (
            <li key={index}>Name - {retailer.name} address - {retailer.retailer}</li>
          ))}
        </ul>
      </div>
    );
  };

  
export default Retailerpage;
