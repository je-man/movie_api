import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export class MovieView extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

//   refreshPage() {
//     window.location.reload(false);
//   }

  render() {
    const { movie } = this.props;

    if (!movie) return null;

    return (
      <div className="movie-view">
        <img className="movie-poster" style={{width: "300px", height: "400px"}} src={movie.ImagePath} />
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>

        <div className="movie-genre">
          {/* <span className="label">Genre: </span>
          <span className="value">{movie.Genre.Name}</span> */}
          <Link to={`movies/director/${movie.Director.Name}`}>
            <Button variant="link">Director</Button>
          </Link>
        </div>
        <div className="movie-director">
          {/* <span className="label">Director: </span>
          <span className="value">{movie.Director.Name}</span> */}
          <Link to={`movies/genres/${movie.Genre.Name}`}>
            <Button variant="link">Genre</Button>
          </Link>
        </div>
          <br></br>
        <button onClick={() => window.location.reload(false)}>back</button>

       </div>

        
    );
  }
}