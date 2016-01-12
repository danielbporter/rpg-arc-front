import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

// put in the top of Sidebar so when Sidebar is under the AppBar
// it will look like Sidebar is under the Appbar

export default class SidebarHiddenLeftNav extends React.Component {
  render() {
    return (
      <AppBar showMenuIconButton={false} />
    );
  }
}
