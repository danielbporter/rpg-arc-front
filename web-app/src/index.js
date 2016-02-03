import React from 'react';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

import auth from './auth';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components/App';
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Logout from './components/Logout'
import IndexDashboard from './components/Dashboards/IndexDashboard'
import CampaignDashboard from './components/Dashboards/CampaignDashboard'
import CharacterDashboard from './components/Dashboards/CharacterDashboard'
import SessionDashboard from './components/Dashboards/SessionDashboard'

const store = createStore();

function requireAuth() {
  if (!auth.loggedIn()) {
    window.location.href = '/#/login';
  }
}

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="login" component={Login}/>
            <Route path="logout" component={Logout}/>
            <Route path="dashboard" onEnter={requireAuth}>
                <IndexRoute component={IndexDashboard}/>
                <Route path="campaign/:campaignName" component={CampaignDashboard}/>
                <Route path="character/:campaignName(/:characterName)" component={CharacterDashboard}/>
                <Route path="session/:campaignName(/:sessionName)" component={SessionDashboard}/>
            </Route>
            <Route path="about" component={About}/>
        </Route>
  </Router>
  </Provider>,
  document.getElementById('main-app')
);
