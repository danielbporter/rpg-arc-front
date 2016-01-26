import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

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
      zIndex: 1
    };
  }

  signOut(){
    localStorage.removeItem('userToken');
      window.location.href = '/';
  }

  render() {
    return (
       <AppBar
    title="Title"
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" onClick={this.signOut.bind(this)}/>
      </IconMenu>
    }
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
