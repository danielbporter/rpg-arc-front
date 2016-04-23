import React from 'react';
import Widget from './widget-core/Widget';

class CampaignView extends React.Component {

  render(){
    return (
        <Widget>
            <div>
            <h1>This is a test</h1>
            <button className="mdl-button" onClick={this.getCampaign.bind(this)}>Test</button>
        </div></Widget>
    );
  }
}

export default CampaignView;