import { useState,useEffect } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/movies/animation")
      .then((res) => setMovies(res.data));
  }, []);
  return (
  <div>
    {movies ?
    (<div className="movies row center">
      {movies.map((movie) =>(
        <div className="movie card col-3">
          <img src ={movie.posterURL} alt={movie.title} className="card-img card-img-top" height="400"/>
          <h2 className=" card-title text-center">{movie.title}</h2>
          <button onClick={()=>navigate(`/movie/${movie.imdbId}`)} className=" card-footer">See More</button>
        </div>
      ))}
    </div>
    ) : 
    (<><p>No Such Movies</p></>
    )}
    </div>
  )
};

export default Movies;
