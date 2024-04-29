import { useState , useEffect} from "react";
import { Supplychain } from "../web3/connectmeta";

const Customerpage = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const viewCustomers = async () => {
      try {
        const customers = await Supplychain.methods.viewCustomers().call();
        console.log(customers);
        setCustomers(customers);
      } catch (error) {
        console.error("Error:", error);
        // Handle error on the frontend
      }
    };

    viewCustomers();
  }, []);

  return (
    <div>
      <h1>Customers registered in the contract</h1>
      <ul>
        {customers.map((customer, index) => (
          <li key={index}>Name - {customer.name} address - {customer.customer}</li>
        ))}
      </ul>
    </div>
  );
};

export default Customerpage;