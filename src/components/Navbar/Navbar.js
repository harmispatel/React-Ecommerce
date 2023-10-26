import React, { useContext, useEffect, useState } from "react";
import "./Index.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import navbarlogo from "../../assets/Images/Navbar-Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { Flip, ToastContainer, toast } from "react-toastify";
import CartContext from "../../Context/Cart/CartContext";
import WishlistContext from "../../WishlistContext/WishlistContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const [user, setUser] = useState();
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const Email = localStorage.getItem("Email");

  const handleLogout = () => {
    localStorage.removeItem("Email");
    setIsLoggedOut(true);
    navigate("/login");
    toast.success(`See you again.. ${user?.user?.username}`, {
      autoClose: 500,
      transition: Flip,
    });
  };
  const getData = () => {
    axios
      .get("http://localhost:3078/users")
      .then((response) => {
        const userData = response.data.find(
          (userName) => userName?.user?.email === Email
        );
        setUser(userData);
        // console.log("userName", user?.user?.username);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <ToastContainer />
      <header className="header-navbar sticky-top">
        <div className="container navbar-header">
          <nav class="navbar navbar-expand-lg  navbar-light p-md-0">
            <div class="andshop-navbar">
              <Link to="/" className="navbar-logo">
                <img
                  src={navbarlogo}
                  alt="nav-logo"
                  clasnavbar-brand
                  fw-bold
                  className="header-logo"
                />
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/store" className="nav-link">
                      Store{" "}
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link to="/about" className="nav-link">
                      About{" "}
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="nav-last">
                <ul className="d-flex">
                  {Email && (
                    <>
                      <li className="username">
                        {/* <button type="submit" className="btn btn-outline-dark"> */}
                        <span> Hello! {user?.user?.username} </span>
                        {/* </button> */}
                      </li>
                      <li className="cart-icon">
                        <Link to="/wishlist">
                          <FontAwesomeIcon
                            icon={faHeart}
                            size="lg"
                            className="text-dark"
                          />
                          {wishlist.length > 0 && (
                            <span className="item-count">
                              {wishlist.length}
                            </span>
                          )}
                        </Link>
                      </li>
                      <li className="cart-icon">
                        <Link to="/cart">
                          <FontAwesomeIcon
                            icon={faBagShopping}
                            size="lg"
                            className="text-dark"
                          />
                          {cart.length > 0 && (
                            <span className="item-count">{cart.length}</span>
                          )}
                        </Link>
                      </li>
                      <li>
                        <div class="dropdown">
                          <button
                            class="dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <FontAwesomeIcon icon={faUser} size="lg" />
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <Link to="profile" class="dropdown-item">
                                Profile
                              </Link>
                            </li>
                            <li>
                              <Link to="orders" class="dropdown-item">
                                Order
                              </Link>
                            </li>
                            <li>
                              <Link to="address" class="dropdown-item">
                                Address
                              </Link>
                            </li>
                            <li>
                              <Link
                                class="dropdown-item"
                                onClick={handleLogout}
                              >
                                Signout
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </>
                  )}
                  {!Email && (
                    <li>
                      <Link to="login">
                        <FontAwesomeIcon
                          icon={faUser}
                          size="lg"
                          className="text-dark"
                        />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Navbar;
