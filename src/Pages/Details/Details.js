import React, { useContext, useEffect, useState } from "react";
import "./Detail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faCircleMinus,
  faCirclePlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";
import { Flip, ToastContainer, toast } from "react-toastify";
import CartContext from "../../Context/Cart/CartContext";
import WishlistContext from "../../WishlistContext/WishlistContext";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import Carousel from "react-multi-carousel";

const Details = () => {
  const API = "http://localhost:3078/products";
  const { id } = useParams();
  const Email = localStorage.getItem("Email");
  const [select, setSelect] = useState();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart, increase, decrease, cart } = useContext(CartContext);

  const isInCart = (product) => {
    return !!cart.find((item) => item.id === product.id);
  };
  const isInWishlist = (product) => {
    return !!wishlist.find((item) => item.id === product.id);
  };

  const { addtoWishlist, wishlist } = useContext(WishlistContext);
  // console.log(product.name);
  const colormode = () => {
    // console.log("Clicked");
  };
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [selectedValue, setSelectedValue] = useState("");
  console.log(selectedValue);
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
  const navigate = useNavigate();
  const handleAdd = () => {
    toast.info("please login to access cart", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 500,
    });
    navigate("/login");
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

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  const navigateLightbox = (step) => {
    const newIndex =
      (currentImageIndex + step + multipleimages.length) %
      multipleimages.length;
    setCurrentImageIndex(newIndex);
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProductDetails(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!productDetails) {
    return <div>Product not found</div>;
  }

  const {
    prodcutname,
    productdescription,
    imagePath,
    multipleimages,
    productprice,
  } = productDetails;
  console.log(id);
  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>AND SHOP - {prodcutname}</title>
      </Helmet>
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-text">
                <h2>Details Page</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item items">Detail</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-12">
              <div>
                {imagePath?.length === 0 ? (
                  <img src={imagePath} className="w-100" />
                ) : (
                  <div className="details_slider">
                    <Carousel
                      infinite={true}
                      swipeable={true}
                      autoPlay
                      keyBoardControl={true}
                      containerClass="carousel-container"
                      draggable={false}
                      showDots={true}
                      autoPlaySpeed={3000}
                      responsive={responsive}
                    >
                      {multipleimages?.map((itemsimages, index) => (
                        <div key={index} onClick={() => openLightbox(index)}>
                          <img
                            src={itemsimages.path}
                            className="w-100"
                            alt={`product Image ${index}`}
                          />
                        </div>
                      ))}
                    </Carousel>
                    {lightboxOpen && (
                      <div className="custom-lightbox">
                        <div className="custom_lightbox_inr">
                          <span
                            className="close-button"
                            onClick={closeLightbox}
                          >
                            <FontAwesomeIcon icon={faXmark} size="lg" />
                          </span>
                          <img
                            className="zoom-image w-25"
                            src={multipleimages[currentImageIndex]}
                            alt={`prodcuts-images ${currentImageIndex}`}
                          />
                          <div className="lightbox-navigation">
                            <button
                              className="btn"
                              onClick={() => navigateLightbox(-1)}
                            >
                              <FontAwesomeIcon
                                icon={faArrowLeftLong}
                                style={{ height: "20px", width: "20px" }}
                              />
                            </button>
                            <button
                              className="btn"
                              onClick={() => navigateLightbox(1)}
                            >
                              <FontAwesomeIcon
                                icon={faArrowRightLong}
                                style={{ height: "20px", width: "20px" }}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div class="col-lg-8 col-12">
              <div class="product_details_right_one">
                <div class="modal_product_content_one">
                  <h3 class="text-capitalize">{prodcutname}</h3>
                  <div class="reviews_rating">
                    {[...Array(5)].map((star, index) => {
                      index += 1;
                      return (
                        <button
                          type="button"
                          key={index}
                          className={index <= (hover || rating) ? "on" : "off"}
                          onClick={() => setRating(index)}
                          onMouseEnter={() => setHover(index)}
                          onMouseLeave={() => setHover(rating)}
                        >
                          <span className="star">&#9733;</span>
                        </button>
                      );
                    })}
                  </div>
                  <h4>
                    $ {productprice}
                    <del>$2890</del>
                  </h4>
                  <p style={{ maxWidth: "50%", textAlign: "justify" }}>
                    {productdescription}
                  </p>
                  <div class="customs_selects">
                    <select
                      name="product"
                      class="customs_sel_box"
                      value={selectedValue}
                      onChange={handleSelectChange}
                    >
                      <option selected disabled="true">
                        -- Sizing --
                      </option>
                      <option value="s">S</option>
                      <option value="m">M</option>
                      <option value="l">L</option>
                    </select>
                  </div>
                  <div class="variable-single-item d-flex pt-3">
                    <div>
                      <span style={{ fontWeight: "800" }}>Select Color</span>
                      <ul class="color-variant d-flex pt-2" onClick={colormode}>
                        <li>
                          <a
                            class="yellow"
                            style={{ backgroundColor: "yellow" }}
                          ></a>
                        </li>
                        <li>
                          <a
                            class="white"
                            style={{ backgroundColor: "black" }}
                          ></a>
                        </li>
                        <li>
                          <a
                            class="pink active"
                            style={{ backgroundColor: "pink" }}
                          ></a>
                        </li>
                        <li>
                          <a
                            class="pink active"
                            style={{ backgroundColor: "blue" }}
                          ></a>
                        </li>
                        <li>
                          <a
                            class="pink active"
                            style={{ backgroundColor: "green" }}
                          ></a>
                        </li>
                      </ul>
                    </div>

                    <div className="product-qun">
                      <td class="product_quantity">
                        <FontAwesomeIcon
                          icon={faCircleMinus}
                          size="xl"
                          onClick={() => decrease(productDetails)}
                        />
                        <label className="quantity">1</label>{" "}
                        <FontAwesomeIcon
                          icon={faCirclePlus}
                          size="xl"
                          onClick={() => increase(productDetails)}
                        />
                      </td>
                    </div>
                  </div>
                  <div class="links_Product_areas d-flex">
                    <div>
                      <button
                        title="Wishlist"
                        class="theme-btn-one btn-black-overlay btn_sm"
                        onClick={() => handleAddtoWishlist(productDetails)}
                      >
                        <FontAwesomeIcon icon={faHeart} />
                        &nbsp;Add To Wishlist
                      </button>
                    </div>
                    {Email && (
                      <button
                        className="theme-btn-one btn-black-overlay btn_sm ms-3"
                        onClick={() => handleAddToCart(productDetails)}
                      >
                        Add to cart
                      </button>
                    )}

                    {!Email && (
                      <div>
                        <button
                          className="theme-btn-one btn-black-overlay btn_sm ms-3"
                          onClick={handleAdd}
                        >
                          Add to cart
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
