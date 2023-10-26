import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faHeadset,
  faLock,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const Hero = ({ heroimages }) => {
  return (
    <>
      <div className="custom-swiper-container">
        <Swiper
          // className=""
          spaceBetween={50}
          slidesPerView={1}
          speed={1000}
          mousewheel={true}
          zoom={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Zoom, Pagination, Navigation]}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="hero-section-1">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="hero-section-heading ">
                      <h3>Best Products Collection</h3>
                      <h1>Final Sale For 2023</h1>
                      <div>
                        <Link to="/store" className="shop-now">
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-section-2">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="hero-section-heading">
                      <h3>Best Products Collection</h3>
                      <h1>Final Sale For 2023</h1>
                      <div>
                        <Link to="/store" className="shop-now">
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-section-3">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="hero-section-heading ">
                      <h3>Best Products Collection</h3>
                      <h1>Final Sale For 2023</h1>
                      <div>
                        <Link to="/store" className="shop-now">
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-section-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="hero-section-heading ">
                      <h3>Best Products Collection</h3>
                      <h1>Final Sale For 2023</h1>
                      <div>
                        <Link to="/store" className="shop-now">
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <section class="pt-5">
        <div class="container text-for-shipping">
          <div class="row">
            <div class="col-lg-3 col-sm-6 mt-3 mt-lg-0">
              <div class="d-flex justify-content-center">
                <div class="mr-2">
                  <FontAwesomeIcon
                    icon={faTruck}
                    className="text-primary"
                    size="lg"
                  />
                </div>
                <div className="ms-2">
                  <h5 class="mb-1">Free Shipping</h5>
                  <p class="mb-0">Writing result-oriented</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 mt-3 mt-lg-0">
              <div class="d-flex justify-content-center">
                <div class="mr-2">
                  <FontAwesomeIcon
                    icon={faHandHoldingDollar}
                    className="text-primary"
                    size="lg"
                  />
                </div>
                <div className="ms-2">
                  <h5 class="mb-1">Money Return</h5>
                  <p class="mb-0">Writing result-oriented</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 mt-3 mt-lg-0">
              <div class="d-flex justify-content-center">
                <div class="mr-2">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="text-primary"
                    size="lg"
                  />
                </div>
                <div className="ms-2">
                  <h5 class="mb-1">Secure Payment</h5>
                  <p class="mb-0">Writing result-oriented</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 mt-3 mt-lg-0">
              <div class="d-flex justify-content-center">
                <div class="mr-2">
                  <FontAwesomeIcon
                    icon={faHeadset}
                    className="text-primary"
                    size="lg"
                  />
                </div>
                <div className="ms-2">
                  <h5 class="mb-1">24/7 Support</h5>
                  <p class="mb-0">Writing result-oriented</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
