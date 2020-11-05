import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './default.scss';


//layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import AdminLayout from './layouts/AdminLayout';


//pages
import Homepage from './pages/Homepage';
import Search from './pages/Search';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Admin from './pages/Admin';
import './default.scss';


function App() {
    return (
      <div className="App">
          <Router>
            <Switch>
              <HomepageLayout>
                <Route exact path ="/login" render={props => <Login {...props} />} />
                <Route exact path ="/registration" render={props => <Registration {...props} />} />
                <Route exact path ="/signin" render={props => <Signin {...props} />} />
                <Route exact path ="/admin" render={props => <Admin {...props} />} />
                <Route exact path ="/search" render={props => <Search {...props} />} />
                <Route exact path ="/homepage" render={props => <Homepage {...props} />} />
              </HomepageLayout>
            </Switch>
          </Router>
      </div>
    );
  }


 export default App;
