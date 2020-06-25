import React, { useState} from 'react'
import {Carousel} from 'react-bootstrap'

function Trendings(props) {
    
    const [query, setquery] = useState("")

    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    const handleChangeQuery = (e) => {
        setquery(props.handleQuery(e))
    }
    const submit = (e) => {
        props.handleSubmit(e)
    }
    
    return (
        <div className="trending-wrapper">
            <Carousel activeIndex={index} onSelect={handleSelect} fade={true} indicators={false}>
                
                {
                    props.trendings.data.results.map((trend,index) => {
                        return(
                            <Carousel.Item key={index}>
                                <img className="bg-img" src={`https://image.tmdb.org/t/p/original/${trend.backdrop_path}`} alt={trend.title} />
                                <div className="welcome">    
                                    <h1>Welcome</h1>
                                    <h3>Millions of Movies and TV shows to discover. Explore now ...</h3>
                                    <form onSubmit={submit}>     
                                        <input onChange={handleChangeQuery} value={query} placeholder="Search movies , tv shows and series"/>
                                    </form>
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

// <div className="trend-card" key={index}>
//     <div className="img-div">
//         <img src={`https://image.tmdb.org/t/p/w500/${trend.poster_path}`} alt={trend.title} />
//         <FavoriteIcon  className="fav-icon"  />
//         <span>{trend.vote_average}</span>

//     </div>
//     <div className="trend-content">
//         <h4>{trend.title || trend.original_title || trend.original_name}</h4>
//         <h6>{trend.media_type}</h6>
//         <p>Description: <br/>{trend.overview.slice(0,100)}...</p>
//     </div>
// </div>