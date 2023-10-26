import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faCirclePlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../Context/Cart/CartContext";
import "./Card.css";

const CartItems = ({ product, index }) => {
  const { removeitems, increase, decrease } = useContext(CartContext);
  const totalprice = product?.price * product?.quantity;
  console.log("Size", product.sizing);
  return (
    <>
      <tbody>
        <tr>
          <td class="index">
            <h4>{index + 1}</h4>
          </td>
          <td class="product_thumb">
            <img src={product?.images} alt="img" height={100} />
          </td>
          <td class="product_name">
            <h5>{product?.name}</h5>
          </td>
          <td class="product-price">${product?.price}</td>
          {/* <td class="product-price">{product?.size.value}</td> */}
          <td class="product_quantity">
            <FontAwesomeIcon
              icon={faCircleMinus}
              size="xl"
              onClick={() => decrease(product)}
            />
            <label className="quantity">{product.quantity}</label>
            <FontAwesomeIcon
              icon={faCirclePlus}
              size="xl"
              onClick={() => increase(product)}
            />
          </td>
          <td class="product-price">${totalprice.toFixed(2)}</td>
          <td class="product_remove">
            <FontAwesomeIcon
              icon={faTrashCan}
              size="lg"
              onClick={() => removeitems(product)}
              className="text-danger"
            />
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default CartItems;
