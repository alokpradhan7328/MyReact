import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';


const Movie = () => {

  const {id} = useParams();
  const [movieData,setMovieData] =useState({})
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`https://omdbapi.com/?i=${id}&apikey=4827adaa`).then((res)=>setMovieData(res.data));
  })

  const handleRute = () => {
    window.location.href = `https://imdb.com/title/${id}`
  }
  return (
    <div>
      {movieData && (
      <div className='movieData row p-5 m-5'>
        <div className=' col-4 '>
          <img src={movieData.Poster} alt={movieData.Title}/>
        </div>
        <div className=' col-8  text-center  mt-5'>
           <h2>{movieData.Title}</h2>
           <p>Year: {movieData.Year}</p>
           <p>Description: {movieData.Plot}</p>
           <button onClick={handleRute}>Imdb Link</button>
        </div>
      </div>
      )}
    </div>
  )
}

export default Movie
