import { Link } from "react-router-dom";

const RecentMovies = ({movies}) =>{
    return(
        <div className='flex'>
            {movies.map((movie, key) =>(
                <div key={key} className="hover:scale-125">
                    <Link to={`/movies/${movie.name}`}>
                        <img className="rounded-md scale-75" src={movie.image} alt={`${movie.name} poster`}/>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default RecentMovies;