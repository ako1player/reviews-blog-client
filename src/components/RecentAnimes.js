import { Link } from "react-router-dom";

const RecentAnimes = ({animes}) =>{
    return(
        <div className='flex'>
            {animes.map((anime, key) =>(
                <div key={key} className="hover:scale-125">
                    <Link to={`/animes/${anime.name}`}>
                        <img className="rounded-md scale-75" src={anime.image} alt={`${anime.name} poster`}/>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default RecentAnimes;