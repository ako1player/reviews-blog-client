import { Link } from 'react-router-dom';

const AnimeList = ({animes}) => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 pl-2'>
            {animes.map((anime, key) =>(
                <div key={key} className="max-w-sm rounded overflow-hidden shadow-lg border border-jadeGreen-800 hover:bg-jadeGreen-700">
                    <Link to={`/animes/${anime.name}`}>
                        <img className="w-full" src={anime.image} alt={`${anime.name} poster`}/>
                        <h3 className=' text-jadeGreen-800'>{anime.title}</h3>
                        <p className=' text-jadeGreen-800'>{anime.content[0].substring(0,10)}...</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default AnimeList;