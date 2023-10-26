import React, { useEffect, useState } from "react";
import "./Index.css";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../../Services/Data";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import Card from "../../Services/Card";
import "animate.css";
import Hero from "./Hero";
import brandlogo1 from "../../assets/Images/brand-1.png";
import brandlogo2 from "../../assets/Images/brand-2.png";
import brandlogo3 from "../../assets/Images/brand-3.png";
import brandlogo4 from "../../assets/Images/brand-4.png";
import brandlogo5 from "../../assets/Images/brand-5.png";
import brandlogo6 from "../../assets/Images/brand-6.png";
import brandlogo7 from "../../assets/Images/brand-7.png";
import brandlogo8 from "../../assets/Images/brand-8.png";
import bannerimage1 from "../../assets/Images/banner-image-1.webp";
import bannerimage2 from "../../assets/Images/banner-image-2.webp";
import axios from "axios";
import { useProductContext } from "../../ProductContext/Productcontext";
const Home = ({ targetDate }) => {
  const navigate = useNavigate();
  const { products, isLoading } = useProductContext();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const slicedItems = products.slice(0, 4);
  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>AND SHOP </title>
      </Helmet>
      <div className="hero-section-ecommerce">
        <Hero />
      </div>

      <div
        class="section pb_20"
        data-section="lazyloadsection"
        id="section-template--15014696124572__163221682824ebec0b"
      >
        <div class="container pt-5 pb-5">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="single_banner">
                <img class="animated lazyload" src={bannerimage1} alt="" />
                <div class="single_banner_info">
                  <h5 class="single_bn_title1">Super Sale</h5>
                  <h3 class="single_bn_title">New Collection</h3>
                  <Link to="/store" class="single_bn_link">
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="single_banner">
                <img class="animated lazyload" src={bannerimage2} alt="" />
                <div class="single_banner_info">
                  <h3 class="single_bn_title">New Season</h3>
                  <h4 class="single_bn_title1">Sale 40% Off</h4>
                  <a to="/store" class="single_bn_link">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* products-section */}
      <div className="top-seller pb-5">
        <div className="container">
          <div className="row">
            <div className="seller-header pb-4">
              <h2>Top Seller</h2>
              <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
            </div>
            <div className="container">
              <div className="row">
                {slicedItems.map((items) => {
                  return <Card key={items.id} {...items} />;
                })}
              </div>
            </div>
          </div>
          <div className="text-center pt-3">
            <button
              onClick={() => navigate("/store")}
              class="theme-btn-one btn-overlay-dark btn_sm"
            >
              Load more...
            </button>
          </div>
        </div>
      </div>

      {/* Tshirt-Collection-section */}
      <div className="tshirt-collection">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-4 col-md-7 offset-md-4 col-sm-12 col-12">
              <div className="collection-timer">
                <ul>
                  <li>
                    <span>{timeRemaining.days}</span>Days
                  </li>
                  <li>
                    <span>{timeRemaining.hours}</span>Hours
                  </li>
                  <li>
                    <span>{timeRemaining.minutes}</span>Minutes
                  </li>
                  <li>
                    <span>{timeRemaining.seconds}</span>Seconds
                  </li>
                </ul>
                <div className="collection-text">
                  <h2>20% OFF FOR ALL T-SHIRT COLLECTION</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Porro quisquam, odit assumenda sit modi commodi esse
                    necessitatibus temporibus aperiam veritatis eveniet!
                  </p>
                  <button className="btn btn-outline-dark mt-3 hero-button">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Todays offers section */}
      <div className="todays-deal pb-5">
        <div className="container">
          <div className="row">
            <div className="seller-header pb-4">
              <h2>TODAY'S DEAL</h2>
              <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
            </div>
            {slicedItems.map((items) => {
              return <Card key={items.id} {...items} />;
            })}
          </div>
          <div className="text-center pt-3">
            <button
              onClick={() => navigate("/store")}
              class="theme-btn-one btn-overlay-dark btn_sm"
            >
              Load more...
            </button>
          </div>
        </div>
      </div>

      {/* brands logos */}
      <section className="pb-5">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="d-flex flex-wrap align-items-center text-center bg-white shadow">
                <div class="clients-logo">
                  <img class="img-fluid" src={brandlogo1} alt="Logo 0" />
                </div>
                <div class="clients-logo">
                  <img class="img-fluid" src={brandlogo2} alt="Logo 1" />
                </div>
                <div class="clients-logo">
                  <img class="img-fluid" src={brandlogo3} alt="Logo 2" />
                </div>
                <div class="clients-logo">
                  <img class="img-fluid" src={brandlogo4} alt="Logo 3" />
                </div>
                <div class="clients-logo">
                  <img class="img-fluid" src={brandlogo5} alt="Logo 4" />
                </div>
                <div class="clients-logo">
                  <img class="img-fluid" src={brandlogo6} alt="Logo 5" />
                </div>
                <div class="clients-logo">
                  <img class="img-fluid" src={brandlogo7} alt="Logo 6" />
                </div>
                <div class="clients-logo">
                  <img class="img-fluid" src={brandlogo8} alt="Logo 7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top-Offers-section */}
      <div className="offers">
        <div className="container">
          <div className="row">
            <div className=" offset-lg-4 col-md-4 col-sm-12 col-12">
              <div className="offers-text text-center">
                <h5>TRENDING</h5>
                <h2>New Fashion</h2>
                <p>
                  Consectetur adipisicing elit. Dolores nisi distinctio magni,
                  iure deserunt doloribus optio
                </p>
                <button className="shop" onClick={() => navigate("/shop")}>
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
