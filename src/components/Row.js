import React, { useState, useEffect } from "react";
//import requests from "../Requests";
import "../styles/Row.css";
import axios from "../axios";
function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    async function setData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    setData();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            //   src={`https://api.themoviedb.org/3${movie.poster_path}`}
            //   alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
