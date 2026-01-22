import {useState,useEffect} from 'react'
import "./Allmovies1.css";
import axios from 'axios';
import MovieCard from '../../Cards/MovieCard';
function AllMovies(){
const [movies,setMovies]=useState([]) 
useEffect(()=>{
  const option ={method: 'GET', headers:{accept:'application/json'}};
  axios("https://imdb.iamidiotareyoutoo.com/search?q=marvelstudio",option)
  .then((response)=>setMovies(response.data.description))

},[])

  return (
    <>
      <h1 className='heading'>All Movies</h1>
      <div>
        <input type='text' name='searchterm'/>
        <button type='button'>Search</button> 
      </div>
      <div className='movie-section'>
      {
        movies.map((cinema)=>(
          <MovieCard key={cinema["#IMDB_ID"]} poster={cinema["#IMG_POSTER"]}title={cinema["#TITLE"]}/>
        ))
      }
       </div>
    </>
  )
}

export default AllMovies

