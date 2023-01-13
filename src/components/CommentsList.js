const CommentsList = ({comments}) =>{
    return(
        <div>
            <h3 className="text-xl">Comments:</h3>
            {comments.map((comment, key) =>(
                <div className="mb-2 max-w-sm rounded overflow-hidden shadow-lg border mx-auto" key={key}>
                    <h4>{comment.postedBy?.substring(0, comment.postedBy.indexOf("@"))}</h4>
                    <p>{comment.text}</p>
                </div>
            ))}
        </div>
    )
}

export default CommentsList;