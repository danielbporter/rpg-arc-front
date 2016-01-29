import React from 'react';
import Widget from './Widget';

class CreateCampaign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {campaignName: props.campaignName, system: props.system};
    }

    handleNameChange(e){
        this.setState({campaignName:e.target.value})
    }
    handleSystemChange(e){
        this.setState({system:e.target.value})
    }

    submitCreateCampaign(e) {
        var data = {
            campaignName: this.state.campaignName.trim(),
            system: this.state.system.trim()
        };
        $.ajax({
            type: 'POST',
            beforeSend: function (request){
              request.setRequestHeader('Authorization','Bearer ' + localStorage.getItem('userToken'))
            },
            url: '/api/campaign',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
            success: function(){
                console.log("success");
            },
            error: function(){
                console.log("Failed to create campaign")
            }

        });

    }

  render() {
    return (
        <Widget>
            <div>
               <h3>Create Campaign</h3>
          <form className="createCampaign" onSubmit={this.submitCreateCampaign.bind(this)}>
            <input
                type="text"
                placeholder="A name for the Campaign"
                value={this.state.campaignName}
                onChange={this.handleNameChange.bind(this)}
                required
            />
            <input
                type="text"
                placeholder="Your Last Name"
                value={this.state.system}
                onChange={this.handleSystemChange.bind(this)}
                required
            />
            <input type="submit" value="Create" />
      </form>
                </div>
            </Widget>
    );
  }
}
CreateCampaign.propTypes = {campaignName:React.PropTypes.string, system:React.PropTypes.string};
CreateCampaign.defaultProps = {
    campaignName:'',
    system: ''
};
export default CreateCampaign;