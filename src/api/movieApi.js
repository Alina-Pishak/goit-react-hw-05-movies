import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'a3da5e9ce399f6d0126309bab705adab';

export const getTrendingMovies = async () => {
    return await axios(`/trending/all/day?api_key=${API_KEY}`)
  
}

export const searchMovie = async (query) => {
    return await axios(`/search/movie?api_key=${API_KEY}&query=${query}`)
}

export const getMovieDetails  = async (id) => {
    return await axios(`/movie/${id}?api_key=${API_KEY}`)
}

export const getMovieCast = async (id) => {
        return await axios(`/movie/${id}/credits?api_key=${API_KEY}`)

}

export const getMovieReviews = async (id) => {
        return await axios(`/movie/${id}/reviews?api_key=${API_KEY}`)

}