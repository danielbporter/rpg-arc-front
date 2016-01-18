import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';




class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {first_name: props.first_name, last_name: props.last_name
            , email: props.email, password: props.password};
    }

    handleFirstNameChange(e){
        this.setState({first_name:e.target.value})
    }
    handleLastNameChange(e){
        this.setState({last_name:e.target.value})
    }
    handleEmailChange(e){
        this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }

    submitRegistration(e) {
        var data = {
            first_name: this.state.first_name.trim(),
            last_name: this.state.last_name.trim(),
            email: this.state.email.trim(),
            password : this.state.password.trim()
        };
        $.ajax({
            type: 'POST',
            url: '/api/register',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
            success: function(){
                console.log("success")
            },
            error: function(){
                console.log("Failed to register")
            }

        });

    }

  render() {
    return (
      <div className="mdl-card mdl-shadow--4dp center">
          <div className="mdl-card__title">
               <h3>User Registration</h3>
            </div>
        <div className="mdl-card__supporting-text">
          <form className="registrationForm" onSubmit={this.submitRegistration.bind(this)}>
            <input
                type="text"
                placeholder="Your first name"
                value={this.state.first_name}
                onChange={this.handleFirstNameChange.bind(this)}
            />
            <input
                type="text"
                placeholder="Your Last Name"
                value={this.state.last_name}
                onChange={this.handleLastNameChange.bind(this)}
            />
              <input
                type="email"
                placeholder="Your Email"
                value={this.state.email}
                onChange={this.handleEmailChange.bind(this)}
            />
              <input
                type="text"
                placeholder="Your password"
                value={this.state.password}
                onChange={this.handlePasswordChange.bind(this)}
            />
            <input type="submit" value="Post" />
      </form>
        </div>
      </div>
    );
  }
}
Registration.propTypes = {first_name:React.PropTypes.string, last_name:React.PropTypes.string
                            ,email:React.PropTypes.string, password:React.PropTypes.string};
Registration.defaultProps = {
    first_name:'',
    last_name: '',
    email:'',
    password:''
};
export default Registration;