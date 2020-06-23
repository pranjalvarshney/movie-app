import React, {useState} from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';

function SearchPage(props) {

    const [fav, setFav] = useState(false)

    const favStyle = !fav ?  {color: "grey"}: {color: "red"}
    
    const toggleFav = () => {
        setFav(fav => !fav)
    }

    console.log(props.moviesData.data)
    if(props.moviesData.data === undefined){
       
        return (
            <div className="container">
            </div>

        )
    }else{
        return (

            <div className="container">
                <h3 className="my-5">Search results</h3>
                <div className="all-cards">
                    {props.moviesData.data.results.map((movie,i) => {
                        return(
                            <div className="movie-card" key={i}>
                                <div className="img-div">
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                                    <FavoriteIcon  className="fav-icon" onClick={toggleFav} style={favStyle} />
                                    <span>{movie.vote_average}</span>

                                </div>
                                <h6 className="movie-title">{movie.title}</h6>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default SearchPage
