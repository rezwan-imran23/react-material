import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './PostDetail.css';
import Comments from '../Comments/Comments';
// import CommentDetails from '../CommentDetails/CommentDetails';


const PostDetail = () => {

    

    let {postDetail}= useParams();
    
    const [postDetails,setPostDetails]=useState({})
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postDetail}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setPostDetails(data))

    },[])

    
    


    return (
        <div className="App-header">

          <div className="detail">

            <h1 style={{color:"yellow"}}>Hot News</h1>
            <p>{postDetails.body}</p>

         </div>
        <h2>Comment</h2>
        <Comments></Comments>
        
        </div>
       
    );
};

export default PostDetail;   

        
           
            
        