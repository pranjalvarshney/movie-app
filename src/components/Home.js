import React, { Component } from 'react'
import Trendings from './Trendings';
import CardRow from './CardRow'
class App extends Component {
    
    
    render() {
        if(this.props.trendings.data === undefined){
            return (
                <div className="container spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        }
    
        return (
            <div>
               
                <Trendings trendings={this.props.trendings}
                            
                            handleQuery={this.props.handleQuery}
                            query={this.props.query}
                            handleSubmit={this.props.handleSubmit}/>
                <div className="mx-5">
                    <h3 className="text-left my-3">Trendings</h3>
                    <CardRow content={this.props.trendings}/>
                </div>
            </div>
        )
    }
}

export default App
