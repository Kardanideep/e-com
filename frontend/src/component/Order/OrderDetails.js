// import React, { Fragment, useEffect } from "react";
// import "./orderDetails.css";
// import { useSelector, useDispatch } from "react-redux";
// import MetaData from "../layout/Metadata";
// import { Link } from "react-router-dom";
// import { Typography } from "@material-ui/core";
// import { getOrderDetails, clearErrors } from "../../actions/orderAction";
// import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";
// import { useParams } from "react-router-dom";

// const OrderDetails = ({ match }) => {
//   const { order, error, loading } = useSelector((state) => state.orderDetails);
 
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const alert = useAlert();

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }

//     dispatch(getOrderDetails(id));
//   }, [dispatch, alert, error, id]);
//   return (
//     <Fragment>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Fragment>
//           <MetaData title="Order Details" />
//           <div className="orderDetailsPage">
//             <div className="orderDetailsContainer">
//               <Typography component="h1">
//                 Order #{order && order._id}
//               </Typography>
//               <Typography>Shipping Info</Typography>
//               <div className="orderDetailsContainerBox">
//                 <div>
//                   <p>Name:</p>
//                   <span>{order.user && order.user.name}</span>
//                 </div>
//                 <div>
//                   <p>Phone:</p>
//                   <span>
//                     {order.shippingInfo && order.shippingInfo.phoneNo}
//                   </span>
//                 </div>
//                 <div>
//                   <p>Address:</p>
//                   <span>
//                     {order.shippingInfo &&
//                       `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
//                   </span>
//                 </div>
//               </div>
//               <Typography>Payment</Typography>
//               <div className="orderDetailsContainerBox">
//                 <div>
//                   <p
//                     className={
//                       order.paymentInfo &&
//                       order.paymentInfo.status === "succeeded"
//                         ? "greenColor"
//                         : "redColor"
//                     }
//                   >
//                     {order.paymentInfo &&
//                     order.paymentInfo.status === "succeeded"
//                       ? "PAID"
//                       : "NOT PAID"}
//                   </p>
//                 </div>

//                 <div>
//                   <p>Amount:</p>
//                   <span>{order.totalPrice && order.totalPrice}</span>
//                 </div>
//               </div>

//               <Typography>Order Status</Typography>
//               <div className="orderDetailsContainerBox">
//                 <div>
//                   <p
//                     className={
//                       order.orderStatus && order.orderStatus === "Delivered"
//                         ? "greenColor"
//                         : "redColor"
//                     }
//                   >
//                     {order.orderStatus && order.orderStatus}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="orderDetailsCartItems">
//               <Typography>Order Items:</Typography>
//               <div className="orderDetailsCartItemsContainer">
//                 {order.orderItems &&
//                   order.orderItems.map((item) => (
//                     <div key={item.product}>
//                       <img src={item.image} alt="Product" />
//                       <Link to={`/product/${item.product}`}>
//                         {item.name}
//                       </Link>{" "}
//                       <span>
//                         {item.quantity} X ₹{item.price} ={" "}
//                         <b>₹{item.price * item.quantity}</b>
//                       </span>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// export default OrderDetails;

// OrderDetails.jsx

import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import MetaData from "../layout/Metadata";
import Loader from "../layout/Loader/Loader";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import "./orderDetails.css";

const OrderDetails = () => {
  const { order, error, loading } = useSelector((state) => state.orderDetails);
  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getOrderDetails(id));
  }, [dispatch, alert, error, id]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Order Details" />
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography component="h1" className="orderDetailsTitle">
                Order #{order && order._id}
              </Typography>

              <Typography className="sectionTitle">Shipping Info</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p>Name:</p>
                  <span>{order.user && order.user.name}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>{order.shippingInfo && order.shippingInfo.phoneNo}</span>
                </div>
                <div>
                  <p>Address:</p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                  </span>
                </div>
              </div>

              <Typography className="sectionTitle">Payment</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.paymentInfo &&
                    order.paymentInfo.status === "succeeded"
                      ? "PAID"
                      : "NOT PAID"}
                  </p>
                </div>
                <div>
                  <p>Amount:</p>
                  <span>₹{order.totalPrice && order.totalPrice}</span>
                </div>
              </div>

              <Typography className="sectionTitle">Order Status</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.orderStatus && order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.orderStatus && order.orderStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="orderDetailsCartItems">
              <Typography className="sectionTitle">Your Order Items:</Typography>
              <div className="orderDetailsCartItemsContainer">
                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <div key={item.product} className="cartItem">
                      <img src={item.image} alt={item.name} />
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                      <span>
                        {item.quantity} x ₹{item.price} ={" "}
                        <b>₹{item.quantity * item.price}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;
