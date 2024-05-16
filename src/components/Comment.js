import React from "react";

function Comment({user, comment}){
    return (
        <div className="comment">
            <h3 className="user">{user}</h3>
            <p className="user-comment">{comment}</p>
        </div>
    )
}

export default Comment;