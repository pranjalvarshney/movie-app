import React, { Component } from 'react'
import SearchPage from './components/SearchPage'
import {searchAPI, trendingAPI} from './api'
import Search from '@material-ui/icons/Search';
import logo from './logo.svg'
import Movies from './components/Movies'
import Tvseries from './components/Tvseries'
import Popular from './components/Popular'
import Home from './components/Home'
import {Navbar, Nav ,Form ,FormControl, Button} from 'react-bootstrap'
import {BrowserRouter as Router , Link, Route, Switch} from 'react-router-dom'

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
                <Router>
                <Navbar bg="dark" expand="lg" variant="dark" className="px-5 ">
                    <Link to="/">
                        <Navbar.Brand href="#home"><img src={logo} alt="logo" height="80px" width="80px" /></Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/movies">Movies</Nav.Link>
                                <Nav.Link href="/tvseries" >Tv Series</Nav.Link>
                                <Nav.Link href="/popular">Popular</Nav.Link>
                        </Nav>
                        <Form className="search-form" onSubmit={this.handleSubmit} inline>
                        <FormControl  onChange={this.handleQuery} value={this.state.query} type="search" placeholder="Search"  />
                        <Button type="submit"><Search/></Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                
                <SearchPage moviesData={this.state.searchedMovieData} handleQuery={this.handleQuery} query={this.state.query} handleSubmit={this.handleSubmit}/> 
                <Switch>
                    <Route exact path="/">
                        <Home trendings = {this.state.trendings}/>
                    </Route>
                    <Route path="/movies">
                        <Movies />
                    </Route>
                    <Route path="/tvseries">
                        <Tvseries />
                    </Route>
                    <Route path="/popular">
                        <Popular />
                    </Route>
                </Switch>
                </Router>
            </div>
        )
    }
}

export default App
