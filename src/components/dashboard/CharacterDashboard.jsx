import React from 'react';
import Dashboard from './Dashboard'

class CharacterDashboard extends React.Component {

  render() {
      let {campaignName, characterName} = this.props.params;
    return (
      <Dashboard>
          <h1>This is the character Dashboard</h1>
          <h2>{characterName} from {campaignName}</h2>
      </Dashboard>
    );
  }
}

export default CharacterDashboard;