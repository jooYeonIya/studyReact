import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
    .then((reponse) => reponse.json())
    .then((json) => {
      setMovies(json.data.movies);
      setIsLoading(false);
    })
  }, []);
  
  return (
    <>
      <h1>movie App</h1>
      {isLoading ? "로딩 중" : null}
    </>
  )
}

export default App
