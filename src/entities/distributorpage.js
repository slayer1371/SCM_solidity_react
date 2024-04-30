import { useState , useEffect} from "react";
import { Supplychain } from "../web3/connectmeta";
import Navigationn from "../components/navigation";
import { Card } from "react-bootstrap";
import './man.css';

const Distributorpage = () => {
    const [distributors, setDistributors] = useState([]);
  
    useEffect(() => {
      const viewDistributors = async () => {
        try {
          const distributors = await Supplychain.methods.viewDistributors().call();
          setDistributors(distributors);
        } catch (error) {
          console.error("Error:", error);
        }
      };
  
      viewDistributors();
    }, []);
  
    return (
      <div>
      <Navigationn />
      <div className="main">
      <div className="two">
        <h1><u>Distributors registered in the contract</u></h1>
      </div>
        <div className="one">
          {distributors.map((distributor, index) => (
            <Card bg={'light'} text={'bg'==='light'?'white':'dark'} style={{ width: '28rem' }}>
            <Card.Img variant="top"  style={{"border-image":"10px"}}/>
            <Card.Body>
              <Card.Title style={{"fontSize":"14px"}}><b>Name </b>- {distributor.name}</Card.Title>
              <Card.Text>
                <b>Metamask Wallet Address</b> - {distributor.distributor}
              </Card.Text>
            </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      </div>
    );
  };

  
export default Distributorpage;