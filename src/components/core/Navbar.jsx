import React from 'react';
//import { connect } from 'react-redux';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import Menu from 'material-ui/lib/svg-icons/navigation/menu';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';

//import auth from '../../auth';

//import auth from '../../auth'
import {Link} from 'react-router'


function mapDispatchToProps(dispatch) {
  return {
    onLeftButtonActivate: () => dispatch(increment()),
  };
}

class Navbar extends React.Component {

    constructor(props) {
    super(props);
    this.state = {open: props.open};
    }



  getStyles() {
    return {
      // top: 0,
      zIndex: 1
    };
  }


    handleNavToggle(){
        this.setState({open: !this.state.open});
    }

    handleClose(){
        this.setState({open: false})
    }

    handleSignOut(){
        window.location.href = '/#/logout'
    }


  render() {
    return (
        <div>
            <LeftNav
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={open => this.setState({open})}
                >
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
        </LeftNav>
        <header>
        <AppBar
            title="RPG Architect"
            iconElementLeft={<IconButton onTouchTap={this.handleNavToggle.bind(this)}><Menu/></IconButton>
            }
            iconElementRight={
            <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                    <MenuItem primaryText="Help" />
            </IconMenu>

    }/>
        </header>
            </div>

    );
  }
}

Navbar.propTypes = {
  onLeftButtonActivate: React.PropTypes.func,
    open: React.PropTypes.bool

};

Navbar.defaultProps = {
    open: false
};

export default Navbar;
