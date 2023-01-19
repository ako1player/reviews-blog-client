import axios from "axios";
import { useState } from "react";
import useUser from "../hooks/useUser";

const AddAnimeCommentForm = ({animeName, onAnimeUpdated}) =>{
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const {user} = useUser();
    
    const addComment = async () =>{
        const token = user && await user.getIdToken();
        const headers = token ? {authtoken: token} : {};
        const response = await axios.post(`https://reviews-blog.herokuapp.com/api/anime/${animeName}/comments`,{
            postedBy: name,
            text: comment,
        }, {headers});
        const updatedAnime = await response.data;
        onAnimeUpdated(updatedAnime);
        setName("");
        setComment("");
    }

    return(
        <div className="pb-2">
            <h3 className="text-xl">Add Comment</h3>
            {user && <p>You are posting as {user.email}</p>}
            <div>
                <textarea className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Write you comment here..."
                rows="4"
                cols="50"
                value={comment}
                onChange={e => setComment(e.target.value)}
                />
            </div>
            <div>
            <button className="px-2 border bg-jadeGreen-900 hover:bg-cobaltBlue-800 font-bold rounded text-jadeGreen-700" onClick={addComment}>Post Comment</button>
            </div>
        </div>
    )
}

export default AddAnimeCommentForm;