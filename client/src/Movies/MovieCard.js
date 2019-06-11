import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieCard = props => {
  console.log(props.movie);
  return (
    <div className="movie-card">
      <Link to={`/movies/${props.movie.id}`}>
        <h2>{props.movie.title}</h2>
        <div className="movie-director">
          Director: <em>{props.movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{props.movie.metascore}</strong>
        </div>
        <h3>Actors</h3>

        {props.movie.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </Link>
    </div>
  );
};

export default MovieCard;
