import { useState , useEffect} from "react";
import { Supplychain } from "../web3/connectmeta";

const Distributorpage = () => {
    const [distributors, setDistributors] = useState([]);
  
    useEffect(() => {
      const viewDistributors = async () => {
        try {
          const distributors = await Supplychain.methods.viewDistributors().call();
          setDistributors(distributors);
        } catch (error) {
          console.error("Error:", error);
          // Handle error on the frontend
        }
      };
  
      viewDistributors();
    }, []);
  
    return (
      <div>
        <h1>Customers registered in the contract</h1>
        <ul>
          {distributors.map((distributor, index) => (
            <li key={index}>Name - {distributor.name} address - {distributor.distributor}</li>
          ))}
        </ul>
      </div>
    );
  };

  
export default Distributorpage;