import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import animes from "./anime-content";
import NotFoundPage from "./NotFoundPage";
import axios from "axios";
import CommentList from "../components/CommentsList";
import AddAnimeCommentForm from "../components/AddAnimeCommentForm";
import useUser from "../hooks/useUser";

const AnimePage = () =>{
    const [animeInfo, setAnimeInfo] = useState({upvotes: 0, comments: [], canUpvote: false});
    const {canUpvote} = animeInfo;
    const {animeId} = useParams();
    
    const navigate = useNavigate();

    const { user, isLoading } = useUser();

    useEffect(() =>{
        const loadAnimeInfo = async () =>{
            const token = user && await user.getIdToken();
            const headers = token ? {authtoken: token} : {};
            const response = await axios.get(`https://reviews-blog.herokuapp.com/api/anime/${animeId}`, {headers});
            const newAnimeInfo = response.data;
            setAnimeInfo(newAnimeInfo);
        }

        if(!isLoading){
            loadAnimeInfo();
        }
    }, [isLoading, user, animeId]);

    const anime = animes.find(anime => anime.name === animeId);

    const addUpvote = async () =>{
        const token = user && await user.getIdToken();
        const headers = token ? {authtoken: token} : {};
        const response = await axios.put(`https://reviews-blog.herokuapp.com/api/anime/${animeId}/upvote`, null, {headers});
        const updatedAnime = response.data;
        setAnimeInfo(updatedAnime);
    }

    if(!anime){
        return <NotFoundPage />;
    }

    return(
        <div className=' text-jadeGreen-800 text-center'>
            <h1 className="text-3xl pb-2">{anime.title}</h1>
            <div className="pb-2">
                {user ? <button className="px-2 border bg-jadeGreen-900 hover:bg-cobaltBlue-800 font-bold rounded text-jadeGreen-700" onClick={addUpvote}>{canUpvote ? 'UpVote' : 'Already Voted!'}</button>
                :
                <button className="px-2 border bg-jadeGreen-900 hover:bg-cobaltBlue-800 font-bold rounded text-jadeGreen-700" onClick={()=> navigate('/login')}>Log in to upvote</button>
                }
                <p className="pt-2">This article has <span className="text-white">{animeInfo.upvotes}</span> upvote(s)</p>
            </div>
            <div className="py-2">
            {anime.content.map((paragraph, key) =>(
                <div key={key} className="max-w-sm rounded overflow-hidden shadow-lg border mx-auto">
                    <p>{paragraph}</p>
                </div>
            ))}
            </div>
            {user ?
                <AddAnimeCommentForm animeName={animeId} onAnimeUpdated={updatedAnime => setAnimeInfo(updatedAnime)} />
                :
                <button className="px-2 border bg-jadeGreen-900 hover:bg-cobaltBlue-800 font-bold rounded text-jadeGreen-700" onClick={() => navigate('/login')}>Log in to add a comment</button>
            }
            <CommentList comments={animeInfo.comments} />
        </div>
    )
}

export default AnimePage;