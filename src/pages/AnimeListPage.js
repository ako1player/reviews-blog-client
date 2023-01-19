import animes from "./anime-content";
import AnimeList from "../components/AnimeList";

const AnimeListPage = () =>{
    return(
        <div className="text-center">
            <h1 className="pb-4 text-jadeGreen-800 text-3xl">Animes Reviewed</h1>
            <div>
                <div>
                    <AnimeList animes={animes} />
                </div>
            </div>
        </div>
    )
}

export default AnimeListPage;