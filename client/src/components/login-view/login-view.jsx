import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login-view.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { setUsername } from "../../actions/actions";

function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /**
   * post the username and password to login
   * @function handleSubmit
   * @param {event}
   * @return {object} User information
   */

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
      <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4 login">
        <h4 className="py-2 text-truncate">Hey, good to see you again!</h4>
        <p>Log in to get going</p>
        <Form
          style={{ width: "100%", position: "relative" }}
          className="justify-content-center"
         >
          <Form.Group controlId="formBasicUsername">
            {/* <Form.Label>Username</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button className="loginButton" type="submit" onClick={handleSubmit}>
            Sign In
          </Button>
          <Link to={`/register`}>
            <Button className="registerButton" variant="link">Register</Button>
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