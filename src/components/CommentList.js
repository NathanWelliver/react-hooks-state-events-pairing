import React from "react";
import Comment from "./Comment"

function CommentList({comments}) {

    return (
        <div className="comments">
            {comments.map((comment, index) => (
                <Comment 
                    key={index}
                    user={comment.user}
                    comment={comment.comment}
                />
            ))}
        </div>
    )
}

export default CommentList;