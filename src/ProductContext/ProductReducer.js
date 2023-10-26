const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "API_DATA":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_DETAILS_LOADING":
      return {
        ...state,
        isdetailsloading: true,
      };
    case "DETAILS_DATA":
      return {
        ...state,
        isdetailsloading: false,
        details: action.payload,
      };
    case "DETAILS_API_ERROR":
      return {
        ...state,
        isdetailsloading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default ProductReducer;
