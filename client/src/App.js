import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavigationBar } from "./components/NavigationBar";
import  Home  from "./components/pages/Home";
import { NoMatch } from "./components/pages/NoMatch";
import { About } from "./components/pages/About";
//import Blog from "./components/pages/Blog";
import {Contact} from "./components/pages/Contact";
import './App.css';
import { Layout } from './components/Layout'
import { Jumbotron } from './components/Jumbotron'

class App extends Component {
  render() {
    return (
      <React.Fragment>  
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
