import React from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './movie-view.scss';
import axios from "axios";
import PropTypes from 'prop-types';

export class MovieView extends React.Component {

  /**
   * add movie to the favorite list
   * @param {*} movie 
   */
  addFavorite(movie) {
    let token = localStorage.getItem("token");
    let url =
      "https://ourflixapp.herokuapp.com/users/" +
      localStorage.getItem("user") +
      "/Movies/" +
      movie._id;
      alert('You have added ' + movie.Title + ' to your favorites');
    console.log(token);

    axios
      .post(url, "", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        window.open("/client/movies/" + movie._id , "_self");
      });
  }


  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { movie } = this.props;

    if (!movie) return null;

    return (
      <Card className ="movieView-card" style={{ width: '30rem' }}>
      <Card.Img  className="movie-poster" src={movie.ImagePath} />
      <Card.Body className="movieView-body">
        <Card.Title className="movieView-title">
            <span className="label"></span>
            <span className="value">{movie.Title}</span>
            <Link>
              <Button className="float-right" variant="card dark link" onClick={() => this.addFavorite(movie)}>
                  Add to favorites
              </Button>
            </Link> 
        </Card.Title>
        <Card.Text className="movie-description">
          {/* <span className="label">Description: </span> */}
          <span className="value">{movie.Description}</span>
        </Card.Text>
        <div className="movie-genre">
          {/* <span className="label">Genre: </span>
          <span className="value">{movie.Genre.Name}</span> */}
          <Link to={`/director/${movie.Director.Name}`}>
            <Badge>Director: {movie.Director.Name}</Badge>
          </Link>
        </div>
        <div className="movie-director">
          {/* <span className="label">Director: </span>
          <span className="value">{movie.Director.Name}</span> */}
          <Link to={`/genres/${movie.Genre.Name}`}>
            <Badge>Genre : {movie.Genre.Name} </Badge>
          </Link>
        </div>
          <br></br>
        <div>
          <Link to={`/`}>
            <Badge>Home</Badge>
          </Link>
        </div>
      </Card.Body>
    </Card>
    );
  }
}



