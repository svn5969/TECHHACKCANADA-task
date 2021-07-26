import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Movies from './Components/Content/Movies/Movies';
import Series from './Components/Content/Series/Series';
import SignIn from './Components/SignIn/SignIn';

export const UserContext = createContext();

function App(props) {

  const [loggedinUser, setLoggedinUser] = useState({});
  return (
    <UserContext.Provider value ={[loggedinUser, setLoggedinUser]}>
      <Router>
    <div>
     
       <Switch>
         <Route exact path="/">
             <Home></Home>
         </Route>

         <Route path="/movies">
             <Movies></Movies>
         </Route>
         

         <Route path="/series">
             <Series></Series>
         </Route>

         <Route path="/signin">
            <SignIn></SignIn>
          </Route>

       </Switch>
     
    
    </div>
    </Router>
    </UserContext.Provider>

  );
}

export default App;


