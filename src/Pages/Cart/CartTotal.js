import React, { useContext } from "react";
import "./CartTotal.css";
import CartContext from "../../Context/Cart/CartContext";
import { useNavigate } from "react-router-dom";

const CartTotal = () => {
  const { ClearCart, handleCheckout, itemCount, total } =
    useContext(CartContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div class="col-lg-4 col-md-12">
            <div class="coupon_code left">
              <h3>Coupon</h3>
              <div class="coupon_inner">
                <p>Enter your coupon code if you have one.</p>
                <div>
                  <input
                    placeholder="Coupon code"
                    type="text"
                    class="form-control"
                  />
                  <button type="submit" class="theme-btn-one btn-outline-dark">
                    Apply coupon
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-12">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              class="coupon_code right"
            >
              <h3>Cart Total</h3>
              <div class="coupon_inner">
                <div class="cart_subtotal">
                  <p>Total Items:</p> <p class="cart_amount">{itemCount}</p>
                </div>
                <div class="cart_subtotal">
                  <p>Subtotal</p> <p class="cart_amount">{total}</p>
                </div>
                <div class="cart_subtotal border-bottom">
                  <p>Shipping Charges</p>
                  <p class="cart_amount">
                    <span>Flat Rate:</span> $255.00
                  </p>
                </div>

                <div class="cart_subtotal pt-3">
                  <p>Total</p> <p class="cart_amount">{total}</p>
                </div>
                <div class="checkout_btn pt-3">
                  <button
                    class="theme-btn-one btn-overlay-dark btn_lg"
                    onClick={() => navigate("/checkout")}
                  >
                    CheckOut
                  </button>
                </div>
                <div class="checkout_btn pt-3">
                  <button
                    onClick={handleCheckout}
                    class="theme-btn-one btn-overlay-dark btn_lg"
                  >
                    CheckOut
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default CartTotal;
