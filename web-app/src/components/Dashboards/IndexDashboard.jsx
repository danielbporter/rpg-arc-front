import React from 'react';
import Dashboard from './Dashboard'
import CreateCampaign from './../Widgets/CreateCampaign'

class IndexDashboard extends React.Component {

  render() {
    return (
      <Dashboard>
          <CreateCampaign/>
      </Dashboard>
    );
  }
}

export default IndexDashboard;