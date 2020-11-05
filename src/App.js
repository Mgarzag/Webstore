import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
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
import Admin from './pages/Admin';
import './default.scss';


function App() {
    return (
      <div className="App">
          <Switch>
            <Route exact path="/" render={() => (
              <HomepageLayout>
                <Homepage />
              </HomepageLayout>
            )} />
            <Route exact path="/search" render={() => (
            <MainLayout>
              <Search />
            </MainLayout>
          )} />
            <Route path="/registration" render={() => (
              <MainLayout>
                <Registration />
              </MainLayout>
            )} />
            <Route path="/login" render={() => (
              <MainLayout>
                <Login />
              </MainLayout>
            )} />
             <Route path="/admin" render={() => (
            //<WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            //</WithAdminAuth>
          )} />
          </Switch>
      </div>
    );
  }


 export default App;
