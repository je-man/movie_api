import React from 'react';
import { MovieCard } from '../movie-card/movie-card';



export default function MoviesList(props) {
  const { movies} = props;

  

  if (!movies) return <div className='main-view' />;

  return (
    <div className='movies-list'>
      {movies.map((m) => (
        <MovieCard key={m._id} movie={m} />
      ))}
    </div>
  );
}
