import React from 'react';

class Home extends React.Component
{
    constructor(props) {    /* Note props is passed into the constructor in order to be used */
        super(props);
        this.state = {
            lock: props.lock
        };
    }
  // ...
  showLock() {
    // We receive lock from the parent component in this case
    // If you instantiate it in this component, just do this.lock.show()
    this.props.lock.show();
  }

  render() {
    return (
    <div className="login-box">
      <a onClick={this.showLock}>Sign In</a>
    </div>);
  }
}

export default Home;

