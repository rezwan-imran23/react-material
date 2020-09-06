import React, { } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import PostDetail from './Components/PostDetail/PostDetail';
import Comments from './Components/Comments/Comments';








function App() {
  
  return (
    <div className="App-header">
      
  
      
   <Router>
     <Switch>
       <Route  path = "/home">
         <Home/>
       </Route>

       <Route  path = "/post/:postDetail">
         <PostDetail/>
       </Route>

       

       <Route exact path = "/comment/:postDetail">
         <Comments/>
       </Route> 
       
       
       <Route exact path = "/">
         <Home/>
       </Route>


       <Route path = "*">
        <NotFound/>
       </Route>
       
     </Switch>
   </Router>
    
    </div>
  );
}

export default App;
   
      

       

       
      
        
      
   