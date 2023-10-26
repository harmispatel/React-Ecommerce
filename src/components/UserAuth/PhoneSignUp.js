import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import OTPInput from "react-otp-input";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Swal from "sweetalert2";

const PhoneSignUp = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    onCaptchVerify();
  }, []);

  function onCaptchVerify() {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
      callback: (response) => {
        sendOtp();
      },
    });
  }

  const sendOtp = (e) => {
    e.preventDefault();

    const formatPh = `${phoneNumber}`;
    const appVerifier = window.recaptchaVerifier;

    axios
      .post("http://localhost:3078/users", {
        phone: formatPh,
      })
      .then((res) => {
        const auth = getAuth();
        signInWithPhoneNumber(auth, formatPh, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setShow(true);
            toast.success("OTP has been sent");  
            Swal.fire({
              title: "OTP has been sent",
              icon: "success",
              timer: 1000,
              showConfirmButton: false,
            });
            console.log("OTP has been sent");
          })
          .catch((err) => {
            console.log("SMS not sent", err);
            toast.error("Something went wrong");
            setTimeout(() => {
              window.location.reload(true);
            }, 2000);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOtpVerification = (e) => {
    e.preventDefault();

    const code = otp;
    console.log("OTP Code:", code);

    window.confirmationResult
      .confirm(code)
      .then((result) => {
        if (result) {
          localStorage.setItem("phone", phoneNumber);
          navigate("/");
          toast.success("Login Successfully...");
        }
      })
      .catch((error) => {
        console.error("Verification failed:", error);
        toast.error("OTP Wrong!!");
        setOtp("");
      });
  };

  return (
    <section className="login">
      <div className="login_main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="login_inr">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="login_info">
                      <div className="login_info_inr">
                        <div className="login_info_inr_title">
                          <h3>Welcome</h3>
                        </div>
                        <div id="recaptcha-container">
                          {show === false && (
                            <>
                              <form onSubmit={sendOtp}>
                                <div className="form-group my-3">
                                  <PhoneInput
                                    international
                                    countryCallingCodeEditable={false}
                                    defaultCountry="IN"
                                    className="form-control phone_input"
                                    value={phoneNumber}
                                    onChange={setPhoneNumber}
                                    placeholder="Enter Your Phone Number"
                                  />
                                </div>
                                <div className="d-flex justify-content-between text-center align-items-center">
                                  {show === true ? (
                                    <>
                                      <button
                                        id="sign-in-button"
                                        type="submit"
                                        className="btn btn-outline-warning"
                                        disabled
                                      >
                                        Send OTP
                                      </button>
                                    </>
                                  ) : (
                                    <button
                                      id="sign-in-button"
                                      type="submit"
                                      className="btn btn-outline-warning"
                                    >
                                      Send OTP
                                    </button>
                                  )}
                                </div>
                              </form>
                            </>
                          )}

                          {show === true && (
                            <>
                              <form onSubmit={handleOtpVerification}>
                                <div className="form-group my-3 otp_box">
                                  <OTPInput
                                    value={otp}
                                    className="form-control"
                                    onChange={setOtp}
                                    shouldAutoFocus={true}
                                    numInputs={6}
                                    renderSeparator={<span>-</span>}
                                    renderInput={(props) => (
                                      <input {...props} />
                                    )}
                                  />
                                </div>
                                <div className="d-flex justify-content-between">
                                  <button
                                    id="sign-in-button"
                                    type="submit"
                                    className="btn btn-outline-warning"
                                  >
                                    Verfy OTP
                                  </button>
                                  <button
                                    id="sign-in-button"
                                    type="button"
                                    onClick={sendOtp}
                                    className="btn btn-outline-warning"
                                  >
                                    Resend OTP
                                  </button>
                                </div>
                              </form>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneSignUp;
