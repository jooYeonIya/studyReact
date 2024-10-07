import { Link } from 'react-router-dom'
import { changeTitle } from '../src/changeTitle'

export default function Movie({ movie }) {

    changeTitle("영화 상세");
    
    return (
        <>
            <div>
                <img src={movie.large_cover_image} alt="" />
                <h2><Link to={`/detail/${movie.id}`}>{movie.title}</Link></h2>
                <p>{movie.summary}</p>
                <p>Genres: {movie.genres ? movie.genres.join(", ") : "장르 정보 없음"}</p>
                <ul>
                    {movie.genres && movie.genres.map((genre, index) => (
                        <li key={index}>{genre}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

// Movie.proptypes = {
//     coverImage: PropTypes.isString.isRequired
// }