// import React, { Fragment, useEffect } from "react";
// import { DataGrid } from "@material-ui/data-grid";
// import "./productList.css";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { useAlert } from "react-alert";
// import { Button } from "@material-ui/core";
// import MetaData from "../layout/Metadata";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
// import SideBar from "./Sidebar";
// import {
//   deleteOrder,
//   getAllOrders,
//   clearErrors,
// } from "../../actions/orderAction";
// import { DELETE_ORDER_RESET } from "../../constants/orderConstants";
// import { useNavigate } from "react-router-dom";

// const OrderList = () => {
//   const history = useNavigate();  
//   const dispatch = useDispatch();

//   const alert = useAlert();

//   const { error, orders } = useSelector((state) => state.allOrders);

//   const { error: deleteError, isDeleted } = useSelector((state) => state.order);

//   const deleteOrderHandler = (id) => {
//     dispatch(deleteOrder(id));
//   };

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }

//     if (deleteError) {
//       alert.error(deleteError);
//       dispatch(clearErrors());
//     }

//     if (isDeleted) {
//       alert.success("Order Deleted Successfully");
//       history("/admin/orders");
//       dispatch({ type: DELETE_ORDER_RESET });
//     }

//     dispatch(getAllOrders());
//   }, [dispatch, alert, error, deleteError, history, isDeleted]);

//   const columns = [
//     { field: "id", headerName: "Order ID", minWidth: 190, flex: 0.2 },

//     {
//       field: "status",
//       headerName: "Status",
//       minWidth: 150,
//       flex: 0.1,
//       cellClassName: (params) => {
//         return params.getValue(params.id, "status") === "Delivered"
//           ? "greenColor"
//           : "redColor";
//       },
//     },
//     {
//       field: "itemsQty",
//       headerName: "Items Qty",
//       type: "number",
//       minWidth: 150,
//       flex: 0.1,
//     },

//     {
//       field: "amount",
//       headerName: "Amount",
//       type: "number",
//       minWidth: 150,
//       flex: 0.1,
//     },

//     {
//       field: "actions",
//       flex: 0.1,
//       headerName: "Actions",
//       minWidth: 150,
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <Fragment>
//             <Link to={`/admin/order/${params.getValue(params.id, "id")}`}>
//               <EditIcon />
//             </Link>

//             <Button
//               onClick={() =>
//                 deleteOrderHandler(params.getValue(params.id, "id"))
//               }
//             >
//               <DeleteIcon />
//             </Button>
//           </Fragment>
//         );
//       },
//     },
//   ];

//   const rows = [];

//   orders &&
//     orders.forEach((item) => {
//       rows.push({
//         id: item._id,
//         itemsQty: item.orderItems.length,
//         amount: item.totalPrice,
//         status: item.orderStatus,
//       });
//     });

//   return (
//     <Fragment>
//       <MetaData title={`ALL ORDERS - Admin`} />

//       <div className="dashboard">
//         <SideBar />
//         <div className="productListContainer">
//           <h1 id="productListHeading">ALL ORDERS</h1>

//           <DataGrid
//             rows={rows}
//             columns={columns}
//             pageSize={10}
//             disableSelectionOnClick
//             className="productListTable"
//             autoHeight
//           />
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default OrderList;

import React, { Fragment, useEffect } from "react";
import "./orderList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/Metadata";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import {
  deleteOrder,
  getAllOrders,
  clearErrors,
} from "../../actions/orderAction";
import { DELETE_ORDER_RESET } from "../../constants/orderConstants";

const OrderList = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, orders } = useSelector((state) => state.allOrders);
  const { error: deleteError, isDeleted } = useSelector((state) => state.order);

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Order Deleted Successfully");
      history("/admin/orders");
      dispatch({ type: DELETE_ORDER_RESET });
    }

    dispatch(getAllOrders());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);

  return (
    <Fragment>
      <MetaData title={`ALL ORDERS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="orderListContainer">
          <h1 id="orderListHeading">ALL ORDERS</h1>

          <div className="orderCardContainer">
            {orders &&
              orders.map((order) => (
                <div className="orderCard" key={order._id}>
                  <h3>Order ID: {order._id}</h3>
                  <p
                    className={`status ${
                      order.orderStatus === "Delivered"
                        ? "delivered"
                        : "pending"
                    }`}
                  >
                    Status: {order.orderStatus}
                  </p>
                  <p>Items Quantity: {order.orderItems.length}</p>
                  <p>Total Amount: ₹{order.totalPrice}</p>

                  <div className="orderCardActions">
                    <Link to={`/admin/order/${order._id}`} className="link">
                      <EditIcon style={{ color: "#3f51b5", cursor: "pointer" }} />
                    </Link>
                    <Button onClick={() => deleteOrderHandler(order._id)}>
                      <DeleteIcon style={{ color: "red" }} />
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OrderList;
