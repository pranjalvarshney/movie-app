
import axios from 'axios'

const apiKEY = "e487e6ff12b62e174b4cc5949992fd3e"

export const searchAPI = async(query) =>{

    try {
        
        const uri = `https://api.themoviedb.org/3/search/movie?api_key=${apiKEY}&query=${query}&page=1`
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