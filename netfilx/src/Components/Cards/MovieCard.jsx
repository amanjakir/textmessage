import React from "react";

function MovieCard({ poster, title }) {
  return (
    <div className="card">
      <img src={poster} alt={title} className="poster-img" />
      <div style={{ padding: "10px" }}>
        <p style={{ fontWeight: "bold" }}>{title}</p>
      </div>
    </div>
  );
}

export default MovieCard;
