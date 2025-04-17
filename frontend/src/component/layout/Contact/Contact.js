// import React from "react";
// import "./Contact.css";
// import { Button } from "@material-ui/core";

// const Contact = () => {
//   return (
//     <div className="contactContainer">
//       <a className="mailBtn" href="deep123patel456@gmail.com">
//         <Button>Contact: deep123patel456@gmail.com</Button>
//       </a>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactBox">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out with any questions or feedback.</p>
        <a className="mailBtn" href="mailto:deep123patel456@gmail.com">
          <Button
            variant="contained"
            startIcon={<MailOutlineIcon />}
            className="emailButton"
          >
            Email: deep123patel456@gmail.com
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
