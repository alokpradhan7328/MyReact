
import { useEffect, useState } from 'react'
import './App.css'
import Movies from './Movies'
import toggle_light from './assets/night.png'
import toggle_dark from './assets/day.png'

function App() {
  const [moviesList,setMoviesList] = useState([])
  const [searchTerm,setSearchTerm] = useState('')
  const currentTheme = localStorage.getItem('currentTheme');
  const [theme,setTheme] = useState(currentTheme ? currentTheme : 'light');

  const toggle_mode = () => {
    document.body.classList.toggle('dark');
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('currentTheme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('currentTheme', 'light');
    }
  };

  useEffect(() => {
    async function fetchData(){
        const res = await fetch(`https://omdbapi.com/?s=${searchTerm}&apikey=e3277b8e`)
        const data = await res.json()
        setMoviesList(data.Search)
    }
    fetchData()
  },[searchTerm])

  // useEffect(() => {
  //   if (theme === 'dark') {
  //     document.body.style.backgroundColor = '#000000';
  //     document.body.style.color = '#ffffff';
  //   } else {
  //     document.body.style.backgroundColor = '#ffffff';
  //     document.body.style.color = '#000000';
  //   }
  // },[theme])

  return (
    <div>
      <div className='menu'>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Store</a></li>
        <li><a href="">Live Tv</a></li>
        <li><a href="">Categories</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Conact Us</a></li>
      </ul>
      <div className="searchForm">
      <input type="text" placeholder='Search Here' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value )}/>
      </div>
      <img onClick={toggle_mode} src={theme ==='light'?toggle_light:toggle_dark} className='toggle-icon' />
    </div>
    <Movies moviesList={moviesList}/>
    </div>
  )
}

export default App
