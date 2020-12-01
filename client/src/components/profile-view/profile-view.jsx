import axios from 'axios';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import UpdateView from '../update-view/update-view';

import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from 'react-bootstrap/Badge'
import './profile-view.scss';

export class ProfileView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      dob: "",
      favoriteMovies: [],
      movies: "",
    };
  }

  componentDidMount() {
    //authentication
    const accessToken = localStorage.getItem('token');
    this.getUser(accessToken);
  }

  formatDate(date) {
    if (date) date = date.substring(0, 10);
    // d = d.setDate(d.getDate() + 1);

    // var month = "" + (d.getMonth() + 1),
    //   day = "" + d.getDate(),
    //   year = d.getFullYear();

    // if (month.length < 2) month = "0" + month;
    // if (day.length < 2) day = "0" + day;

    // return [year, month, day].join("-");
    return date;
  }



  getUser(token) {
    //console.log(localStorage.getItem("user"));
    let url =
      "https://ourflixapp.herokuapp.com/users/" +
      localStorage.getItem("user");
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        //console.log(response);
        this.setState({
          username: response.data.Username,
          password: response.data.Password,
          email: response.data.Email,
          dob: this.formatDate(response.data.Birthday),
          favoriteMovies: response.data.FavoriteMovies,
        });
      });
  }

  removeFavorite(movie) {
    let token = localStorage.getItem("token");
    let url =
      "https://ourflixapp.herokuapp.com/users/" +
      localStorage.getItem("user") +
      "/Movies/" +
      movie._id;
    axios
      .delete(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        this.componentDidMount();
      });
      alert('Remove ' + movie.Title + ' from your favorites');
  }

  handleDelete() {
    if (!confirm("Are you sure?")) return;
    let token = localStorage.getItem("token");
    let url =
      "https://ourflixapp.herokuapp.com/users/" + this.state.username;
    axios
      .delete(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response));

    localStorage.removeItem("token");
    // localStorage.removeItem("user");
    window.open("/client", "_self");
  }

  
  render() {
    const { movies } = this.props;
    // this.getUser(localStorage.getItem("token"));
    const favoriteMovieList = movies.filter((movie) => {
      return this.state.favoriteMovies.includes(movie._id);
    });
    // console.log(favoriteMovieList);

    if (!movies) alert("Please sign in");
    return (
      // <div className="userProfile">
      //     <Form style={{ width: "30rem", float: "left" }}>
      //       <h1 style={{ textAlign: "center" }}>Profile Details</h1>
      //       <Form.Group controlId="formBasicUsername">
      //         <h3>Username: </h3>
      //         <Form.Label>{this.state.username}</Form.Label>
      //       </Form.Group>
      //       <Form.Group controlId="formBasicEmail">
      //         <h3>Email:</h3>
      //         <Form.Label>{this.state.email}</Form.Label>
      //       </Form.Group>
      //       <Form.Group controlId="formBasicDate">
      //         <h3>Date of Birth:</h3>
      //         <Form.Label>{this.state.dob}</Form.Label>
      //       </Form.Group>
      //       {
      //         <Link to={`/update/${this.state.username}`}>
      //           <Button variant="primary" type="link">
      //             Edit
      //           </Button>
      //         </Link>
      //       }
      //       <Button variant="danger" onClick={() => this.handleDelete()}>
      //         Delete User
      //       </Button>
      //       <Link to={`/`}>
      //         <Button variant="light" type="submit">
      //           Back
      //         </Button>
      //       </Link>
      //     </Form>
      
      //     <div
      //       className="favoriteMovies"
      //       style={{
      //         float: "right",
      //         textAlign: "center",
      //         width: "28rem",
      //       }}
      //     >
      //       <h1>Favorite Movies</h1>
      //       {favoriteMovieList.map((movie) => {
      //         return (
      //           <div key={movie._id}>
      //             <Card>
      //               <Card.Body>
      //                 <Link to={`/movies/${movie._id}`}>
      //                   {/* <Card.Title>{movie.Title}</Card.Title> */}
      //                   <Card.Img className='text-left img card-img' src={movie.ImagePath}/>
      //                 </Link>
      //               </Card.Body>
      //             </Card>
      //             <Button onClick={() => this.removeFavorite(movie)}>
      //               Remove
      //             </Button>
      //           </div>
      //         );
      //       })}
      //     </div>
      // </div>

      <Container>
        <Row className="userProfile">
          <Col>
              <Form style={{ width: "30rem", float: "left" }}>
                  <h4 style={{ textAlign: "center" }}>Profile Details</h4>
                  <Form.Group controlId="formBasicUsername">
                    <h5>Username: </h5>
                    <Form.Label>{this.state.username}</Form.Label>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <h5>Email:</h5>
                    <Form.Label>{this.state.email}</Form.Label>
                  </Form.Group>
                  <Form.Group controlId="formBasicDate">
                    <h5>Date of Birth:</h5>
                    <Form.Label>{this.state.dob}</Form.Label>
                  </Form.Group>
                  {
                    <Link to={`/update/${this.state.username}`}>
                      <Badge type="link">
                        Edit
                      </Badge>
                    </Link>
                  }
                  <Badge onClick={() => this.handleDelete()}>
                    Delete User
                  </Badge>
                  <Link to={`/`}>
                    <Badge type="submit">
                      Back
                    </Badge>
                  </Link>
                </Form>
          </Col>
        </Row>
      
      <Row className="favoriteMovies">
        <Col>
          <h4>Favorite Movies</h4>
          {favoriteMovieList.map((movie) => {
              return (
              <div key={movie._id}>
                  <Card style={{ width: '15rem' }}>
                    <Card.Body>
                        <Link to={`/movies/${movie._id}`}>
                        {/* <Card.Title>{movie.Title}</Card.Title> */}
                        <Card.Img className='img card-img' src={movie.ImagePath}/>
                        </Link>
                    </Card.Body>
                  </Card>
                  <Badge onClick={() => this.removeFavorite(movie)}>
                       Remove
                  </Badge>
              </div>
              );
          })}
        </Col>
      </Row>
    </Container>
    );
  }
}