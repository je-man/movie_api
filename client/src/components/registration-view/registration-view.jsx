import React, { useState } from "react";
import axios from 'axios';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./registration-view.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  // const handleSubmit = () => {
  //   console.log(username, password, birthday, email);
  //   /* Send a request to the server for authentication */
  //   /* then call props.onLoggedIn(username) */
  //   props.logInFunc(username);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const createdUser = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    axios
      .post("https://ourflixapp.herokuapp.com/users", createdUser)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        alert("User created successfully");
        window.open("/client", "_self");
      })
      .catch((e) => {
        console.log(e.response);
        alert("Error processing request");
      });
  };


  return (
    <Container className="float-cont">
        <Form className="registration-form">
          <h4>Tell us about yourself</h4>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Birth Date:</Form.Label>
            <Form.Control
              type="string"
              value={birthday}
              placeholder="01/01/2001"
              onChange={(e) => setBirthday(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="btn-lg btn-dark btn-block"
            type="submit"
            onClick={handleSubmit}
          >
            Register
          </Button>
        </Form>
    </Container>
  );
}