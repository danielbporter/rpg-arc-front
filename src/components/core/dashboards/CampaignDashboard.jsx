import React from 'react';
import Dashboard from './Dashboard'

class CampaignDashboard extends React.Component {



  render() {
      let {campaignName} = this.props.params;
    return (
      <Dashboard>
          <h1>This is the campaign Dashboard</h1>
          <h2>{campaignName}</h2>
      </Dashboard>
    );
  }
}

export default CampaignDashboard;