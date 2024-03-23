import React from 'react'
import './App.css'

const Movies = ({moviesList}) => {

  return (

    <div className='main'>
       {moviesList && moviesList.map((movie) =>(
        <div className='movie-container'>
            <div className='movie'>
            <img src={movie.Poster} alt={movie.Title} />
            <h3 className='text'>{movie.Title}</h3>
            <p className='text'>Released Year: {movie.Year}</p>
            <p className='text'>Type:{movie.Type}</p>
        </div>
        </div>
       ))}
    </div>

  )
}

export default Movies
