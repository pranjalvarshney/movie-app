import React from 'react'

function Trendings(props) {
    
    if(props.trendings.data === undefined){
        return (
            <div className="text-center text-white">Loading...</div>
        )
    }

    return (
        <div>
            {
                props.trendings.data.results.map((trend,index) => {
                    return(
                        <div key={index}>
                            <img src={`https://image.tmdb.org/t/p/original/${trend.backdrop_path}`} alt={trend.title} width="100%" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Trendings
