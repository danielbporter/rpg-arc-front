import React from 'react';
import Widget from './Widget';

class CampaignView extends React.Component {

    getCampaign(){
        $.ajax({
            type: 'GET',
            beforeSend: function (request){
              request.setRequestHeader('Authorization','Bearer ' + localStorage.getItem('userToken'))
            },
            url: '/api/ping',
            dataType: 'json',
        success: function(response) {
        // Log the details of the Map.
            console.log(JSON.stringify(response));
            },
        error: function(response) {
            console.log("Error: ", JSON.stringify(response));
        }
        });
    }

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