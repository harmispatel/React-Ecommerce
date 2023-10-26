import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Index.css";
import { Helmet } from "react-helmet-async";
import WishlistContext from "../../WishlistContext/WishlistContext";
import WishlistItems from "./WishlistItems";

const Wishlist = ({ product, index }) => {
  const { wishlist } = useContext(WishlistContext);
  return (
    <>
      <Helmet>
        <title>AND SHOP - Wishlist items </title>
      </Helmet>
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-text">
                <h2>Wishlist</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item items">Wishlist</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-5 pb-5">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="table_desc">
              <div class="table_page table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th class="product_thumb">Index No.</th>
                      <th class="product_thumb">Image</th>
                      <th class="product_name">Product Name</th>
                      <th class="product-price">Price</th>
                      <th class="product-price">Stock Status</th>
                      <th class="product_total">Remove</th>
                    </tr>
                  </thead>
                  {wishlist.map((product, index) => (
                    <WishlistItems
                      key={product.id}
                      product={product}
                      index={index}
                    />
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
