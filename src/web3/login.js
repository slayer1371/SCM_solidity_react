import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import {
  connectWallet,
  getCurrentWalletConnected,
  Supplychain,
} from "./connectmeta";
import NavScrollExample from "../containers/nav";

async function addManufacturer(names) {
  const walletResponse = await connectWallet();
  return Supplychain.methods
    .addManufacturer(names)
    .send({ from: walletResponse.address });
}

async function addDistributor(names) {
  const walletResponse = await connectWallet();
  return Supplychain.methods
    .addDistributor(names)
    .send({ from: walletResponse.address })
    .on("error", function (error, receipt) {
      // Do something to alert the user their transaction has failed
      console.log("Failed");
    });
}

async function addRetailer(names) {
  const walletResponse = await connectWallet();
  return Supplychain.methods
    .addRetailer(names)
    .send({ from: walletResponse.address });
}

async function addCustomer(names) {
  const walletResponse = await connectWallet();
  return Supplychain.methods
    .addCustomer(names)
    .send({ from: walletResponse.address });
}

export const Metamaskconnect = () => {
  //state variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [manufacturerValue, setmanuInputValue] = useState("");
  const [distributorValue, setdistribInputValue] = useState("");

  const [retailerValue, setretInputValue] = useState("");

  const [customerValue, setcustInputValue] = useState("");

  const handlemanuInputChange = (event) => {
    setmanuInputValue(event.target.value);
  };
  const handledistribInputChange = (event) => {
    setdistribInputValue(event.target.value);
  };
  const handleretInputChange = (event) => {
    setretInputValue(event.target.value);
  };
  const handlecustInputChange = (event) => {
    setcustInputValue(event.target.value);
  };

  //called only once
  useEffect(() => {
    async function fetchWallet() {
      const { address, status } = await getCurrentWalletConnected();
      setWallet(address);
      setStatus(status);
    }
    fetchWallet();
    addWalletListener();
  }, []);

  function addWalletListener() {
    //TODO: implement
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  //the UI of our component
  return (
    <div>
      <NavScrollExample />
      <Container
        fluid
        style={{ display: "flex", justifyContent: "space-between", "fontSize":"15px"}}
      >
        <Card style={{ width: "30rem" }}>
          <Card.Img
            variant="top"
            src="https://logowik.com/content/uploads/images/metamask4112.jpg"
          />
          <Card.Body>
            <Card.Title style={{"fontSize":"18px"}}>Connect to Metamask</Card.Title>
            <Card.Text style={{"fontSize":"16px"}}>Metamask - An Injected web3 Provider</Card.Text>
            <Button style={{"fontSize":"15px"}} variant="primary" onClick={connectWalletPressed}>
              {" "}
              {walletAddress.length > 0 ? (
                "Connected: " +
                String(walletAddress).substring(0, 6) +
                "..." +
                String(walletAddress).substring(38)
              ) : (
                <span>Connect Wallet</span>
              )}
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "28rem" }}>
          <Card.Body>
            <Card.Title style={{"fontSize":"20px"}}>Manufacturer</Card.Title>
            <Card.Text style={{"fontSize":"16px"}}>Add a Manufacturer :)</Card.Text>
            <input
              type="text"
              placeholder="Manufacturer's Name"
              value={manufacturerValue}
              onChange={handlemanuInputChange}
            />
            <br />
            <br />
            <Button
              style={{"fontSize":"15px"}}
              variant="primary"
              onClick={() => addManufacturer(manufacturerValue)}
            >
              Add Manufacturer
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "28rem" }}>
          <Card.Body>
            <Card.Title style={{"fontSize":"20px"}}>Distributor</Card.Title>
            <Card.Text style={{"fontSize":"16px"}}>Add a Distributor :)</Card.Text>
            <input
              type="text"
              placeholder="Distributor's Name"
              value={distributorValue}
              onChange={handledistribInputChange}
            />
            <br />
            <br />
            <Button
            style={{"fontSize":"15px"}}
              variant="primary"
              onClick={() => addDistributor(distributorValue)}
            >
              Add Distributor
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "28rem" }}>
          <Card.Body>
            <Card.Title style={{"fontSize":"20px"}}>Retailer</Card.Title>
            <Card.Text style={{"fontSize":"16px"}}>Add a Retailer :)</Card.Text>
            <input
              type="text"
              placeholder="Retailer's Name"
              value={retailerValue}
              onChange={handleretInputChange}
            />
            <br />
            <br />
            <Button
            style={{"fontSize":"15px"}}
              variant="primary"
              onClick={() => addRetailer(retailerValue)}
            >
              Add Retailer
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "28rem" }}>
          <Card.Body>
            <Card.Title style={{"fontSize":"20px"}}>Customer</Card.Title>
            <Card.Text style={{"fontSize":"16px"}}>Add a Customer :)</Card.Text>
            <input
              type="text"
              placeholder="Customer's Name"
              value={customerValue}
              onChange={handlecustInputChange}
            />
            <br />
            <br />
            <Button
              style={{"fontSize":"15px"}}
              variant="primary"
              onClick={() => addCustomer(customerValue)}
            >
              Add Customer
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Metamaskconnect;
