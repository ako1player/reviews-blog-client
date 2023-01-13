import RecentMovies from "../components/RecentMovies";
import RecentAnimes from "../components/RecentAnimes";
import movies from "./movie-content";
import animes from "./anime-content";

const HomePage = () =>{
    return (
        <div className="text-center text-jadeGreen-800">
            <h1 className="text-3xl pb-10">Welcome to my quick reviews of movies and anime</h1>
            <p>The purpose of this is to keep track of movies/anime I have watched.</p>
            <div className="p-2">
                <h1>Recent Movie Reviews:</h1>
                <RecentMovies movies={movies} />
            </div>
            <div>
                <h1>Recent Anime Reviews:</h1>
                <RecentAnimes animes={animes} />
            </div>
        </div>
    )
}

export default HomePage;