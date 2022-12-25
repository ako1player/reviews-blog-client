import movies from "./movie-content";
import MovieList from "../components/MovieList";

const MovieListPage = () =>{
    return(
        <div className="text-center">
            <h1 className="text-jadeGreen-800 text-3xl">Movies Reviewed</h1>
            <div>
                <div>
                    <MovieList movies={movies} />
                </div>
            </div>
        </div>
    )
}

export default MovieListPage;