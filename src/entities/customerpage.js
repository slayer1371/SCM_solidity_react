import { useState , useEffect} from "react";
import { Supplychain } from "../web3/connectmeta";
import Navigationn from "../components/navigation";
import { Card } from "react-bootstrap";
import './man.css'

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
      }
    };

    viewCustomers();
  }, []);

  return (
    <div>
      <Navigationn />
      <div className="main">
      <div className="two">
      <h1><u>Customers registered in the contract</u></h1>
      </div>
      <div className="one">
        {customers.map((customer, index) => (
          <Card bg={'light'} text={'bg'==='light'?'white':'dark'} style={{ width: '28rem' }}>
            <Card.Img variant="top"  style={{"border-image":"10px"}}/>
            <Card.Body>
              <Card.Title style={{"fontSize":"14px"}}><b>Name </b>- {customer.name}</Card.Title>
              <Card.Text>
                <b>Metamask Wallet Address</b> - {customer.customer}
              </Card.Text>
            </Card.Body>
            </Card>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Customerpage;