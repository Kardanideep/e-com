import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/Metadata";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (firstRender) {
      dispatch(getProduct());
      setFirstRender(false);
    }
  }, [dispatch, error, alert, firstRender]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="QuickCard" />

          <div className="banner">
            <p>Welcome to QuickCard</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
