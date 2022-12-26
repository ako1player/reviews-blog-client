import { Link } from 'react-router-dom';

const MovieList = ({movies}) => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 pl-2'>
            {movies.map((movie, key) =>(
                <div key={key} className="max-w-sm rounded overflow-hidden shadow-lg border border-jadeGreen-800 hover:bg-jadeGreen-700">
                    <Link to={`/movies/${movie.name}`}>
                        <img className="w-full" src={movie.image} alt={`${movie.name} poster`}/>
                        <h3 className=' text-jadeGreen-800'>{movie.title}</h3>
                        <p className=' text-jadeGreen-800'>{movie.content[0].substring(0,10)}...</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default MovieList;