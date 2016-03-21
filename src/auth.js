var lock = new Auth0Lock('ICf6JzrB6yHqkaSWFzJN1sAWwUINpbvJ', 'cyve.auth0.com');
import api from './api'

module.exports =
{
  login() {
        lock.show({
            container: 'lock-container'}, function (err, profile, token) {
            localStorage.setItem('userToken', token);
            localStorage.setItem('userProfile', profile);
            console.log(profile);
            window.location.href = '/#/dashboard'
        });
  },

  getLock(){
      return lock
  },

  getToken() {
        return localStorage.getItem('userToken')
  },

  getProfile(){
      return localStorage.getItem('userProfile')
  },

  logout(cb) {
      localStorage.clear();
  },

  loggedIn() {
      // add time validation of token
      var token = localStorage.getItem('userToken');
      if (token == null)
      {return false}
      else {return true}
  },

  onChange() {}
};