import axios from "axios"
import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"

function MovieList() {

    const[movies, setMovies] = useState([])

    const apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=614fd2a9af2c92e4ac454c744cfc723c&language=en-US&sort_by=popularity.desc&page=1'

    useEffect(() => {
        axios.get(apiUrl)
        .then(response => {
            setMovies(response.data.results)
        }).catch(error => {
            console.error('Ocorreu um erro:', error)
        })
    },[])

    return (
        <div className="container">
            <div className="row">
                {movies.map(movie => (
                    <MovieCard movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default MovieList