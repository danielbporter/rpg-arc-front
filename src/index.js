import React from 'react';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import initializeStore from './store';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import auth from './auth';
import api from './api'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components-core/App';
import Home from './components-core/Home'
import About from './components-core/About'
import Login from './components-core/Login'
import Logout from './components-core/Logout'
import IndexDashboard from './components-core/Dashboards/IndexDashboard'
import CampaignDashboard from './components-core/Dashboards/CampaignDashboard'
import CharacterDashboard from './components-core/Dashboards/CharacterDashboard'
import SessionDashboard from './components-core/Dashboards/SessionDashboard'


// ranfiltrator
import RanApp from './components/RanApp';

const store = initializeStore();

function requireAuth() {
  if (!auth.loggedIn()) {
    window.location.href = '/#/login';
  }
}

function loadUserData(){
    api.get('user');
}

ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="login" component={Login}/>
            <Route path="logout" component={Logout} onEnter={auth.logout}/>
            <Route path="dashboard" onEnter={requireAuth}>
                <IndexRoute component={IndexDashboard} onEnter={loadUserData}/>
                <Route path="campaign/:campaignName" component={CampaignDashboard}/>
                <Route path="character/:campaignName(/:characterName)" component={CharacterDashboard}/>
                <Route path="session/:campaignName(/:sessionName)" component={SessionDashboard}/>
            </Route>
            <Route path="ranfiltrator" component={RanApp}/>
            <Route path="about" component={About}/>
        </Route>
        </Router>
        </Provider>,
  document.getElementById('root')
);