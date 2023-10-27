import React, { useState } from "react";
import footerlogo from "../../assets/Images/Navbar-Logo.png";
import payment from "../../assets/Images/payment.d633c89.png";
import { Link } from "react-router-dom";
import "./Index.css";
import {
  faFacebookF,
  faGooglePlusG,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState([]);
  const [emailErr, setEmailErr] = useState();
  const [sendMail, setSendEmail] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.length > 0) {
      setEmailErr("Please enter your email");
      toast.info("Please enter valid email", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
      });
    } else {
      setEmailErr("");
      setEmail("");
      toast.success("Email sent successfully", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
      });
      localStorage.setItem("E-Mail", JSON.stringify(email));
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="footer-left">
                <Link to="/">
                  <img src={footerlogo} className="footer-logo" />
                </Link>
                <p className="pt-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati culpa assumenda voluptas placeat amet consectetur
                  adipisicing elit. Obcaecati culpa assumenda voluptas placeat.
                </p>
                <div className="ftr-left">
                  <ul>
                    <li>
                      <Link style={{ color: "black" }}>
                        <FontAwesomeIcon icon={faFacebookF} size="lg" />
                      </Link>
                    </li>
                    <li>
                      <Link style={{ color: "black" }}>
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                      </Link>
                    </li>
                    <li>
                      <Link style={{ color: "black" }}>
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                      </Link>
                    </li>
                    <li>
                      <Link style={{ color: "black" }}>
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                      </Link>
                    </li>
                    <li>
                      <Link style={{ color: "black" }}>
                        <FontAwesomeIcon icon={faGooglePlusG} size="lg" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="ftr-2">
                <h3>INFORMATION</h3>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/faq">Frequently Questions</Link>
                  </li>
                  <li>
                    <Link to="/tracking-order">Order Tracking</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 col-12">
              <div className="ftr-2">
                <h3>YOUR ACCOUNT</h3>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/tracking-order">Order Tracking</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="ftr-2">
                <h3 className="pb-3">NEWSLETTER</h3>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Your Mail*"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ position: "relative" }}
                    className="form-control"
                  />
                  {!email.length > 0 ? (
                    <span style={{ color: "red", position: "absolute" }}>
                      {emailErr}
                    </span>
                  ) : (
                    ""
                  )}

                  {/* <div className="pt-2">
                    {sendMail ? (
                      <button name="subscribe" class="theme-btn-one btn-md">
                        <i class="icon-cursor"></i> Sending...
                      </button>
                    ) : ( */}
                  <button name="subscribe" class="theme-btn-one btn-md">
                    <i class="icon-cursor"></i> Send Mail
                  </button>
                  {/* )}
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ftr-payment">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="copyright">
                <h6>
                  © CopyRight 2021 <span>AndShop</span>
                </h6>
              </div>
            </div>
            <div className="col-md-6">
              <div className="copy-image">
                <img src={payment} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
