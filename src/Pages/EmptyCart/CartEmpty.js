import React from "react";
import { Link } from "react-router-dom";
import cartemptyimage from "../../assets/Images/empty-cart.1b7e73f.png";
import "./Index.css";
import { Helmet } from "react-helmet-async";

const CartEmpty = () => {
  return (
    <>
      <Helmet>
        <title>AND SHOP - Your Cart Is Empty..</title>
      </Helmet>
      <div className="empty-section">
        <div class="container">
          <div class="row text-center justify-content-center">
            <div class="col-6">
              <div class="empaty_cart_area">
                <img src={cartemptyimage} className="w-100" />{" "}
                <h2>YOUR CART IS EMPTY</h2>{" "}
                <p>Sorry Mate... No Item Found Inside Your Cart!</p>{" "}
                <Link to="/" class="btn btn-outline-dark btn_md">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartEmpty;
