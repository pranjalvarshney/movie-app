import React,{useState} from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'

function CardRow(props) {

    const [fav, setFav] = useState(false)

    const favStyle = !fav ?  {color: "grey"}: {color: "red"}
    
    const toggleFav = () => {
        setFav(fav => !fav)
    }

    

    return (
        <div>
            <div className="all-cards-row">
                {props.content.data.results.map((movie,i) => {
                    return(
                        <div className="movie-card" key={i}>
                            <div className="img-div">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                                <FavoriteIcon  className="fav-icon" onClick={toggleFav} style={favStyle} />
                                <span>{movie.vote_average}</span>

                            </div>
                            <h6 className="movie-title">{movie.title || movie.original_title || movie.original_name}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CardRow
