import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="deep123patel456@gmail.com">
        <Button>Contact: deep123patel456@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;