import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true); 
    let { id } = useParams();

    const getMovie = async() => {
        const reponse = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`);
        const json = await reponse.json();
        setMovie(json.data.movie);
        setIsLoading(false);
      }

      useEffect(() => { getMovie() }, []);

    if (isLoading) {
        return <h2>Loading...</h2>; 
    }

    return (
        <>
            <h2>{movie.title}</h2>
            <img src={movie.medium_screenshot_image1} alt="" />
            <img src={movie.medium_screenshot_image2} alt="" />
            <img src={movie.medium_screenshot_image3} alt="" />
            <ul>
                {movie.cast.map((data) => <li>
                    <img src={data.url_small_image} alt="" />
                    {data.name}
                    </li>)}
            </ul>
        </>
    )
}

export default Detail;