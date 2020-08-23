import React, {Component} from 'react';
import IndexPage from './components/IndexPage/IndexPage';
import AboutUs from './components/AbouteUs/AboutUs';
import User from './components/User/User';
import Navbar from './components/Navbar/Navbar';

import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component {


render(){
  return (
    <BrowserRouter>
    <div>
    <Navbar/>
      <Switch>
        <Route path="/" exact component={IndexPage}/>
        <Route path="/user" component={User}/>
        <Route path="/aboutus" component={AboutUs}/>
      </Switch>
    </div>
    </BrowserRouter>
    
  );
}


}


export default App;
