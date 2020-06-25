import React, { Component } from 'react'
import SearchPage from './components/SearchPage'
import {searchAPI, trendingAPI , NowPlayingMoviesApi, topMoviesApi , upcomingMoviesApi ,tvOnAirApi,tvTopRatedApi,tvpopularApi} from './api'
import Search from '@material-ui/icons/Search';
import logo from './long_logo.svg'
import Movies from './components/Movies'
import Tvseries from './components/Tvseries'
import Home from './components/Home'
import {Navbar, Nav ,Form ,FormControl, Button} from 'react-bootstrap'
import {BrowserRouter as Router , Link, Route, Switch} from 'react-router-dom'

class App extends Component {
    
   
    
        state = {
            
             searchinputhide: true,
             query: "",
             trendings: [],
             searchedMovieData: [],
             npMovies: [],
             topMovies: [],
             upcomingMovies: [],
             tvPopular: [],
             tvOnAir: [],
             tvTopRated: []
        }

    trendingFetch = async () => {
        const data = await trendingAPI()
        this.setState({
            trendings: data
        })
        
    } 
    tvpopularFetch = async () => {
        const data = await tvpopularApi()
        this.setState({
            tvPopular: data
        })
        
    } 
    tvTopRatedFetch = async () => {
        const data = await tvTopRatedApi()
        this.setState({
            tvTopRated: data
        })
        
    }
    
    tvOnAirFetch = async () => {
        const data = await tvOnAirApi()
        this.setState({
            tvOnAir: data
        })
        
    }
    topMoviesFetch = async () => {
        const data = await topMoviesApi()
        this.setState({
            topMovies: data
        })
    } 
    npmoviesFetch = async () => {
        const data = await NowPlayingMoviesApi()
        this.setState({
            npMovies: data
        })
    }
    upcomingmoviesFetch = async () => {
        const data = await upcomingMoviesApi()
        this.setState({
            upcomingMovies: data
        })
    }

    componentDidMount(){
        this.tvOnAirFetch()
        this.tvTopRatedFetch()
        this.tvpopularFetch()
        this.upcomingmoviesFetch()
        this.topMoviesFetch()
        this.trendingFetch()
        this.npmoviesFetch()
    }

    handleQuery = (e) =>{
        
        this.setState({
            query: e.target.value
        })
        
    }

    handleSubmit = async(e) =>{
        e.preventDefault()
        if(this.state.query.length > 0 ){
            const data = await searchAPI(this.state.query)
            this.setState({
                searchedMovieData: data
            })
        }
    }

   
 
    render() {

    
        return (
            <div>
                <Router>
                <Navbar bg="dark" expand="lg" variant="dark" className="px-5 main-nav">
                    <Link to="/">
                        <Navbar.Brand ><img src={logo} alt="logo" height="90px" width="100%" /></Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" defaultActiveKey="/">
                            <Nav.Item>
                                <Nav.Link href="/" >Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/movies">Movies</Nav.Link>
                            </Nav.Item>    
                            <Nav.Item>
                                <Nav.Link href="/tvseries" >Tv Series</Nav.Link>
                            </Nav.Item>    
                             
                        
                            <Form className="search-form" onSubmit={this.handleSubmit} inline>
                            <FormControl  onChange={this.handleQuery} value={this.state.query} type="search" placeholder="Search"  />
                            <Button type="submit"><Search/></Button>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
                <SearchPage moviesData={this.state.searchedMovieData} handleQuery={this.handleQuery} query={this.state.query} handleSubmit={this.handleSubmit}/> 
                <Switch>
                    <Route exact path="/">
                        <Home
                            trendings = {this.state.trendings}
                            moviesData={this.state.searchedMovieData}
                            handleQuery={this.handleQuery}
                            query={this.state.query}
                            handleSubmit={this.handleSubmit}
                        />
                    </Route>
                    <Route path="/movies">
                        <Movies npMovies={this.state.npMovies} topMovies={this.state.topMovies} upcomingMovies={this.state.upcomingMovies} />
                    </Route>
                    <Route path="/tvseries">
                        <Tvseries tvPopular={this.state.tvPopular} tvTopRated={this.state.tvTopRated} tvOnAir={this.state.tvOnAir}/>
                    </Route>
                    
                </Switch>
                </Router>
            </div>
        )
    }
}

export default App
