import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class LeftNavUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  render() {
    return (
      <div>
        <LeftNav
          docked={true}
          width={100}
          open={this.state.open}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </LeftNav>
      </div>
    );
  }
}
