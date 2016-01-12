import React from 'react';
import { connect } from 'react-redux';

import LeftNav from 'material-ui/lib/left-nav';
import Paper from 'material-ui/lib/paper';
import SideBarHiddenLeftNav from './SideBarHiddenLeftNav';

function mapStateToProps(state) {
  return {
    width: state.ui.get('sidebarWidth')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // doThing: () => dispatch(createAction()),
  };
}

class Sidebar extends React.Component {
  getStyles() {
    return {
      zIndex: 0,
      backgroundColor: 'grey',
      display: 'block',
      width: this.props.width
    };
  }

  // render() {
  //   return (
  //     <div>
  //       <LeftNav
  //         className="sidebar"
  //         zDepth={0}
  //         docked
  //         position="fixed"
  //         // width={this.props.width}
  //         style={this.getStyles()}
  //       >
  //         <SideBarHiddenLeftNav />
  //       </LeftNav>
  //     </div>
  //   );
  // }

  render() {
    const style = {
      height
    };

    return (
      <Paper />
    );
  }

}

Sidebar.propTypes = {
  width: React.PropTypes.number
};

// Sidebar.defaultProps = {
//   width: 200,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
