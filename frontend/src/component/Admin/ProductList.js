// import React, { Fragment, useEffect } from "react";
// import { DataGrid } from "@material-ui/data-grid";
// import "./productList.css";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   clearErrors,
//   getAdminProduct,
//   deleteProduct,
// } from "../../actions/productAction";
// import { Link } from "react-router-dom";
// import { useAlert } from "react-alert";
// import { Button } from "@material-ui/core";
// import MetaData from "../layout/Metadata";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
// import SideBar from "./Sidebar";
// import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";
// import { useNavigate } from "react-router-dom";

// const ProductList = () => {
//   const history = useNavigate();  
//   const dispatch = useDispatch();

//   const alert = useAlert();

//   const { error, products } = useSelector((state) => state.products);

//   const { error: deleteError, isDeleted } = useSelector(
//     (state) => state.product
//   );

//   const deleteProductHandler = (id) => {
//     dispatch(deleteProduct(id));
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
//       alert.success("Product Deleted Successfully");
//       history("/admin/dashboard");
//       dispatch({ type: DELETE_PRODUCT_RESET });
//     }

//     dispatch(getAdminProduct());
//   }, [dispatch, alert, error, deleteError, history, isDeleted]);

//   const columns = [
//     { field: "id", headerName: "Product ID", minWidth: 190, flex: 0.5 },

//     {
//       field: "name",
//       headerName: "Name",
//       minWidth: 150,
//       flex: 0.6,
//     },
//     {
//       field: "stock",
//       headerName: "Stock",
//       type: "number",
//       minWidth: 150,
//       flex: 0.3,
//     },

//     {
//       field: "price",
//       headerName: "Price",
//       type: "number",
//       minWidth: 140,
//       flex: 0.3,
//     },

//     {
//       field: "actions",
//       flex: 0.3,
//       headerName: "Actions",
//       minWidth: 140,
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <Fragment>
//             <Link to={`/admin/product/${params.getValue(params.id, "id")}`}>
//               <EditIcon />
//             </Link>

//             <Button
//               onClick={() =>
//                 deleteProductHandler(params.getValue(params.id, "id"))
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

//   products &&
//     products.forEach((item) => {
//       rows.push({
//         id: item._id,
//         stock: item.stock,
//         price: item.price,
//         name: item.name,
//       });
//     });

//   return (
//     <Fragment>
//       <MetaData title={`ALL PRODUCTS - Admin`} />

//       <div className="dashboard">
//         <SideBar />
//         <div className="productListContainer">
//           <h1 id="productListHeading">ALL PRODUCTS</h1>

//          <div className="datagrid">
//           <DataGrid
//             rows={rows}
//             columns={columns}
//             pageSize={10}
//             disableSelectionOnClick
//             className="productListTable"
//             autoHeight
//           />
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default ProductList;

import React, { Fragment, useEffect, useState } from "react";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminProduct,
  deleteProduct,
} from "../../actions/productAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/Metadata";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal"; // We'll define this below



const ProductList = () => {

  const [selectedProduct, setSelectedProduct] = useState(null);

  const history = useNavigate();  
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, products } = useSelector((state) => state.products);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
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
      alert.success("Product Deleted Successfully");
      history("/admin/dashboard");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }

    dispatch(getAdminProduct());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);

  return (
    <Fragment>
      <MetaData title={`ALL PRODUCTS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainera">
          <h1 id="productListHeadinga">ALL PRODUCTS</h1>

          {/* <div className="productGrida">
            {products && products.map((item) => (
              <div key={item._id} className="productCarda">
                <div className="productCardHeadera">
                  <h2>{item.name}</h2>
                </div>
                <div className="productCardBodya">
                  <p className="des"><strong>ID :</strong> {item._id}</p>
                  <p><strong>Price :</strong> ₹{item.price}</p>
                  <p><strong>Stock :</strong> {item.stock}</p>
                  <p className="des"><strong>Description :</strong> {item.description}</p>
                </div>
                <div className="productCardFootera">
                  <Link to={`/admin/product/${item._id}`}>
                    <Button>
                      <EditIcon />
                    </Button>
                  </Link>
                  <Button
                    onClick={() => deleteProductHandler(item._id)}
                    color="secondary"
                  >
                    <DeleteIcon />
                  </Button>
                </div>
              </div>
            ))}
          </div> */}
          <div className="productGrida">
  {products && products.map((item) => (
    <div
      key={item._id}
      className="productCarda"

    >
      <div className="productCardHeadera">
      <h2>{item.name.length > 25 ? item.name.slice(0, 25) + "..." : item.name}</h2>

      </div>
      <div className="productCardBodya">
        <p className="des"><strong>ID :</strong> {item._id}</p>
        <p><strong>Price :</strong> ₹{item.price}</p>
        <p><strong>Stock :</strong> {item.stock}</p>
      </div>
      <Button
          onClick={() => setSelectedProduct(item)}
          // color="secondary"
          className="view"
        >
          View Details
        </Button>
      <div className="productCardFootera">
      <Link to={`/admin/product/${item._id}`}>
                    <Button>
                      <EditIcon />
                    </Button>
                  </Link>
        <Button
          onClick={(e) => {
            e.stopPropagation(); // stop modal from opening
            deleteProductHandler(item._id);
          }}
          color="secondary"
        >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  ))}
</div>

{selectedProduct && (
  <Modal onClose={() => setSelectedProduct(null)} product={selectedProduct} />
)}

        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
