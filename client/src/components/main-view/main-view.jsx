import React from 'react';
import axios from 'axios';

import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import './main-view.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default class MainView extends React.Component {
  constructor() {
    // Call the superclass constructor
    // so React can initialize it
    super();

    // Initialize the state to an empty object so we can destructure it later
    this.state = {
      movies: null,
      selectedMovie: null,
      user: null
    };

  }


  // One of the "hooks" available in a React Component
  componentDidMount() {
    axios.get('https://ourflixapp.herokuapp.com/movies')
      .then(response => {
        // Assign the result to the state
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onMovieClick(movie){
    this.setState({
      selectedMovie: movie
    });
  }

  onLoggedIn(user) {
    this.setState({
      user
    });
  }


  render() {
    // If the state isn't initialized, this will throw on runtime
    // before the data is initially loaded
    const { movies, selectedMovie, user } = this.state;

    if(!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    // Before the movies have been loaded
    if (!movies) return <div className="main-view"/>;

    return (
      <div className="main-view">
        <Container>
          <Row>
          
            {selectedMovie
              ? <MovieView movie={selectedMovie}/>
              : movies.map(movie => (
                <Col> 
                    <MovieCard key={movie._id} movie={movie} onClick={movie => this.onMovieClick(movie)}/>
                </Col>
              ))
            }
         </Row>
        </Container>
      </div>
    );
  }
}


  //  <Container>
  //     <Row>
  //       <Col>1 of 3</Col>
  //     </Row>
  //   </Container>