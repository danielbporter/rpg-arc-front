import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: props.email, password: props.password, error_message:props.error_message};
    }

    handleEmailChange(e){
        this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }

    submitLogin(e) {
        var data = {
            userid: this.state.email.trim(),
            password : this.state.password.trim()
        };
        $.ajax({
            type: 'POST',
            url: '/api/login',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
            success: function(response){

                    if(response['result'] == true){
                        console.log(JSON.stringify(response));
                        location.href = '/';
                    }
                    else{
                        console.log("Failed to Login");
                        location.href ='/#/login';
                    }
            },
            error: function(){
                console.log("Failed to login");
            }

        });

    }

  render() {
    return (
      <div className="mdl-card mdl-shadow--4dp center">
          <div className="mdl-card__title">
               <h3>Please Login</h3>
            </div>
        <div className="mdl-card__supporting-text">
          <form className="loginForm" onSubmit={this.submitLogin.bind(this)}>
              <p>{this.state.error_message}</p>
              <input
                type="email"
                placeholder="Your Email"
                value={this.state.email}
                onChange={this.handleEmailChange.bind(this)}
                required
            />
              <input
                type="password"
                placeholder="Your password"
                value={this.state.password}
                onChange={this.handlePasswordChange.bind(this)}
                required
            />
            <input type="submit" value="Login" />
      </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {email:React.PropTypes.string, password:React.PropTypes.string, error_message:React.PropTypes.string};
Login.defaultProps = {
    email:'',
    password:'',
    error_message:''};
export default Login;