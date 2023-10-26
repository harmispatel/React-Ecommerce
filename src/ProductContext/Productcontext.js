import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./ProductReducer";

const AppContext = createContext();

const API = "http://localhost:3078/products";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  isdetailsloading: false,
  details: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // PRODUCTS GET FUNCTIONS
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      console.log(res);
      const products = await res.data;
      dispatch({ type: "API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // PRODUCTS DETAILS FUNCTION
  const productsdetails = async (url) => {
    dispatch({ type: "SET_DETAILS_LOADING" });
    try {
      const res = await axios.get(url);
      console.log(res);
      const singledetails = await res.data;
      dispatch({ type: "DETAILS_DATA", payload: singledetails });
    } catch (error) {
      dispatch({ type: "DETAILS_API_ERROR" });
    }
  };
  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state, productsdetails }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };
