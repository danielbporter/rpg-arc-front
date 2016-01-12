import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/lib/app-bar';

import increment from '../actionCreators/increment';

function mapStateToProps(state) {
  // console.log(state.ui.toString());
  return {
    counter: state.ui.get('homeClickCounter'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLeftButtonActivate: () => dispatch(increment()),
  };
}

class Navbar extends React.Component {
  getStyles() {
    return {
      // top: 0,
      zIndex: 1,
    };
  }

  render() {
    return (
      <AppBar
        title={this.props.counter.toString()}
        zDepth={0}
        position="fixed"
        onLeftIconButtonTouchTap={this.props.onLeftButtonActivate}
        style={this.getStyles()}
      />
    );
  }
}

Navbar.propTypes = {
  onLeftButtonActivate: React.PropTypes.func,
  counter: React.PropTypes.number,
};

Navbar.defaultProps = {
  counter: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
