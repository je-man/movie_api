// import React, { useState } from "react";
// import axios from 'axios';

// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// // import "./registration-view.scss";

// import { Link } from "react-router-dom";

// export function RegistrationView(props) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [birthday, setBirthday] = useState("");

//   // const handleSubmit = () => {
//   //   console.log(username, password, birthday, email);
//   //   /* Send a request to the server for authentication */
//   //   /* then call props.onLoggedIn(username) */
//   //   props.logInFunc(username);
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const createdUser = {
//       Username: username,
//       Password: password,
//       Email: email,
//       Birthday: birthday,
//     };

//     axios
//       .post("https://ourflixapp.herokuapp.com/users", createdUser)
//       .then((response) => {
//         console.log(response);
//         console.log(response.data);
//         alert("User created successfully");
//         window.open("/client", "_self");
//       })
//       .catch((e) => {
//         console.log(e.response);
//         alert("Error processing request");
//       });
//   };


//   return (
//     <Form className="registration-form">
//       <Form.Group controlId="formBasicUsername">
//         <Form.Label>Username:</Form.Label>
//         <Form.Control
//           type="text"
//           value={username}
//           placeholder="Enter username"
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Password:</Form.Label>
//         <Form.Control
//           type="password"
//           value={password}
//           placeholder="Enter password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Birth Date:</Form.Label>
//         <Form.Control
//           type="string"
//           value={birthday}
//           placeholder="01/01/2001"
//           onChange={(e) => setBirthday(e.target.value)}
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Email:</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="name@example.com"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </Form.Group>
//       <Button
//         variant="btn-lg btn-dark btn-block"
//         type="submit"
//         onClick={handleSubmit}
//       >
//         Register
//       </Button>
//     </Form>
//   );
//}

import React, { useState } from 'react';
import axios from 'axios';
import { Form, Container, Button } from 'react-bootstrap';
//import './registration-view.scss';

import { Link } from 'react-router-dom';

export function RegistrationView() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const createdUser = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: dob,
    };

    axios
      .post('https://flixology.herokuapp.com/users', createdUser)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        alert('User created successfully');
        window.open('/client', '_self');
      })
      .catch((e) => {
        console.log(e.response);
        alert('Error processing request');
      });
  };

  return (
    <Container>
      <br />
      <br />
      <Form style={{ width: '32rem', margin: 'auto', textAlign: 'center' }}>
        <Form.Group controlId='formBasicUsername'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            value={email}
            placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicDate'>
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type='date'
            value={dob}
            placeholder='12/31/1986'
            onChange={(e) => setDob(e.target.value)}
          />
        </Form.Group>

        <Button variant='dark' type='submit' onClick={handleSubmit}>
          Submit
        </Button>
        <Link to={`/client`}>
          <Button variant='dark link' type='submit'>
            Cancel
          </Button>
        </Link>
      </Form>
    </Container>
  );
}