import React from 'react';
import Dashboard from './Dashboard'
import CreateCampaign from '../../widgets/CreateCampaign'
import Note from '../../widgets/Note'

class IndexDashboard extends React.Component {

  render() {
    return (
      <Dashboard>
          <CreateCampaign/>
          <Note/>
      </Dashboard>
    );
  }
}

export default IndexDashboard;