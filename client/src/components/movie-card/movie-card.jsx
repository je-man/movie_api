// import React from 'react';
// import PropTypes from 'prop-types';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Link } from "react-router-dom";

// export class MovieCard extends React.Component {
//   render() {
//     // This is given to the <MovieCard/> component by the outer world
//     // which, in this case, is `MainView`, as `MainView` is what’s
//     // connected to your database via the movies endpoint of your API
//     const { movie, onClick } = this.props;

//     // return (
//     //   <div onClick={() => onClick(movie)} className="movie-card">{movie.Title}</div>
//     return (
//         <Card style={{ width: '16rem' }}>
//           <Card.Img variant="top" src={movie.ImagePath} />
//           <Card.Body>
//             <Card.Title>{movie.Title}</Card.Title>
//             <Card.Text>{movie.Description}</Card.Text>
//             <Link to={`/movies/${movie._id}`}>
//               <Button variant="primary">Open</Button>
//             </Link>
//           </Card.Body>
//         </Card>
//     );
//   }
// }

// MovieCard.propTypes = {
//     movie: PropTypes.shape({
//         Title: PropTypes.string.isRequired,
//         Description: PropTypes.string.isRequired,
//         ImagePath: PropTypes.string.isRequired,
//         Genre: PropTypes.shape({
//             Name: PropTypes.string.isRequired,
//             Description: PropTypes.string.isRequired
//         })
//     }).isRequired,
//     onClick: PropTypes.func.isRequired
// };

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Row, Col, Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import '/index.scss';
import './movie-card.scss';

import { Link } from 'react-router-dom';
import axios from "axios";

export class MovieCard extends React.Component {
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
        window.open("/client", "_self");
      });
  }

  render() {
    const { movie } = this.props;

    return (
      <Card style={{ width: '50%' }}>
        <Col>
          <Card.Body>
            <Card.Header className='text-center'>
              <Link className='link-color' to={`/movies/${movie._id}`}>
                <strong>{movie.Title}</strong>
              </Link>
            </Card.Header>

            <Row>
              <Col sm={6}>
                <br />
                <Card.Img
                  className='text-left img'
                  src={movie.ImagePath}
                />
              </Col>
              <Col sm={6}>
                <br />
                <Card.Text className='text-center'>
                  {movie.Description}
                </Card.Text>
                <br />
                <Link to={`/movies/${movie._id}`}>
                  <Button variant='card dark link'>Open</Button>
                </Link>
                <Link>
                  <Button variant="card dark link" onClick={() => this.addFavorite(movie)}>
                    Add Favorite
                  </Button>
                </Link> 
              </Col>
              <br />
            </Row>
          </Card.Body>
        </Col>
      </Card>
  
    );
  }
}