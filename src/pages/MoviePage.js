import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import movies from "./movie-content";
import NotFoundPage from "./NotFoundPage";
import axios from "axios";
import CommentList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm"
import useUser from "../hooks/useUser";

const MoviePage = () =>{
    const [movieInfo, setMovieInfo] = useState({upvotes: 0, comments: [], canUpvote: false});
    const {canUpvote} = movieInfo;
    const {movieId} = useParams();
    
    const navigate = useNavigate();

    const { user, isLoading } = useUser();

    useEffect(() =>{
        const loadMovieInfo = async () =>{
            const token = user && await user.getIdToken();
            const headers = token ? {authtoken: token} : {};
            const response = await axios.get(`https://reviews-blog.herokuapp.com/api/movies/${movieId}`, {headers});
            const newMovieInfo = response.data;
            setMovieInfo(newMovieInfo);
        }

        if(!isLoading){
            loadMovieInfo();
        }
    }, [isLoading, user, movieId]);

    const movie = movies.find(movie => movie.name === movieId);

    const addUpvote = async () =>{
        const token = user && await user.getIdToken();
        const headers = token ? {authtoken: token} : {};
        const response = await axios.put(`https://reviews-blog.herokuapp.com/api/movies/${movieId}/upvote`, null, {headers});
        const updatedMovie = response.data;
        setMovieInfo(updatedMovie);
    }

    if(!movie){
        return <NotFoundPage />;
    }

    return(
        <div className=' text-jadeGreen-800 text-center'>
            <h1 className="text-3xl">{movie.title}</h1>
            <div>
                {user ? <button className="px-2 border bg-jadeGreen-900 hover:bg-cobaltBlue-800 font-bold rounded text-jadeGreen-700" onClick={addUpvote}>{canUpvote ? 'UpVote' : 'Already Voted!'}</button>
                :
                <button className="px-2 border bg-jadeGreen-900 hover:bg-cobaltBlue-800 font-bold rounded text-jadeGreen-700" onClick={()=> navigate('/login')}>Log in to upvote</button>
                }
                <p>This article has <span className="text-white">{movieInfo.upvotes}</span> upvote(s)</p>
            </div>
            <div className="py-2">
            {movie.content.map((paragraph, key) =>(
                <div key={key} className="max-w-sm rounded overflow-hidden shadow-lg border mx-auto">
                    <p>{paragraph}</p>
                </div>
            ))}
            </div>
            {user ?
                <AddCommentForm movieName={movieId} onMovieUpdated={updatedMovie => setMovieInfo(updatedMovie)} />
                :
                <button className="px-2 border bg-jadeGreen-900 hover:bg-cobaltBlue-800 font-bold rounded text-jadeGreen-700" onClick={() => navigate('/login')}>Log in to add a comment</button>
            }
            <CommentList comments={movieInfo.comments} />
        </div>
    )
}

export default MoviePage;