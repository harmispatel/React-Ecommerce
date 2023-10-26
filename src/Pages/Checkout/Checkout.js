import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";
import Address from "../Address/Address";

const Checkout = () => {
  return (
    <>
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-text">
                <h2>Checkout</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item items">Checkout</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="checkout-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <Address />
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="order_review box-shadow bg-white">
                <div class="check-heading">
                  <h3>Your Orders</h3>
                </div>
                <div class="table-responsive order_table">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Product</th> <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Blue Dress For Woman
                          <span class="product-qty">x 2</span>
                        </td>
                        <td>$90.00</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>SubTotal</th>
                        <td class="product-subtotal">$349.00</td>
                      </tr>
                      <tr>
                        <th>Shipping</th> <td>Free Shipping</td>
                      </tr>
                      <tr>
                        <th>Total</th>
                        <td class="product-subtotal">$349.00</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div class="order_review bg-white">
                <div class="check-heading">
                  <h3>Payment</h3>
                </div>
                <div class="payment_method">
                  <div class="payment_option">
                    <div class="custome-radio">
                      <input
                        required="required"
                        type="radio"
                        name="payment_option"
                        id="exampleRadios3"
                        value="option3"
                        checked="checked"
                        class="form-check-input"
                      />
                      <label for="exampleRadios3" class="form-check-label">
                        Direct Bank Transfer
                      </label>
                      <p data-method="option3" class="payment-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration.
                      </p>
                    </div>
                    <div class="custome-radio">
                      <input
                        type="radio"
                        name="payment_option"
                        id="exampleRadios4"
                        value="option4"
                        class="form-check-input"
                      />
                      <label for="exampleRadios4" class="form-check-label">
                        Check Payment
                      </label>
                      <p data-method="option4" class="payment-text">
                        Please send your cheque to Store Name, Store Street,
                        Store Town, Store State / County, Store Postcode.
                      </p>
                    </div>
                    <div class="custome-radio">
                      <input
                        type="radio"
                        name="payment_option"
                        id="exampleRadios5"
                        value="option5"
                        class="form-check-input"
                      />
                      <label for="exampleRadios5" class="form-check-label">
                        Paypal
                      </label>
                      <p data-method="option5" class="payment-text">
                        Pay via PayPal; you can pay with your credit card if you
                        don't have a PayPal account.
                      </p>
                    </div>
                  </div>
                </div>
                <button class="theme-btn-one btn-black-overlay btn_sm">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
