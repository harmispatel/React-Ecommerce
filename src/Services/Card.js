import React, { useContext, useEffect, useState } from "react";
import CartContext from "../Context/Cart/CartContext";
import "../assets/Card.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WishlistContext from "../WishlistContext/WishlistContext";
import axios from "axios";
import { useProductContext } from "../ProductContext/Productcontext";

const Card = (items) => {
  const navigate = useNavigate();
  const { id, prodcutname, productprice, title, brand, imagePath } = items;
  const Email = localStorage.getItem("Email");
  const { products, isLoading } = useProductContext();

  const { addToCart, cart } = useContext(CartContext);
  const { addtoWishlist, wishlist } = useContext(WishlistContext);
  const isInCart = (product) => {
    return !!cart.find((item) => item.id === product.id);
  };
  const isInWishlist = (product) => {
    return !!wishlist.find((item) => item.id === product.id);
  };

  if (isLoading) {
    return <div>...Loading</div>;
  }

  const handleAddToCart = (product) => {
    addToCart(product);
    if (!isInCart(product)) {
      toast.success("Successfully Added !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
        transition: Flip,
      });
    } else {
      toast.info("Item is already in the cart.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
        transition: Flip,
      });
    }
  };

  const handleAddtoWishlist = (product) => {
    addtoWishlist(product);
    if (!isInWishlist(product)) {
      toast.success("Wishlist Successfully !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
        transition: Flip,
      });
    } else {
      toast.info("Item is already in the wishlist.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
        transition: Flip,
      });
    }
  };

  const handleAdd = () => {
    toast.info("please login to access cart", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 500,
      transition: Flip,
    });
    navigate("/login");
  };
  const handleWishlist = () => {
    toast.info("please login to access wishlist", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 500,
      transition: Flip,
    });
    navigate("/login");
  };

  return (
    <>
      <div className="col-md-3 col-lg-3 col-6">
        <div className="products-detail">
          <div class="product_wrappers_one">
            <div class="thumb position-relative" style={{ overflow: "hidden" }}>
              <Link to={`/detail/${id}`}>
                <img
                  src={imagePath + "?v=" + id}
                  alt={id}
                  class="inner-img w-100"
                />
              </Link>
              <span class="badges">
                <span class="new">{brand}</span>
              </span>
              {Email && (
                <span
                  className="wishlist-icon"
                  onClick={() => handleAddtoWishlist(products)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </span>
              )}
              {!Email && (
                <span className="wishlist-icon" onClick={handleWishlist}>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
              )}
              <div class="content">
                <h5 class="title text-capitalize">{prodcutname}</h5>
                <span class="price">
                  <span class="new">${productprice}</span>
                </span>
              </div>
              {Email && (
                <div className="text-center">
                  <button
                    className=" btn btn-success"
                    onClick={() => handleAddToCart(products)}
                  >
                    Add to cart
                  </button>
                </div>
              )}
              {!Email && (
                <div className="text-center">
                  <button className="btn btn-success" onClick={handleAdd}>
                    Add to cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
