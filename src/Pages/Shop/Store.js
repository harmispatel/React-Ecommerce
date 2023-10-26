import React, { useState } from "react";
import "./Store.css";
import Card from "../../Services/Card";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import PriceFilter from "../Filter/PriceFilter";
import Brand from "../Filter/Brand";
import Select from "react-select";
import SerchBar from "../Filter/SerchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useProductContext } from "../../ProductContext/Productcontext";
import { useFilterContext } from "../../FilterContext/Filtercontext";
const Store = () => {
  const { products, isLoading } = useProductContext();
  const { filter_products, sorting } = useFilterContext;

  console.log("Items--->", products);
  const [selectedOption, setSelectedOption] = useState(null);
  const [sortSelect, setSortSelect] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const options = [
    { value: "most_populer", label: "Most Popular" },
    { value: "best_seller", label: "Best Seller" },
    { value: "tranding", label: "Tranding" },
    { value: "featured", label: "Featured" },
  ];

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const handlesortselected = (sortSelect) => {
    console.log(sortSelect);
    setSortSelect(sortSelect);
  };

  const filteredProducts = products?.filter((products) => {
    if (products?.prodcutname?.toLowerCase().includes(search)) {
      return products;
    }
  });

  if (isLoading) {
    return <span>Loading....</span>;
  }

  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>AND SHOP - Store</title>
      </Helmet>
      <div className="pt-5 text-center pb-3">
        <h1>Browse the Store!</h1>
        <p>New Arrivals for you! Check out our selection of products.</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="shop-items">
              <div class="row justify-content-between">
                <div class="col-lg-2 col-md-12">
                  <div class="product_filter">
                    <div class="customs_selects">
                      <Select
                        value={selectedOption}
                        isClearable={true}
                        options={options}
                        class="customs_sel_box form-select"
                        placeholder="Filtering"
                        onChange={handleSelectChange}
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-12">
                  <div class="product_shot">
                    <div class="product_shot_title">
                      <p>Sort By:</p>
                    </div>
                    <div class="product_filter">
                      <form>
                        <label htmlFor="sort"></label>
                        <select name="sort" id="sort" onClick={sorting}>
                          <option value="popularity">Sort by Popularity</option>
                          <option value="new">Sort by new</option>
                          <option value="low">Price: low to high</option>
                          <option value="high">Price: high to low</option>
                        </select>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="filter-sidebar">
              <div class="shop_Search ">
                <form className="position-relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    class="form-control search-bar"
                    onChange={(e) => {
                      setSearch(e.target.value.toLowerCase());
                    }}
                  />
                  <button className="search-icon">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      size="xl"
                      className="serch-icons"
                    />
                  </button>
                </form>
              </div>
              <PriceFilter />
              <Brand />
            </div>
          </div>

          {filteredProducts ? (
            <div className="col-md-9">
              <div className="row">
                {filteredProducts.map((items) => {
                  return <Card {...items} />;
                })}
              </div>
            </div>
          ) : (
            <div class="loader">
              <span class="loader__element"></span>
              <span class="loader__element"></span>
              <span class="loader__element"></span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Store;
