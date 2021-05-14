import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) =>
        <div key={index}> 
        <h3>Name:{director.name}</h3>
        <ul>
          {director.movies.map((movie, index) =>  //must take the singular target! Directors => director
          <li key={index}>{movie}</li>)}
        </ul>
        </div>
      )}
    </div>
      )}


export default Directors


// <div>
// <h1>Movies Page</h1>
// {movies.map((movie, index) =>
//   <div key={index}>
//     <h3>Name: {movie.title}</h3>
//     <p>Time: {movie.time}</p>
//     <p>Genres:</p>
//     <ul>
//       {movie.genres.map((genre, index) =>
//       <li key={index}>{genre}</li>)}
//     </ul>
//   </div>
//   )}
// </div>
// );
// };