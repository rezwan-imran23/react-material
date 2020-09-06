


import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';



const Post = (props) => {
    const {title,id}= props.post;

    const history= useHistory();
    const handleClick = (postId)=>{
        const url = `/post/${postId}`
        history.push(url)
    }

    const postStyle = {
        textAlign: 'center',
        border : '1px solid #61DAFB',
        padding: '20px',
        margin: '20px',
        borderRadius: '10px',
        width: '70%'
        
    }

    const idStyle ={
        backgroundColor:'white',
        padding: '20px',
        borderRadius: '8px',
        color: 'black',
        
        margin: '0px 250px 20px 250px'
        

    }   
    return (
        <div style ={postStyle} >
            <p>{title}</p>
            <p style={idStyle}><Link to={`/post/${id}`}> See detail {id}</Link></p>
            

          
            <Button onClick={()=>handleClick(id)} variant="contained" color="primary">Read More</Button>

            
            
        </div>
    );
};

export default Post;

