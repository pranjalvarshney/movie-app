import React from 'react'
import CardRow from './CardRow'

function Movies(props) {

    if(props.npMovies.data === undefined || props.topMovies.data === undefined || props.upcomingMovies.data === undefined){
       
        return (
            <div className="container"></div>

        )
    }else{
        return (

            <div className="mx-5">
                <h4 className="mt-5 mb-3">Now playing</h4>
                <CardRow content={props.npMovies}/>
                <h4 className="mt-3 mb-3">Top rated</h4>
                <CardRow content={props.topMovies}/>
                <h4 className="mt-3 mb-3">Upcoming movies</h4>
                <CardRow content={props.upcomingMovies}/>
            </div>
        )
    }
}

export default Movies
