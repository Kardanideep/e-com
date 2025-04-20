// import React from "react";
// import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// import "./orderSuccess.css";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";

// const OrderSuccess = () => {

//   useEffect(() => {
//     localStorage.removeItem("cartItems"); // clear cart from storage
//   }, []);

//   return (
//     <div className="orderSuccess">
//       <CheckCircleIcon />

//       <p className="msg">Your Order has been Placed successfully </p>
//       <Link to="/orders">View Orders</Link>
//     </div>
//   );
// };

// export default OrderSuccess;

import React, { useEffect } from "react";
import "./orderSuccess.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../actions/cartAction"; // You need this action

const OrderSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());                      // clears Redux state
    localStorage.removeItem("cartItems");       // clears localStorage
  }, []);

  return (
    <div className="orderSuccess">
      <img src="/payment.gif" alt="Payment Success" className="success-gif" />
  
  <p className="msg">Your Order has been Placed Successfully</p>
  <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
