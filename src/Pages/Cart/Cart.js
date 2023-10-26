import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Card.css";
import { Helmet } from "react-helmet-async";
import CartEmpty from "../EmptyCart/CartEmpty";
import CartItems from "./CartItems";
import CartContext from "../../Context/Cart/CartContext";
import CartTotal from "./CartTotal";
import Checkout from "../Checkout/Checkout";
const Cart = () => {
  const { cart, checkout, ClearCart } = useContext(CartContext);

  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>AND SHOP - Cart</title>
      </Helmet>

      {checkout && (
        <>
          <Checkout />
        </>
      )}
      <div>
        {cart?.length === 0 ? (
          <>
            <div>
              <CartEmpty />
            </div>
          </>
        ) : (
          <>
            <div className="about-section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="hero-text">
                      <h2>Cart</h2>
                      <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                          <li class="breadcrumb-item">
                            <Link to="/">Home</Link>
                          </li>
                          <li class="breadcrumb-item items">Cart</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container pt-5">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="table_desc">
                    <div class="table_page table-responsive">
                      <table className="table m-0 ">
                        <thead>
                          <tr>
                            <th class="product_thumb">Index No.</th>
                            <th class="product_thumb">Image</th>
                            <th class="product_name">Product Name</th>
                            <th class="product-price">Price</th>
                            <th class="product-price">Size</th>
                            <th class="product_quantity">Quantity</th>
                            <th class="product_quantity">Total price</th>
                            <th class="product_total">Remove</th>
                          </tr>
                        </thead>
                        {cart.map((product, index) => (
                          <CartItems
                            key={product.id}
                            product={product}
                            index={index}
                            // className="position-absolute"
                          />
                        ))}
                      </table>
                    </div>
                  </div>
                  <div className="text-right">
                    <button
                      onClick={ClearCart}
                      className="theme-btn-one btn-overlay-dark btn_lg"
                    >
                      ClearCart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div>{cart.length > 0 && <CartTotal />}</div>
    </>
  );
};

export default Cart;
