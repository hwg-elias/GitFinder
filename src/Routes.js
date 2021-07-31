
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Repositories from './Pages/Repositories';
import Home from './Pages/Home'

function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/repositories" component={Repositories} />
            </Switch>
        </Router>
    );
};

export default Routes;