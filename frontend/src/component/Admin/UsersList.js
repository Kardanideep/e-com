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
// import { getAllUsers, clearErrors, deleteUser } from "../../actions/userAction";
// import { DELETE_USER_RESET } from "../../constants/userConstants";

// const UsersList = ({ history }) => {
//   const dispatch = useDispatch();

//   const alert = useAlert();

//   const { error, users } = useSelector((state) => state.allUsers);

//   const {
//     error: deleteError,
//     isDeleted,
//     message,
//   } = useSelector((state) => state.profile);

//   const deleteUserHandler = (id) => {
//     dispatch(deleteUser(id));
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
//       alert.success(message);
//       history("/admin/users");
//       dispatch({ type: DELETE_USER_RESET });
//     }

//     dispatch(getAllUsers());
//   }, [dispatch, alert, error, deleteError, history, isDeleted, message]);

//   const columns = [
//     { field: "id", headerName: "User ID", minWidth: 180, flex: 0.4 },

//     {
//       field: "email",
//       headerName: "Email",
//       minWidth: 200,
//       flex: 0.4,
//     },
//     {
//       field: "name",
//       headerName: "Name",
//       minWidth: 150,
//       flex: 0.2,
//     },

//     {
//       field: "role",
//       headerName: "Role",
//       type: "number",
//       minWidth: 150,
//       flex: 0.2,
//       cellClassName: (params) => {
//         return params.getValue(params.id, "role") === "admin"
//           ? "greenColor"
//           : "redColor";
//       },
//     },

//     {
//       field: "actions",
//       flex: 0.2,
//       headerName: "Actions",
//       minWidth: 150,
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <Fragment>
//             <Link to={`/admin/user/${params.getValue(params.id, "id")}`}>
//               <EditIcon />
//             </Link>

//             <Button
//               onClick={() =>
//                 deleteUserHandler(params.getValue(params.id, "id"))
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

//   users &&
//     users.forEach((item) => {
//       rows.push({
//         id: item._id,
//         role: item.role,
//         email: item.email,
//         name: item.name,
//       });
//     });

//   return (
//     <Fragment>
//       <MetaData title={`ALL USERS - Admin`} />

//       <div className="dashboard">
//         <SideBar />
//         <div className="productListContainer">
//           <h1 id="productListHeading">ALL USERS</h1>

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

// export default UsersList;

import React, { Fragment, useEffect } from "react";
import "./userList.css"; // new CSS file
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/Metadata";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { getAllUsers, clearErrors, deleteUser } from "../../actions/userAction";
import { DELETE_USER_RESET } from "../../constants/userConstants";

const UsersList = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const history = useNavigate();

  const { error, users } = useSelector((state) => state.allUsers);
  const {
    error: deleteError,
    isDeleted,
    message,
  } = useSelector((state) => state.profile);

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
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
      alert.success(message);
      history("/admin/users");
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getAllUsers());
  }, [dispatch, alert, error, deleteError, history, isDeleted, message]);

  return (
    <Fragment>
      <MetaData title={`ALL USERS - Admin`} />
      <div className="dashboard">
        <SideBar />

        <div className="userListContainer">
          <h1 className="userListHeading">ALL USERS</h1>

          <div className="userCardWrapper">
            {users &&
              users.map((user) => (
                <div key={user._id} className="userCard">
                  <h3>User ID:</h3>
                  <p>{user._id}</p>

                  <h3>Name:</h3>
                  <p>{user.name}</p>

                  <h3>Email:</h3>
                  <p>{user.email}</p>

                  <h3 className={`userRole ${user.role === "admin" ? "admin" : "user"}`}>
                    Role: {user.role}
                  </h3>

                  <div className="userCardActions">
                    <Link to={`/admin/user/${user._id}`}>
                      <EditIcon style={{ color: "#3f51b5", cursor: "pointer" }} />
                    </Link>
                    <Button onClick={() => deleteUserHandler(user._id)}>
                      <DeleteIcon style={{ color: "red" }}/>
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

export default UsersList;
