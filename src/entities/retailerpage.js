import { useState , useEffect} from "react";
import { Supplychain } from "../web3/connectmeta";
import { Card } from "react-bootstrap";
import Navigationn from "../components/navigation";
import './man.css';

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
      <Navigationn />
      <div className="main">
      <div className="two">
        <h1><u>Retailers registered in the contract</u></h1>
        </div>
        <div className="one">
          {retailers.map((retailer, index) => (
            <Card bg={'light'} text={'bg'==='light'?'white':'dark'} style={{ width: '28rem' }}>
            <Card.Img variant="top"  style={{"border-image":"10px"}}/>
            <Card.Body>
              <Card.Title style={{"fontSize":"14px"}}><b>Name </b>- {retailer.name}</Card.Title>
              <Card.Text>
                <b>Metamask Wallet Address</b> - {retailer.retailer}
              </Card.Text>
            </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      </div>
    );
  };

  
export default Retailerpage;
