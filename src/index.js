// Required framework dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import initializeStore from './store';

// authorization dependencies
import auth from './auth';
import api from './api';

// tapEventPlugin for Material-UI touch capabilities
// will no longer be needed when React supports touch events natively
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// application core dependencies
import App from './components/core/App';
import Home from './components/core/Home';
import About from './components/core/About';
import Login from './components/core/Login';
import Logout from './components/core/Logout';
import IndexDashboard from './components/core/dashboards/IndexDashboard';
import CampaignDashboard from './components/core/dashboards/CampaignDashboard';
import CharacterDashboard from './components/core/dashboards/CharacterDashboard';
import SessionDashboard from './components/core/dashboards/SessionDashboard';

// Test pages
import TestIndex from './components/core/TestIndex';

// TestDashboard
import TestDashboard from './components/core/dashboards/TestDashboard';
//import Blueprint from './components/core/dashboards/Blueprint'

// ranfiltrator
import RanApp from './components/ranfiltrator/RanApp';

const store = initializeStore();

function requireAuth() {
  if (!auth.loggedIn()) {
    window.location.href = '/#/login';
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="logout" component={Logout}/>
        <Route path="dashboard" onEnter={requireAuth}>
          <IndexRoute component={IndexDashboard} />
          <Route path="campaign/:campaignName" component={CampaignDashboard} />
          <Route path="character/:campaignName(/:characterName)" component={CharacterDashboard} />
          <Route path="session/:campaignName(/:sessionName)" component={SessionDashboard} />
      </Route>
      <Route path="test">
        <IndexRoute component={TestIndex} />
        <Route path="ranfiltrator" component={RanApp} />
        <Route path="dashboard" component={TestDashboard} />
      </Route>
        <Route path="about" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
