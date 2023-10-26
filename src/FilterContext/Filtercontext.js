import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "../ProductContext/Productcontext";
import reducer from "../FilterContext/Filterreducer";
const Filtercontext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  sorting_value: "popularity",
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  console.log("filter_products --->", products);

  const [state, dispatch] = useReducer(reducer, initialState);

  //SORT DROPDOWN FUNCTION
  const sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" });
  };

  useEffect(() => {
    console.log("hiii");
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [state.sorting_value]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <Filtercontext.Provider value={{ ...state, sorting }}>
      {children}
    </Filtercontext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(Filtercontext);
};
