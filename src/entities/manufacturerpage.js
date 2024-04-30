import { useState , useEffect} from "react";
import { Supplychain } from "../web3/connectmeta";
import { Card } from "react-bootstrap";
import './man.css';
import Navigationn from "../components/navigation";

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
      <Navigationn />
      <div className="main">
      <div className="two">
        <h1><u>Manufacturers registered in the contract</u></h1>
        </div>
        <div className="one">
          {manufacturers.map((manufacturer, index) => (
            <Card bg={'light'} text={'bg'==='light'?'white':'dark'} style={{ width: '28rem' }}>
            <Card.Img variant="top"  style={{"border-image":"10px"}}/>
            <Card.Body>
              <Card.Title style={{"fontSize":"14px"}}><b>Name </b>- {manufacturer.name}</Card.Title>
              <Card.Text>
                <b>Metamask Wallet Address</b> - {manufacturer.manufacturer}
              </Card.Text>
            </Card.Body>
            </Card>
          ))}
        </div>
        </div>
        </div>
    );
  };

  
export default Manufacturerpage;

