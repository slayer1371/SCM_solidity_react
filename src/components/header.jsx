import React from "react";
import { Button } from "react-bootstrap";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <Button
            style={{"fontSize":"22px","fontFamily":"Raleway"}}
              variant="outline-light"
            >
              Learn More
            </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
