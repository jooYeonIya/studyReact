export default function Movie({movie}) {
    return (
    <>
        <div>
            <img src={movie.large_cover_image} alt="" />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <p>Genres: {movie.genres ? movie.genres.join(", ") : "장르 정보 없음"}</p>

            {/* <ul>
                {movie.genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))}
            </ul> */}
                   <p>
                    {movie.genres && movie.genres.length > 0 ? (
                        movie.genres.map((genre, index) => (
                            <span key={index}>{genre} </span>
                        ))
                    ) : (
                        "장르 정보 없음"
                    )}
                </p>
        </div>  
    </>
    )
}

// Movie.proptypes = {
//     coverImage: PropTypes.isString.isRequired
// }