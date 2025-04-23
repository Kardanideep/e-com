import "./ProductDetails.css";
import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../actions/productAction";
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/Metadata";
import { addItemsToCart } from "../../actions/cartAction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";
import { useParams } from "react-router-dom";

const ProductDetails = ({ match }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  const [zoom, setZoom] = useState(null);

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  //img 
  const [selectedIndex, setSelectedIndex] = useState(0);

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item Added To Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);

    dispatch(newReview(myForm));

    setOpen(false);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert, reviewError, success]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${product.name} -- QuickCard`} />
          <h3 className="Heading">{product.name} Details</h3>
          <div className="ProductDetails">
            <div>
              {/* <Carousel className="img">
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel> */}
              {/* <Carousel className="img">
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                      onClick={() => setSelectedImg(item.url)}
                      style={{ cursor: "pointer" }}
                    />
                  ))}
              </Carousel>

              {selectedImg && (
                <div
                  className="overlay"
                  onClick={() => setSelectedImg(null)}
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000,
                    cursor: "zoom-out",
                  }}
                >
                  <img
                    src={selectedImg}
                    alt="Zoomed"
                    style={{
                      maxWidth: "90%",
                      maxHeight: "90%",
                      borderRadius: "8px",
                    }}
                  /> */}
              {/* </div> */}
              {/* )} */}
              {/* Main Carousel */}
                {/* Main Carousel (controlled by selectedIndex) */}
         {/* ✅ Carousel with controlled active slide */}
           {/* Main Carousel (controlled by selectedIndex) */}
      <Carousel
        index={selectedIndex} // This will control the active slide
        onChange={(index) => setSelectedIndex(index)} // Updates the selected image
        indicators={false} // Remove default indicators
        navButtonsAlwaysVisible={true} // Show arrows always
        className="img"
      >
        {product.images?.map((item, i) => (
          <div key={i}>
            <img
              src={item.url}
              alt={`Slide ${i}`}
              onClick={() => setZoom(item.url)}
              style={{
                maxHeight: "500px",
                objectFit: "contain",
                borderRadius: "10px",
                width: "100%",
              }}
            />
          </div>
        ))}
      </Carousel>

      {/* Thumbnails below the carousel */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10px",
          flexWrap: "wrap",
        }}
      >
        {product.images?.map((item, i) => (
          <img
            key={i}
            src={item.url}
            alt={`Thumbnail ${i}`}
            onClick={() => setSelectedIndex(i)} // Update the main image on thumbnail click
            style={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "5px",
              cursor: "pointer",
              border: selectedIndex === i ? "2px solid #000" : "1px solid #ccc",
              boxShadow: selectedIndex === i ? "0 0 5px #000" : "none",
            }}
          />
        ))}
      </div>

              {/* Zoomed image overlay */}
              {zoom && (
                <div
                  className="overlay"
                  onClick={() => setZoom(null)} // ⬅️ Close overlay on click
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000,
                    cursor: "zoom-out",
                  }}
                >
                  <img
                    src={zoom}
                    alt="Zoomed"
                    style={{
                      maxWidth: "90%",
                      maxHeight: "90%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              )}
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <Rating {...options} />
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    disabled={product.stock < 1 ? true : false}
                    onClick={addToCartHandler}
                    className={`${product.stock < 1 ? "true" : "false"}`}
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status :
                  <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                    {product.stock < 1 ? " OutOfStock" : " InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>

              <button onClick={submitReviewToggle} className="submitReview">
                Submit Review
              </button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
