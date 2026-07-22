import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";


export default function Comment() {
    let [comments, setComment] = useState([{
        username: "@sk",
        remark: "great job!",
        ratings: 4
    }]);

    let addNewComment = (comment) => {
        setComment((currComments) => [...currComments, comment]);
    };



    return (
        <>
            <div>
                <h3>All Comments!</h3>
                {comments.map((comment, idx) => (
                    <div className="comment" key={idx}>
                    <span>{comment.remark}</span>
                    &nbsp;
                    <span>(rating = {comment.ratings})</span>
                    <p> - {comment.username}</p>
                </div>
                ))}
            </div>
            <CommentsForm addNewComment={addNewComment}></CommentsForm>
        </>
    )
}