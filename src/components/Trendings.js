import React, { useState} from 'react'
import {Carousel} from 'react-bootstrap'

function Trendings(props) {
    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    if(props.trendings.data === undefined){
        return (
            <div className="container spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    return (
        <div className="trending-wrapper">
            <Carousel activeIndex={index} onSelect={handleSelect} fade={true}>
                
                {
                    props.trendings.data.results.map((trend,index) => {
                        return(
                            <Carousel.Item key={index}>
                                <img className="bg-img" src={`https://image.tmdb.org/t/p/original/${trend.backdrop_path}`} alt={trend.title} />
                                <div>    
                                    <div className="trend-card" key={index}>
                                        <div className="img-div">
                                            <img src={`https://image.tmdb.org/t/p/w500/${trend.poster_path}`} alt={trend.title} />
                                            {/* <FavoriteIcon  className="fav-icon"  /> */}
                                            <span>{trend.vote_average}</span>

                                        </div>
                                        <div className="trend-content">
                                            <h4>{trend.title || trend.original_title || trend.original_name}</h4>
                                            <h6>{trend.media_type}</h6>
                                            <p>Description: <br/>{trend.overview.slice(0,100)}...</p>
                                        </div>
                                    </div>
                                </div>  
                            </Carousel.Item>
                        )}
                    )                
                }
                
            </Carousel>
        </div>
    )
}

export default Trendings
