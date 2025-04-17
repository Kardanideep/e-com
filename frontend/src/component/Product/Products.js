import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/Metadata";
import { useParams } from "react-router-dom";

const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();
  const { keyword } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 500000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  // const handleCategoryClick = (item) => {
  //   setCategory(item);
  //   setShowMobileFilters(false); // hide after selecting
  // };

  const handleCategoryClick = (item) => {
    setCategory((prev) => (prev === item ? "" : item));
    setShowMobileFilters(false); // Optional: close on mobile
  };
  
  
  // const handlePriceClick = (range) => {
  //   setPrice(range);
  //   setShowMobileFilters(false);
  // };

  const handlePriceClick = (range) => {
    setPrice((prev) =>
      prev[0] === range[0] && prev[1] === range[1] ? [0, 50000] : range
    );
    setShowMobileFilters(false);
  };
  
  
  // const handleRatingClick = (star) => {
  //   setRatings(star);
  //   setShowMobileFilters(false);
  // };

  const handleRatingClick = (star) => {
    setRatings((prev) => (prev === star ? 0 : star));
    setShowMobileFilters(false);
  };
  
   
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- QuickCard" />
          <div className="maindiv">
            <h2 className="productsHeading">Products</h2>

            <button
              className="mobileFilterToggle"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              Filters ☰
            </button>
            

            <div className="main">
              <div className="products">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>
            </div>

            <div className={`filterBox ${showMobileFilters ? "show" : "hide"}`}>
            {showMobileFilters && (
    <button className="closeMobileFilter" onClick={() => setShowMobileFilters(false)}>
      ✖ Close
    </button>
  )}
              <h2 className="name">Filters</h2>
              <hr></hr>
              <br></br>
              {/* <Typography> &#9673; Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={500000}
            /> */}
             
              {/* <Typography className="filterLabel"><h3> &#9673; Categories </h3></Typography> */}
              {/* <ul className="categoryBox">
                {categories.map((category) => (
                  <li
                    className="category-link"
                    key={category}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul> */}

               <p className="title"> &#9673; Categories </p>
              <ul className="categoryBox">
                {categories.map((item, index) => (
                  <li
                    key={index}
                    className={`categoryItem ${
                      category === item ? "active" : ""
                    }`}
                    onClick={() =>  handleCategoryClick(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <br></br>

              <div className="priceRangeBox">
                <p className="title"> &#9673; Price Range</p>
                <ul className="priceRangeList">
                  {[
                    [0, 10000],
                    [10001, 20000],
                    [20001, 30000],
                    [30001, 40000],
                    [40001, 50000],
                  ].map((range, index) => (
                    <li
                      key={index}
                      className={`priceRangeItem ${
                        price[0] === range[0] && price[1] === range[1]
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handlePriceClick(range)}
                    >
                      ₹{range[0].toLocaleString()} - ₹
                      {range[1].toLocaleString()}
                    </li>
                  ))}
                </ul>
              </div>

              {/* <fieldset> */}
              {/* <Typography> &#9673; Ratings</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="range-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              /> */}
              <div className="ratingsBox">
                <p className="title"> &#9673; Ratings</p>
                <ul className="ratingsList">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <li
                      key={star}
                      className={`ratingItem ${
                        ratings === star ? "active" : ""
                      }`}
                      onClick={() => handleRatingClick(star)}
                    >
                      {"⭐".repeat(star)} & Up
                    </li>
                  ))}
                </ul>
              </div>

              {/* </fieldset> */}
            </div>
            {resultPerPage < count && (
              <div className="paginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
