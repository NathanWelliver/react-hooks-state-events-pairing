import React, {useState} from "react";
import CommentList from "./CommentList";

function Info({title, views, date, likes, dislikes, comments}){
    const [likeCount, setLikeCount] = useState(likes)
    const [dislikeCount, setDislikeCount] = useState(dislikes)
    const [showComments, setShowComments] = useState(true);

    function handleLikeCount() {
        setLikeCount(likeCount +1)
    }
    function handleDislikeCount() {
        setDislikeCount(dislikeCount +1)
    }
    function toggleComments(){
        setShowComments(!showComments)
    }

    return (
    <div className="info">
        <div className="video-info">
            <h2>{title}</h2>
            <h5>{views} | {date}</h5>
        </div>
        <div className="buttons">
            <button className="likes" onClick={handleLikeCount}>
                {likeCount} 👍
            </button>
            <button className="dislikes" onClick={handleDislikeCount}>
                {dislikeCount} 👎
            </button>
        </div>
        <br />
        <button className="comments" onClick={toggleComments}>
            {showComments ? "Hide Comments" : "Show Comments"}
        </button>
        <br />
            {showComments && (
            <>
                <h2>Comments</h2>
                <CommentList comments={comments} />
            </>
        )}
    </div>
    )
}

export default Info;