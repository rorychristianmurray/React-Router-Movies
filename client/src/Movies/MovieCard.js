import React from "react";

export default function MovieDetails({ movie }) {
  const { title, director, metascore, stars, id } = movie;
  console.log("MovieCard movie", movie);
  return (
    <div className="movie-card">
      <Link to={`/movies/${id}`}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </Link>
    </div>
  );
}
