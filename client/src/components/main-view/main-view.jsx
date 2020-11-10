import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route} from "react-router-dom";
//#0
import { setMovies } from '../../actions/actions';
import { LoginView } from '../login-view/login-view';
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
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProfileView } from '../profile-view/profile-view';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

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
        <Container className="main-view" fluid="true">
          {/* Nav start */}
          <Navbar sticky="top" expand="lg" className="mb-2 navbar-styles">
            <Navbar.Brand className="navbar-brand">
              <Link to={`/`}>Movie Escape</Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="bg-light"
            />
            <Navbar.Collapse
              className="justify-content-end navbar-light"
              id="basic-navbar-nav"
            >
              {!user ? (
                <ul>
                  <Link to={`/`}>
                    <Button variant="link">login</Button>
                  </Link>
                  <Link to={`/register`}>
                    <Button variant="link">Register</Button>
                  </Link>
                </ul>
              ) : (
                <ul>
                  <Link to={`/`}>
                    <Button variant="link" onClick={() => this.logOut()}>
                      Log out
                    </Button>
                  </Link>
                  <Link to={`/users/`}>
                    <Button variant="link">Account</Button>
                  </Link>
                  <Link to={`/`}>
                    <Button variant="link">Movies</Button>
                  </Link>
                </ul>
              )}
            </Navbar.Collapse>
          </Navbar>
          {/* Nav end */}
          <Route
            exact
            path="/"
            render={() => {
              if (!user)
                return (
                  <LoginView logInFunc={(user) => this.onLoggedIn(user)} />
                );
              return <MoviesList movies={movies} />;
            }}
          />
          <Route path="/register" render={() => <RegistrationView />} />
          <Route
            path="/movies/:movieId"
            render={({ match }) => (
              <MovieView
                movie={movies.find((m) => m._id === match.params.movieId)}
              />
            )}
          />
          <Route
            path="/movies/director/:name"
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
            path="/movies/genres/:name"
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

      // <div className="main-view">
      //   <Container>
      //     <Row>
          
      //       {selectedMovie
      //         ? <MovieView movie={selectedMovie}/>
      //         : movies.map(movie => (
      //           <Col> 
      //               <MovieCard key={movie._id} movie={movie} onClick={movie => this.onMovieClick(movie)}/>
      //           </Col>
      //         ))
      //       }
      //    </Row>
      //   </Container>
      // </div>
    );
  }
}

// #3
let mapStateToProps = state => {
  return { movies: state.movies }
}

// #4
export default connect(mapStateToProps, { setMovies } )(MainView);

