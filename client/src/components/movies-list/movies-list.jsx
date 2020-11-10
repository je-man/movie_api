// import React from 'react';
// import { connect } from 'react-redux';
// import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
// import { MovieCard } from '../movie-card/movie-card';

// const mapStateToProps = state => {
//   const { visibilityFilter } = state;
//   return { visibilityFilter };
// };

// function MoviesList(props) {
//   // const { movies} = props;

  

//   // if (!movies) return <div className='main-view' />;

//   // return (
//   //   <div className='movies-list'>
//   //     {movies.map((m) => (
//   //       <MovieCard key={m._id} movie={m} />
//   //     ))}
//   //   </div>
//   // );

//   const { movies, visibilityFilter } = props;
//   let filteredMovies = movies;

//   if (visibilityFilter !== '') {
//     filteredMovies = movies.filter(m => m.Title.includes(visibilityFilter));
//   }

//   if (!movies) return <div className="main-view"/>;

//   return (
//     <div className="movies-list">
//       <VisibilityFilterInput visibilityFilter={visibilityFilter} />
//       {filteredMovies.map(m => <MovieCard key={m._id} movie={m}/>)}
//     </div>;
//   );
// }

// export default connect(mapStateToProps)(MoviesList);

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import VisibilityFilterInput from "../visibility-filter-input/visibility-filter-input";
import { MovieCard } from "../movie-card/movie-card";
// import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import "./movies-list.scss";

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== "") {
    filteredMovies = movies.filter((m) =>
      m.Title.toLocaleLowerCase().includes(visibilityFilter.toLocaleLowerCase())
    );
  }

  if (!movies) return <div className="main-view" />;

  return (
    <div className="movies-list">
      <VisibilityFilterInput visibilityFilter={visibilityFilter} />

      <Container>
        {/* <Col> */}
        <Row>
          {filteredMovies.map((m) => (
            <MovieCard key={m._id} movie={m} />
          ))}
        </Row>
        {/* </Col> */}
      </Container>
    </div>
  );
}

MoviesList.propTypes = {
  visibilityFilter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(MoviesList);
