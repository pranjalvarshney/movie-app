import React from 'react'
import CardRow from './CardRow'

function Tvseries(props) {

    

    if(props.tvPopular.data === undefined || props.tvOnAir.data === undefined || props.tvTopRated.data === undefined){
       
        return (
            <div className="container"></div>

        )
    }else{
        return (

            <div className="mx-5">
                <h4 className="mt-5 mb-3">Popular</h4>
                <CardRow content={props.tvPopular} />                    
                <h4 className="mt-3 mb-3">Top rated</h4>
                <CardRow content={props.tvTopRated} />
                <h4 className="mt-3 mb-3">TV on the AIR</h4>
                <CardRow content={props.tvOnAir} />
                
            </div>
        )
    }
}

export default Tvseries
