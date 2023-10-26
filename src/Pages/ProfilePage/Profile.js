// import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";
// import "./Index.css";
// import axios from "axios";
// import { Button, Col, Form, Modal, Row } from "react-bootstrap";

// const Profile = () => {
//   const [user, setUser] = useState({});
//   const Email = localStorage.getItem("Email");
//   const [showEdit, setShowEdit] = useState(false);
//   const [show, setShow] = useState(false);
//   const [userData, setUserData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     number: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
//   };

//   const EditData = () => {
//     axios
//       .get("http://localhost:3078/users")
//       .then((res) => {
//         const EditUserData = res.data.find(
//           (EditDatas) => EditDatas?.user?.email === Email
//         );
//         setUserData(EditUserData);
//         console.log("EditUserData", EditUserData);
//       })
//       .catch((err) => console.log(err));
//   };

//   const getData = () => {
//     axios
//       .get("http://localhost:3078/users")
//       .then((response) => {
//         const userData = response.data.find(
//           (userData) => userData?.user?.email === Email
//         );
//         setUser(userData);
//         console.log("USerData", userData);
//       })
//       .catch((error) => console.log(error));
//   };

//   const UpdatedData = () => {
//     axios
//       .put("http://localhost:3078/users" )
//       .then((response) => {
//         const updateddata = response.data.find(
//           (updates) => updates?.user?.email === Email
//         );
//         setUserData(updateddata);
//         console.log("Updated data", updateddata);
//       })
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     getData();
//     EditData();
//     // UpdatedData();
//   }, []);
//   const handleClose = () => {
//     setShow(false);
//     setShowEdit(false);
//   };
//   const handleEdit = () => {
//     setShowEdit(true);
//     console.log("Ok");
//   };

//   return (
//     <>
//       <Helmet>
//         <title>AND SHOP - Profile</title>
//       </Helmet>
//       <section>
//         <div className="profile-section">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6 offset-md-3">
//                 <div className="dashboard_content">
//                   <div class="myaccount-content">
//                     <h4 class="title">Account details</h4>
//                     <div class="login_form_container">
//                       <div class="account_details_form">
//                         <form>
//                           <div class="default-form-box mb-20">
//                             <label for="fname">Username</label>
//                             <h4 className="form-control">
//                               {user?.user?.username}
//                             </h4>
//                           </div>
//                           <div class="default-form-box mb-20">
//                             <label for="fname">email</label>
//                             <h4 className="form-control">
//                               {user?.user?.email}
//                             </h4>
//                           </div>
//                           <div class="default-form-box mb-20">
//                             <label for="fname">phone</label>
//                             <h4 className="form-control">
//                               {user?.user?.number}
//                             </h4>
//                           </div>
//                           <div class="default-form-box mb-20">
//                             <label for="fname">Address</label>
//                             <h2 className="form-control">
//                               {user?.user?.address}
//                             </h2>
//                           </div>
//                           <div class="save_button mt-3">
//                             <button
//                               type="button"
//                               class="btn btn-outline-dark"
//                               onClick={() => handleEdit()}
//                             >
//                               Edit
//                             </button>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Modal
//           className="form_intent"
//           centered
//           show={showEdit}
//           onHide={handleClose}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Edit Profile</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             <Form>
//               <Form.Group as={Col} className="mb-2" controlId="formGridState">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control
//                   name="username"
//                   placeholder="Enter Your Name"
//                   defaultValue={user?.user?.username}
//                   onChange={(e) => handleChange(e)}
//                 />
//               </Form.Group>

//               <Form.Group as={Col} className="mb-2" controlId="formGridState">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   name="email"
//                   placeholder="Enter Your Email"
//                   defaultValue={user?.user?.email}
//                   onChange={(e) => handleChange(e)}
//                 />
//               </Form.Group>

//               <Form.Group as={Col} className="mb-2" controlId="formGridState">
//                 <Form.Label>Phone</Form.Label>
//                 <Form.Control
//                   name="number"
//                   disabled
//                   placeholder="Enter Your Phone"
//                   defaultValue={user?.user?.number}
//                   onChange={(e) => handleChange(e)}
//                 />
//               </Form.Group>

//               <Form.Group as={Col} className="mb-2" controlId="formGridZip">
//                 <Form.Label>Address</Form.Label>
//                 <Form.Control
//                   name="address"
//                   placeholder="Enter Your Address"
//                   defaultValue={user?.user?.address}
//                   onChange={(e) => handleChange(e)}
//                 />
//               </Form.Group>

//               <div className="text-center pt-4">
//                 <Button variant="primary" type="submit">
//                   Update
//                 </Button>
//               </div>
//             </Form>
//           </Modal.Body>
//         </Modal>
//       </section>
//     </>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Index.css";
import axios from "axios";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  const Email = localStorage.getItem("Email");
  const [showEdit, setShowEdit] = useState(false);
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    number: "",
    address: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const EditData = () => {
    axios
      .get("http://localhost:3078/users")
      .then((res) => {
        const EditUserData = res.data.find(
          (EditDatas) => EditDatas?.user?.email === Email
        );
        setUserData(EditUserData);
        console.log("EditUserData", EditUserData);
      })
      .catch((err) => console.log(err));
  };

  const getData = () => {
    axios
      .get("http://localhost:3078/users")
      .then((response) => {
        const userData = response.data.find(
          (userData) => userData?.user?.email === Email
        );
        setUser(userData);
        console.log("USerData", userData);
      })
      .catch((error) => console.log(error));
  };

  const UpdatedData = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3078/users")
      .then((response) => {
        const updateddata = response.data.find(
          (updates) => updates?.user?.email === Email
        );
        // setUserData(updateddata);
        console.log("Updated data", updateddata);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
    EditData();
    // UpdatedData();
  }, []);
  const handleClose = () => {
    setShow(false);
    setShowEdit(false);
  };
  const handleEdit = () => {
    setShowEdit(true);
    console.log("Ok");
  };

  return (
    <>
      <Helmet>
        <title>AND SHOP - Profile</title>
      </Helmet>
      <section>
        <div className="profile-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="dashboard_content">
                  <div class="myaccount-content">
                    <h4 class="title">Account details</h4>
                    <div class="login_form_container">
                      <div class="account_details_form">
                        <form>
                          <div class="default-form-box mb-20">
                            <label for="fname">Username</label>
                            <h4 className="form-control">
                              {user?.user?.username}
                            </h4>
                          </div>
                          <div class="default-form-box mb-20">
                            <label for="fname">email</label>
                            <h4 className="form-control">
                              {user?.user?.email}
                            </h4>
                          </div>
                          <div class="default-form-box mb-20">
                            <label for="fname">phone</label>
                            <h4 className="form-control">
                              {user?.user?.number}
                            </h4>
                          </div>
                          <div class="default-form-box mb-20">
                            <label for="fname">Address</label>
                            <h2 className="form-control">
                              {user?.user?.address}
                            </h2>
                          </div>
                          <div class="save_button mt-3">
                            <button
                              type="button"
                              class="btn btn-outline-dark"
                              onClick={() => handleEdit()}
                            >
                              Edit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          className="form_intent"
          centered
          show={showEdit}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onClick={UpdatedData}>
              <Form.Group as={Col} className="mb-2" controlId="formGridState">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="username"
                  placeholder="Enter Your Name"
                  defaultValue={user?.user?.username}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-2" controlId="formGridState">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  placeholder="Enter Your Email"
                  defaultValue={user?.user?.email}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-2" controlId="formGridState">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  name="number"
                  disabled
                  placeholder="Enter Your Phone"
                  defaultValue={user?.user?.number}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-2" controlId="formGridZip">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  placeholder="Enter Your Address"
                  defaultValue={user?.user?.address}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <div className="text-center pt-4">
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
};

export default Profile;
