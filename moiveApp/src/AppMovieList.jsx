import { useEffect, useState } from 'react'
import './App.css'
import Movie from '../components/Movie';

function AppMovieList() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const title = document.getElementsByTagName("title")[0]
  title.innerText = "영화 정보 사이트"

  const getMovies = async() => {
    const reponse = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");
    const json = await reponse.json();
    setMovies(json.data.movies);
    setIsLoading(false);
  }

    // async function getMovies() {  }

  // useEffect(() => {
  //   fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
  //   .then((reponse) => reponse.json())
  //   .then((json) => {
  //     setMovies(json.data.movies);
  //     setIsLoading(false);
  //   })
  // }, []);

  useEffect(() => { getMovies(); }, []);

  return (
    <>
      <h1>movie App</h1>
      {isLoading ? "로딩 중" : 
                    <div>
                      {movies.map((movie) => (<Movie key={movie.id} movie={movie}/>))}
                    </div>
      }
    </>
  )
}

export default AppMovieList
