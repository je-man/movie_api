import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route} from "react-router-dom";
//#0
import { setMovies } from '../../actions/actions';
import  LoginView  from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import MoviesList from '../movies-list/movies-list';
import { MovieView } from '../movie-view/movie-view';
import { GenreView } from "../genre-view/genre-view";
import { DirectorView } from "../director-view/director-view";
import { RegistrationView } from '../registration-view/registration-view';
import UpdateView from '../update-view/update-view';
import './main-view.scss';
import { About } from '../header/about';
import { Contact } from '../header/contact';
import { LandingPage } from '../header/landing-page';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProfileView } from '../profile-view/profile-view';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

class MainView extends React.Component {
  constructor() {
    // Call the superclass constructor
    // so React can initialize it
    super();

    // Initialize the state to an empty object so we can destructure it later
    // this.state = {
    //   movies: null,
    //   selectedMovie: null,
    //   user: null
    // };

    this.state = {
      user: null
    };

  }


  // One of the "hooks" available in a React Component
  componentDidMount() {
    // axios.get('https://ourflixapp.herokuapp.com/movies')
    //   .then(response => {
    //     // Assign the result to the state
    //     this.setState({
    //       movies: response.data
    //     });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    this.setState({
      user: null,
    });
  }

  onMovieClick(movie){
    this.setState({
      selectedMovie: movie
    });
  }

  // onLoggedIn(user) {
  //   this.setState({
  //     user
  //   });
  onLoggedIn(authData) {
    this.setState({
      user: authData.user.Username
    });
  
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  getMovies(token) {
    axios.get('https://ourflixapp.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      // #1
      this.props.setMovies(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    // If the state isn't initialized, this will throw on runtime
    // before the data is initially loaded
     // #2
    let { movies } = this.props;
    let { user } = this.state;

   //if(!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    // Before the movies have been loaded
    if (!movies) return <div className="main-view"/>;

    return (
      <Router basename="/client">
        <Container className="main-view site-header" fluid="true">
          <Navbar expand="lg" className="main">
          <Navbar.Brand className="navbar-brand">
              <Link to={`/`}>Movie Escape</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                {!user ? (
                  <ul>
                    <Link to={`/login`}>
                      <Button variant="link">login</Button>
                    </Link>
                    <Link to={`/register`}>
                      <Button variant="link">Register</Button>
                    </Link>
                  </ul>
                ) : (
                  <Nav className="">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Movies</Nav.Link>
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            <Link to={`/users/`}>
                                <Button variant="link">Account</Button>
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            <Link to={`/`}>
                                <Button variant="link">Movies</Button>
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            <Link to={`/`}>
                                <Button variant="link" onClick={() => this.logOut()}>
                                    Log out
                                </Button>
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                  </Nav>
                )}
            </Navbar.Collapse>
          </Navbar>
          {/* Nav end */}

          {/* <Jumbotron>
            <h1>Online Cinema</h1>
            <p>
              This is a simple hero unit
            </p>
            <p>
              <Button variant="primary">Watch now</Button>
            </p>
          </Jumbotron> */}

          
          <Route
            exact
            path="/"
            render={() => {
              if (!user)
                return (
                  <LandingPage/>
                );
              return <MoviesList movies={movies} />;
            }}
          />

          <Route path="/register" render={() => <RegistrationView />} />
          <Route path="/login" render={() => {
              if (!user)
                return (
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  //<LoginView logInFunc={(user) => this.onLoggedIn(user)} />
                );
              return <MoviesList movies={movies} />;
            }} />
          <Route
            path="/movies/:movieId"
            render={({ match }) => (
              <MovieView
                movie={movies.find((m) => m._id === match.params.movieId)}
              />
            )}
          />

          <Route
            path="/director/:name"
            render={({ match }) => {
              return (<DirectorView
                director={movies.find(
                  (m) => m.Director.Name === match.params.name
                ).Director}
                // movies={movies}
                // addToFavourites={() => addToFavourites(movie)}
              />
              );
            }}
          />

          <Route
            path="/genres/:name"
            render={({ match }) => {
              return (<GenreView
                genre={movies.find((m) => m.Genre.Name === match.params.name)}
                movies={movies}
                addToFavourites={() => addToFavourites(movie)}
              />
              );
            }}
          />
          <Route
            path="/users/"
            render={() => (
              <ProfileView movies={movies} logOutFunc={() => this.logOut()} />
            )}
          />
          <Route path="/Update/:name" render={() => <UpdateView />} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Container>
      </Router>
    );
  }
}

// #3
let mapStateToProps = state => {
  return { movies: state.movies }
}

// #4
export default connect(mapStateToProps, { setMovies } )(MainView);

