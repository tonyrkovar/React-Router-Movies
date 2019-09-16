import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard = props => {
  console.log('this is in moviecard',props);
  return(
    <div className="movie-card">
      <h2>{props.movie.title}</h2>
      <div className="movie-director">
        Director: <em>{props.movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.movie.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.movie.stars && props.movie.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
       <div className="save-button">Save</div>
      {props.detail ? <div className="save-button">Save</div> : <Link to={`/movies/${props.movie.id}`}>Read More About {props.movie.title}</Link>}
      
      
    </div>
  )
};

export default MovieCard;
