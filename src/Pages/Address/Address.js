// import React, { useMemo, useState } from "react";
// import Select from "react-select";
// import countryList from "react-select-country-list";
// import axios from "axios";
// import "./Index.css";

// const Address = () => {
//   const [value, setValue] = useState("");
//   const [countryerror, setCountryError] = useState("");
//   const options = useMemo(() => countryList().getData(), []);
//   const [address, setAddress] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     phone: "",
//     fulladdress: "",
//     zipcode: "",
//     state: "",
//     notes: "",
//   });

//   const [error, setError] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     phone: "",
//     fulladdress: "",
//     zipcode: "",
//     state: "",
//     notes: "",
//   });
//   const handlechange = (e) => {
//     setAddress({ ...address, [e.target.name]: e.target.value });
//   };

//   const changeHandler = (value) => {
//     setValue(value);
//   };

//   const addressdata = {
//     firstname: address.firstname,
//     lastname: address.lastname,
//     email: address.email,
//     phone: address.phone,
//     fulladdress: address.fulladdress,
//     zipcode: address.zipcode,
//     state: address.state,
//     notes: address.notes,
//     value: value,
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     if (
//       !address.firstname ||
//       !address.lastname ||
//       !address.email ||
//       !address.phone ||
//       !address.fulladdress ||
//       !value ||
//       !address.zipcode ||
//       !address.state ||
//       !address.notes
//     ) {
//       setError({
//         firstname: "Please enter your firstname",
//         lastname: "Please enter your lastname",
//         email: "Please enter your email",
//         phone: "Please enter your number",
//         zipcode: "Please enter your zipcode",
//         fulladdress: "Please enter your full address",
//         state: "Please select your state",
//         notes: "Please enter your note",
//       });
//       setCountryError("Please select your country");
//     } else {
//       axios
//         .post("http://localhost:3078/user-adress", addressdata)
//         .then((res) => console.log(res.data))
//         .catch((err) => console.log(err));
//       setAddress({
//         firstname: "",
//         lastname: "",
//         email: "",
//         phone: "",
//         zipcode: "",
//         fulladdress: "",
//         state: "",
//         notes: "",
//       });
//       setValue("");
//       setError({
//         firstname: "",
//         lastname: "",
//         email: "",
//         phone: "",
//         zipcode: "",
//         fulladdress: "",
//         state: "",
//         notes: "",
//       });
//       setCountryError("");

//       console.log("Address", address);
//     }
//   };
//   return (
//     <>
//       <form onClick={(e) => handleClick(e)}>
//         <div class="checkout-area-bg bg-white">
//           <div class="check-heading">
//             <h3>Billing Information</h3>
//           </div>
//           <div class="check-out-form">
//             <div class="row">
//               <div class="col-lg-6 col-md-12 col-sm-12 col-12">
//                 <div class="form-group">
//                   <label for="fname">First name</label>
//                   <input
//                     type="text"
//                     id="fname"
//                     name="firstname"
//                     placeholder="First name *"
//                     class="form-control"
//                     value={address.firstname}
//                     onChange={(e) => handlechange(e)}
//                   />
//                   {address.firstname.length > 0 ? (
//                     ""
//                   ) : (
//                     <span>{error.firstname}</span>
//                   )}
//                 </div>
//               </div>
//               <div class="col-lg-6 col-md-12 col-sm-12 col-12">
//                 <div class="form-group">
//                   <label for="lname">Last name</label>
//                   <input
//                     type="text"
//                     id="lastname"
//                     name="lastname"
//                     placeholder="Last name *"
//                     class="form-control"
//                     value={address.lastname}
//                     onChange={(e) => handlechange(e)}
//                   />
//                   {address.lastname.length > 0 ? (
//                     ""
//                   ) : (
//                     <span>{error.lastname}</span>
//                   )}
//                 </div>
//               </div>
//               <div class="col-lg-6 col-md-12 col-sm-12 col-12">
//                 <div class="form-group">
//                   <label>
//                     Email Address <span></span>
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="info@gmail.com"
//                     class="form-control"
//                     value={address.email}
//                     onChange={(e) => handlechange(e)}
//                   />
//                   {address.email.length > 0 ? "" : <span>{error.email}</span>}
//                 </div>
//               </div>
//               <div class="col-lg-6 col-md-12 col-sm-12 col-12">
//                 <div class="form-group">
//                   <label>
//                     Phone <span></span>
//                   </label>
//                   <input
//                     type="number"
//                     id="phone"
//                     name="phone"
//                     placeholder="00000 - 00000"
//                     class="form-control"
//                     value={address.phone}
//                     onChange={(e) => handlechange(e)}
//                   />
//                   {address.phone.length > 0 ? "" : <span>{error.phone}</span>}
//                 </div>
//               </div>
//               <div class="col-lg-12 col-md-12 col-sm-12 col-12">
//                 <div class="form-group">
//                   <label for="faddress">Full Address</label>
//                   <input
//                     type="text"
//                     id="faddress"
//                     placeholder="Enter your address here.."
//                     class="form-control"
//                     name="fulladdress"
//                     value={address.fulladdress}
//                     onChange={(e) => handlechange(e)}
//                   />
//                   {address.fulladdress.length > 0 ? (
//                     ""
//                   ) : (
//                     <span>{error.fulladdress}</span>
//                   )}
//                 </div>
//               </div>
//               <div class="col-lg-6 col-md-12 col-sm-12 col-12">
//                 <div class="form-group">
//                   <label for="zip">Zip-Code</label>
//                   <input
//                     type="number"
//                     id="zip"
//                     placeholder="Enter Your zipcode"
//                     class="form-control"
//                     name="zipcode"
//                     value={address.zipcode}
//                     onChange={(e) => handlechange(e)}
//                   />
//                   {address.zipcode.length > 0 ? (
//                     ""
//                   ) : (
//                     <span>{error.zipcode}</span>
//                   )}
//                 </div>
//               </div>
//               <div class="col-lg-6 col-md-12 col-sm-12 col-12">
//                 <div class="form-group">
//                   <label for="city">State/City</label>
//                   <select
//                     id="city"
//                     class="form-control first_null"
//                     name="state"
//                     value={address.state}
//                     onChange={(e) => handlechange(e)}
//                   >
//                     <option value="">Select an option...</option>
//                     <option value="AX">Aland Islands</option>
//                     <option value="AF">Afghanistan</option>
//                   </select>
//                   {address.state.length > 0 ? "" : <span>{error.state}</span>}
//                 </div>
//               </div>

//               <div class="col-lg-12 col-md-12 col-sm-12 col-12">
//                 <div class="form-group">
//                   <label for="countryname">Country</label>
//                   <Select
//                     options={options}
//                     value={value}
//                     onChange={(e) => changeHandler(e)}
//                     isClearable="true"
//                     isSearchable="true"
//                     class="form-control country-dropdown"
//                   />
//                   {value ? "" : <span>{countryerror}</span>}
//                 </div>
//               </div>

//               <div class="col-lg-12 col-md-12 col-sm-12 col-12">
//                 <div class="form-group">
//                   <label for="messages">Additional Notes</label>
//                   <textarea
//                     rows="5"
//                     id="messages"
//                     placeholder="Order notes"
//                     name="notes"
//                     value={address.notes}
//                     onChange={(e) => handlechange(e)}
//                     class="form-control"
//                   ></textarea>
//                   {address.notes.length > 0 ? "" : <span>{error.notes}</span>}
//                 </div>
//               </div>
//               <div class="col-lg-12 col-md-12 col-sm-12 col-12">
//                 <div>
//                   <button class="btn btn-outline-dark">Save Address</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default Address;

import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./Index.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#yourAppElement");
const Address = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const address = (e) => {
    e.preventDefault(e);
    console.log("Done");
    setIsOpen(false);
  };

  return (
    <>
      <div className="py-5">
        <button onClick={openModal} className="btn btn-outline-dark">
          Open Modal
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button className="btn btn-success" onClick={address}>
              Save
            </button>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default Address;
