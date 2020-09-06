import React from 'react';
import './CommentDetails.css'

const CommentDetails = (props) => {
    const {name,id,email,body}=props.comment;
    const commentStyle={
        
        border : '1px solid #61DAFB',
        padding: '20px',
        margin: '10px',
        borderRadius: '10px',
        width: '70%',
        alignItems: 'center',
        backgroundColor: 'Gray',
        borderStyle: 'none'
    }   
        
     const cmntBox = {
        backgroundColor:"#282C34", 
        padding:"10px",
        borderRadius: '10px',
        color: 'yellowGreen',
        fontStyle: 'italic'
     }

    return (
        
        <div className="App-header">
       
        <div style={commentStyle}>
    
            <img class="peopleImg" src="https://images.pexels.com/photos/3760917/pexels-photo-3760917.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" alt=""/>
            <p><small> By : {name}</small></p>
            <p><small>Email : {email}</small></p>
            
            <p style={cmntBox}><small>{body}</small></p>
            
        </div>
        
            

        </div>
       
        
    );
};

export default CommentDetails;