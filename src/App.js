import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import firebase from "firebase/app";
import "firebase/auth";

import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";

import { UserContext } from "./Context/UserContext";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Navbar";

import firebaseConfig from "./Config/Firebaseconfig";

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer></Footer>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
