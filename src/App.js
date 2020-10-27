import React from 'react';
//import bootstrap css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import bootstrap bundle js
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';

const App = ()=>{
  return(
    <div>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/service' component={Service} />
      <Route exact path='/contact' component={Contact} />
      <Redirect to = '/'/>

    </Switch>
        <Footer/>
    </div>
  )
}

export default App;
