// import React, { Fragment } from "react";
// import { useSelector } from "react-redux";
// import { Navigate , Route, Routes } from "react-router-dom";

// const ProtectedRoute = ({ isAdmin , component: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);
//   console.log( loading, isAuthenticated, user)

//   return (
//     <Fragment>
//       {loading === false && (
//     <Routes>
//         <Route
        
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//               return <Navigate to="/login" />;
//             }
            
//             if(isAdmin === true && user.role !== "admin") {
//             console.log("account"); 
//             }

//             return <Component {...props} />;
        
//           }}
//         />
//     </Routes>
//       )}
//     </Fragment>
//   );
// };

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "../layout/Loader/Loader" // Your custom loader component

const ProtectedRoute = ({ isAdmin, children }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  console.log(loading, isAuthenticated, user )
  

  useEffect(() => {
    if (!loading) {
      setIsAuthChecked(true);
    }
  }, [loading]);

  // If still loading or auth check not complete, show loader
  if (loading || !isAuthChecked) {
    console.log("waiitttt")
    return <Loader />;
  }

  // After auth check is complete, proceed with redirection logic
  if (!isAuthenticated) {
    console.log('/login')
    return <Navigate to="/login" replace />;
  }

  if (isAdmin && user?.role !== "admin") {
    console.log('/account')
    return <Navigate to="/notFount" replace />;
  }

  return children;
};

export default ProtectedRoute;