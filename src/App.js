import React, { useState } from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"

//react-router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//toast
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"

//firebase
import firebase from "firebase/app"
import "firebase/auth"

//components

import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from './Context/UserContext';
import Footer from './Layout/Footer';
import Header from './Layout/Header';

import firebaseConfig from "./Config/firebaseConfig"
//init firebase
firebase.initializeApp(firebaseConfig)

const App = () => {

  const [user, setuser] = useState(null)

  return (
     <Router>
       <ToastContainer/>
       <UserContext.Provider value={{user, setuser}}>
    <Header/>
    <Switch>
      <Route exact path ="/" component= {Home} />
      <Route exact path ="/signin" component= {SignIn} />
      <Route exact path ="/signup" component= {SignUp} />
      <Route exact path ="*" component= {PageNotFound} />
     
    </Switch>
       </UserContext.Provider>
       <Footer/>
     </Router>
     
      
  );
}

export default App;
