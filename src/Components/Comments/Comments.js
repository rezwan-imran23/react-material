import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetails from '../CommentDetails/CommentDetails';

const Comments = () => {
    let {postDetail}= useParams();

    const [comment, setComment]= useState([])

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postDetail}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    },[])

    return (
        <div>
             {
             comment.map(comment => <CommentDetails comment={comment}></CommentDetails>)
         }
        </div>
    );
};

export default Comments;