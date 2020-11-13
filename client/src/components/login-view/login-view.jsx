// import React, { useState } from 'react';
// import axios from 'axios';

// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";

// export function LoginView(props) {
//   const [ username, setUsername ] = useState('');
//   const [ password, setPassword ] = useState('');

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log(username, password);
//   //   /* Send a request to the server for authentication */
//   //   /* then call props.onLoggedIn(username) */
//   //   props.onLoggedIn(username);
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     /* Send a request to the server for authentication */
//     axios.post('https://ourflixapp.herokuapp.com/login', {
//       Username: username,
//       Password: password
//     })
//     .then(response => {
//       const data = response.data;
//       props.onLoggedIn(data);
//     })
//     .catch(e => {
//       console.log('no such user')
//     });
//   };

//   return (
//     <Container style={{ width: "22rem" }}>
//       <Form>
//         <Form.Group controlId="formBasicUsername">
//           <Form.Label>Username:</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter Username"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password:</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button type="button" onClick={handleSubmit}>
//           Login
//         </Button>

//         {/* <Form.Group controlId="newUser">
//           <Form.Text>
//             <Link to={`/register`}>
//               <Button id="registerButton">Sign Up!</Button>
//             </Link>
//             <h6> To access more features! </h6>
//           </Form.Text>
//         </Form.Group> */}
//       </Form>
//     </Container>
//   );
// }

import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import "./login-view.scss";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import axios from "axios";

import { setUsername } from "../../actions/actions";

// const mapStateToProps = (state) => {
//   const { user } = state;
//   return { user };
// };

function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const { user } = props;

  const handleSubmit = (e) => {
    // console.log("submit");
    // console.log(username, password);
    e.preventDefault();
    axios
      .post("https://ourflixapp.herokuapp.com/login", {
        Username: username,
        Password: password,
      })
      .then((response) => {
        const data = response.data;
        props.onLoggedIn(data);
        // // console.log("before");

        // props.setUsername(username);
        // // console.log("after");
      })
      .catch((e) => {
        console.log("No such user");
      });
  };

  return (
    <section id="cover" className="min-vh-100">
      <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
        <h1 className="display-4 py-2 text-truncate">Movie Escape</h1>
        <Form
          style={{ width: "100%", position: "relative" }}
          className="justify-content-center"
        >
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Sign In
          </Button>
          <Link to={`/register`}>
            <Button variant="link">Register</Button>
          </Link>
        </Form>
      </div>
    </section>
  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
};


export default connect(null, { setUsername })(LoginView);