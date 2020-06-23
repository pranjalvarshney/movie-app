import React, { Component } from 'react'
import SearchPage from './SearchPage'
import fetchAPIData from './api'
import Search from '@material-ui/icons/Search';

class App extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             query: "",
             searchedMovieData: []
        }
    }
fetchAPI = async() => {
    if(this.state.query !== ""){
        const data = await fetchAPIData(this.state.query)
        this.setState({
            searchedMovieData: data
        })
        console.log(data)
    }

}

    handleQuery = (e) =>{
        
        this.setState({
            query: e.target.value
        })
        
        // this.fetchAPI()    
        // console.log(this.state.query)
    }

    handleSubmit = async(e) =>{
        e.preventDefault()
        if(this.state.query.length > 0 ){
            const data = await fetchAPIData(this.state.query)
            this.setState({
                searchedMovieData: data
            })
            // console.log(data)
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light py-4 px-5">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <form className="form-inline search-form" onSubmit={this.handleSubmit}>
                        <input onChange={this.handleQuery} value={this.state.query} type="search" placeholder="Search" aria-label="Search" />
                        <button type="submit"><Search /></button>
                    </form>
                </nav>
                <SearchPage moviesData={this.state.searchedMovieData} handleQuery={this.handleQuery} query={this.state.query} handleSubmit={this.handleSubmit}/> 
            </div>
        )
    }
}

export default App
