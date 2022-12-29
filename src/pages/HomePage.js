import RecentMovies from "../components/RecentMovies";
import movies from "./movie-content";

const HomePage = () =>{
    return (
        <div className="text-center text-jadeGreen-800">
            <h1 className="text-3xl pb-10">Welcome to my quick reviews of movies and anime</h1>
            <div className="p-2">
                <h1>Recent Movie Reviews:</h1>
                <RecentMovies movies={movies} />
            </div>
            <h1>Recent Anime Reviews:</h1>
        </div>
    )
}

export default HomePage;