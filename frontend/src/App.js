import "./App.css";
import {useState, useEffect} from "react"
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import WebFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp.js";
import store from "./Store.js";
import { loadUser} from "./actions/userAction.js";
import UserOptions from "./component/layout/Header/UserOptions.js"
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPasswrd from "./component/User/ForgotPassword.js";
import ResetPasswrd from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./component/Cart/Payment.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductsList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct.js";
import UpdateProduct from "./component/Admin/UpdateProduct.js";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";


function App() {

  const {isAuthenticated, user} = useSelector((state)=> state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  // console.log(stripeApiKey);

  useEffect(() => { 
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      }
    });

    store.dispatch(loadUser());
  
    getStripeApiKey();
  },[])

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    // <Router>
    //   <Header />

    //   {isAuthenticated && <UserOptions user={user} />}

    //   <Routes>

    //   <Route extact path="/" Component={Home} />
    //   <Route extact path="/product/:id" Component={ProductDetails} />
    //   <Route exact path="/products" Component={Products} />
    //   <Route path="Search/products/:keyword" Component={Products} />

    //   <Route exact path="/search" Component={Search} />

    //   <Route exact path="/login" Component={LoginSignUp} />

    //   <Route exact path="/password/forgot" Component={ForgotPasswrd} />

    //   <Route exact path="/password/reset/:token" Component={ResetPasswrd} />

    //   <Route exact path="/cart" Component={Cart} />

    //   <Route exact path="/contact" Component={Contact} />

    //   <Route exact path="/about" Component={About} />


    //   </Routes>
    //   <ProtectedRoute exact path="/password/update" Component={UpdatePassword} />
      
    //   <ProtectedRoute exact path="/login/shipping" Component={Shipping} />
      
    //   <ProtectedRoute exact path="/account" Component={Profile} />
    //   <ProtectedRoute exact path="/me/update" Component={UpdateProfile} />
    

    //   {stripeApiKey && (
    //       <Elements stripe={loadStripe(stripeApiKey)}>
    //         <ProtectedRoute exact path="/process/payment" Component={Payment} />
    //       </Elements>
    //     )}

    //   <ProtectedRoute exact path="/success" Component={OrderSuccess} />
    //   <ProtectedRoute exact path="/orders" Component={MyOrders} />

    
    //   <ProtectedRoute exact path="/orders/confirm" Component={ConfirmOrder} />
    //   <ProtectedRoute exact path="/order/:id" Component={OrderDetails} />

    //   <ProtectedRoute isAdmin={true} exact path="/admin/dashboard"  Component={Dashboard} />

    //   <ProtectedRoute isAdmin={true} exact path="/admin/products"  Component={ProductsList} />
    //   <ProtectedRoute isAdmin={true} exact path="/admin/product"  Component={NewProduct} />
    //   <ProtectedRoute isAdmin={true} exact path="/admin/product/:id"   Component={UpdateProduct} />

    //   <ProtectedRoute isAdmin={true} exact path="/admin/orders"  Component={OrderList}/>
    //   <ProtectedRoute isAdmin={true} exact path="/admin/order/:id"  Component={ProcessOrder}/>

    //   <ProtectedRoute isAdmin={true} exact path="/admin/users" Component={UsersList}/>
    //   <ProtectedRoute isAdmin={true} exact path="/admin/user/:id"  Component={UpdateUser}/>

    //   <ProtectedRoute isAdmin={true} exact path="/admin/reviews" Component={ProductReviews}/>

    //   <ProtectedRoute Component = { window.location.pathname === "/process/payment" ? null : NotFound}/>
    //   <Footer />
    // </Router>  
  

    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      
      <Routes>
        {/* Public Routes */}

        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Search/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/password/forgot" element={<ForgotPasswrd />} />
        <Route path="/password/reset/:token" element={<ResetPasswrd />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
    
        {/* Protected Routes (regular users) */}
        <Route path="/password/update" element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>} />
        <Route path="/login/shipping" element={<ProtectedRoute><Shipping /></ProtectedRoute>} />
        <Route path="/account" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/me/update" element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />
        <Route path="/success" element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />
        <Route path="/orders" element={<ProtectedRoute><MyOrders /></ProtectedRoute>} />
        <Route path="/orders/confirm" element={<ProtectedRoute><ConfirmOrder /></ProtectedRoute>} />
        <Route path="/order/:id" element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />
    
        {/* Payment route with Stripe */}
        {/* {stripeApiKey && (
          <Route 
            path="/process/payment" 
            element={
              <Elements stripe={loadStripe(stripeApiKey)}>
                <ProtectedRoute><Payment /></ProtectedRoute>
              </Elements>
            } 
          />
        )} */}
        {stripeApiKey ? (
  <Route 
    path="/process/payment" 
    element={
      <Elements stripe={loadStripe(stripeApiKey)}>
        <ProtectedRoute><Payment /></ProtectedRoute>
      </Elements>
    } 
  />
) : null}
    
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<ProtectedRoute isAdmin><Dashboard /></ProtectedRoute>} />
        <Route path="/admin/products" element={<ProtectedRoute isAdmin><ProductsList /></ProtectedRoute>} />
        <Route path="/admin/product" element={<ProtectedRoute isAdmin><NewProduct /></ProtectedRoute>} />
        <Route path="/admin/product/:id" element={<ProtectedRoute isAdmin><UpdateProduct /></ProtectedRoute>} />
        <Route path="/admin/orders" element={<ProtectedRoute isAdmin><OrderList /></ProtectedRoute>} />
        <Route path="/admin/order/:id" element={<ProtectedRoute isAdmin><ProcessOrder /></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute isAdmin><UsersList /></ProtectedRoute>} />
        <Route path="/admin/user/:id" element={<ProtectedRoute isAdmin><UpdateUser /></ProtectedRoute>} />
        <Route path="/admin/reviews" element={<ProtectedRoute isAdmin><ProductReviews /></ProtectedRoute>} />
    
        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </Router>

  );
}

export default App;