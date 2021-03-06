import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';


const Home = () => {
    const [post, setPost]=useState([])

    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <div className="App-header">
            <h3>Posts : {post.length}</h3>
            {
                post.map(post => <Post post= {post}></Post>)
            }
            
        </div>
    );
};

export default Home;