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
import Badge from 'react-bootstrap/Badge';

import './profile-view.scss';
import ProfilePic from './profile.png';

// font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

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
    return date;
  }


  /**
   * gets user information to display
   * @param {number} token 
   * @return {object} user's information
   */
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

  /**
   * remove movie from user's list of favorites
   * @param {number} movie
   * @function removeFavorite 
   */
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

  /**
   * deletes the current user information from the database
   * @function handleDelete
   */
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
     
      <Container className="profileView">
        <div className="profileName">
          <img src={ProfilePic} />
          <h3>Hi,  {this.state.username}</h3>
          <hr className='hr-color' />
          <div className="row">
            <div className="col">
                <div className="profile-social text-center">
                  <a href="https://www.youtube.com" clLinkssNLinkme="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                  </a>
                  <a href="https://www.facebook.com" className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a href="https://www.twitter.com" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="https://www.instagram.com" className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
              </div>
            </div>
          </div>
        </div>

        <h5 className="text-center">Profile Details</h5>
        <Row  className="userProfile">
          <Col>
            <Form style={{ width: "30rem", float: "left" }}>
                <Form.Group controlId="formBasicUsername">
                  <h6>Username: </h6>
                  <Form.Label>{this.state.username}</Form.Label>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <h6>Email:</h6>
                  <Form.Label>{this.state.email}</Form.Label>
                </Form.Group>
                <Form.Group controlId="formBasicDate">
                  <h6>Date of Birth:</h6>
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
      
      <div className="favorites">
        <h5 className="text-center">Favorite Movies</h5>
        <Container>
          <Row  className="favoriteMovies">
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
          </Row>
        </Container>
      </div>
    </Container>
    );
  }
}