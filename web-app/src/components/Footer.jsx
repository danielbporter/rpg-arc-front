import React from 'react';

class Footer extends React.Component {


    getStyle() {
    return {
      bottom: 0,
        position:'absolute'
    };
  }

  render(){
    return (
        <footer className="mdl-mini-footer" style={this.getStyle()}>
            <h1>This is the footer</h1>
        </footer>
    );
  }
}

export default Footer;