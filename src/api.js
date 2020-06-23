
import axios from 'axios'

const apiKEY = ""

const searchAPI = async(query) =>{

    try {
        
        const uri = `https://api.themoviedb.org/3/search/movie?api_key=${apiKEY}&query=${query}&page=1`
        const response = await axios.get(uri)
        // console.log(response)

        return response

    } catch (error) {
        throw error
    }
    
}

export default searchAPI
