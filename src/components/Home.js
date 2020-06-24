import React, { Component } from 'react'
import Trendings from './Trendings';

class App extends Component {
    
    
    render() {
    
        return (
            <div>
                <Trendings trendings={this.props.trendings}/>
            </div>
        )
    }
}

export default App
