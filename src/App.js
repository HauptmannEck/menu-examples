import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Split from "./Split";
import Vert from "./Vert";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/split" component={Split}/>
                    <Route exact path="/vert" component={Vert}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
