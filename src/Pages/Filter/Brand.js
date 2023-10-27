import React from "react";

const Brand = () => {
  return (
    <>
      <div class="shop_sidebar_boxed pt-5">
        <h4>Brand</h4>

        <label class="custom_boxed form-check-label " for="flexRadioDefault1">
          Next
          <input
            type="radio"
            checked="checked"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <span class="checkmark form-check-input"></span>
        </label>
        <label class="custom_boxed form-check-label">
          Adidas
          <input type="radio" name="flexRadioDefault" />
          <span class="checkmark form-check-input"></span>
        </label>
        <label class="custom_boxed form-check-label">
          Calvin Klein
          <input type="radio" name="flexRadioDefault" />
          <span class="checkmark form-check-input"></span>
        </label>
        <label class="custom_boxed form-check-label">
          Nike  
          <input type="radio" name="flexRadioDefault" />
          <span class="checkmark form-check-input"></span>
        </label>
        <label class="custom_boxed form-check-label">
          Geox
          <input type="radio" name="flexRadioDefault" />
          <span class="checkmark form-check-input"></span>
        </label>
        <label class="custom_boxed form-check-label">
          River Island
          <input type="radio" name="flexRadioDefault" />
          <span class="checkmark form-check-input"></span>
        </label>
        <div class="clear_button">
          <button class="theme-btn-one btn_sm btn-black-overlay mt-1">
            Clear Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default Brand;
