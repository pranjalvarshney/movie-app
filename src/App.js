import React, { Component } from 'react'
import SearchPage from './components/SearchPage'
import {searchAPI, trendingAPI} from './api'
import Search from '@material-ui/icons/Search';
import Trendings from './components/Trendings';

class App extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             query: "",
             trendings: [],
             searchedMovieData: []
        }
    }

    trendingFetch = async () => {
        const data = await trendingAPI()
        this.setState({
            trendings: data
        })
        console.log(this.state.trendings)
    }

    componentDidMount(){
        this.trendingFetch()
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
            const data = await searchAPI(this.state.query)
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
                <Trendings trendings={this.state.trendings}/>
                <SearchPage moviesData={this.state.searchedMovieData} handleQuery={this.handleQuery} query={this.state.query} handleSubmit={this.handleSubmit}/> 
            </div>
        )
    }
}

export default App
