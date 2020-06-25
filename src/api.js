
import axios from 'axios'

const apiKEY = "e487e6ff12b62e174b4cc5949992fd3e"

export const searchAPI = async(query) =>{

    try {
        
        const uri = `https://api.themoviedb.org/3/search/multi?api_key=${apiKEY}&query=${query}&page=1`
        const response = await axios.get(uri)
        // console.log(response)

        return response

    } catch (error) {
        throw error
    }
    
}

export const trendingAPI = async () => {
    try {
        const uri = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKEY}`
        const response = await axios.get(uri)
        return response
    } catch (error) {
        throw error
    }
}

export const topMoviesApi = async ()=>{
    try {
        const uri = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKEY}&language=en-US&page=1`
        const response = await axios.get(uri)
        return response
    } catch (error) {
        throw error
    }
}
export const NowPlayingMoviesApi = async ()=>{
    try {
        const uri = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKEY}&language=en-US`
        const response = await axios.get(uri)
        return response
    } catch (error) {
        throw error
    }
}
export const upcomingMoviesApi = async ()=>{
    try {
        const uri = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKEY}&language=en-US&page=1`
        const response = await axios.get(uri)
        return response
    } catch (error) {
        throw error
    }
}
export const tvOnAirApi = async ()=>{
    try {
        const uri = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKEY}&language=en-US&page=1`
        const response = await axios.get(uri)
        return response
    } catch (error) {
        throw error
    }
}
export const tvpopularApi = async ()=>{
    try {
        const uri = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKEY}&language=en-US&page=1`
        const response = await axios.get(uri)
        return response
    } catch (error) {
        throw error
    }
}
export const tvTopRatedApi = async ()=>{
    try {
        const uri = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKEY}&language=en-US&page=1`
        const response = await axios.get(uri)
        return response
    } catch (error) {
        throw error
    }
}