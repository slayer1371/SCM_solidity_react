import { useState , useEffect} from "react";
import { Supplychain } from "../web3/connectmeta";

const Manufacturerpage = () => {
    const [manufacturers, setManufacturers] = useState([]);
  
    useEffect(() => {
      const viewManufacturers = async () => {
        try {
          const manufacturers = await Supplychain.methods.viewManufacturers().call();
          setManufacturers(manufacturers);
        } catch (error) {
          console.error("Error:", error);
          // Handle error on the frontend
        }
      };
  
      viewManufacturers();
    }, []);
  
    return (
      <div>
        <h1>Manufacturers registered in the contract</h1>
        <ul>
          {manufacturers.map((manufacturer, index) => (
            <li key={index}>Name - {manufacturer.name} address - {manufacturer.manufacturer}</li>
          ))}
        </ul>
      </div>
    );
  };

  
export default Manufacturerpage;