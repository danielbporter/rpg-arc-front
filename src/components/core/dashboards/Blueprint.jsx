import React, { Component } from 'react';
import Dashboard, {addWidget} from 'react-dazzle';
import CustomFrame from '../../widgets/widget-core/CustomFrame'

import Note from '../../widgets/Note';

class Blueprint extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // Widgets that are available in the dashboard
      widgets: {
        NoteWidget: {
          type: Note,
          title: 'Note',
        }
      },
      // Layout of the dashboard
      layout: {
        rows: [{
          columns: [{
            className: 'col-md-12 col-sm-12 col-xs-12',
            widgets: [{key: 'NoteWidget'}],
          }],
        },],
      },
      editMode: false,
      isModalOpen: false,
      addWidgetOptions: null,
    };
  }

  /**
   * When a widget is removed, the layout should be set again.
   */
  onRemove = (layout) => {
    this.setState({
      layout: layout,
    });
  };

  /**
   * Adds new widgget.
   */
  onAdd = (layout, rowIndex, columnIndex) => {
    // Open the AddWidget dialog by seting the 'isModalOpen' to true.
    // Also preserve the details such as the layout, rowIndex, and columnIndex  in 'addWidgetOptions'.
    //  This will be used later when user picks a widget to add.
    this.setState({
      isModalOpen: true,
      addWidgetOptions: {
        layout,
        rowIndex,
        columnIndex,
      },
    });
  }

  /**
   * When a widget moved, this will be called. Layout should be given back.
   */
  onMove = (layout) => {
    this.setState({
      layout: layout,
    });
  }

  /**
   * This will be called when user tries to close the modal dialog.
   */
  onRequestClose = () => {
    this.setState({
      isModalOpen: false,
    });
  }

  render() {
    return (
    <Container>
      <AddWidgetDialog widgets={this.state.widgets} isModalOpen={this.state.isModalOpen} onRequestClose={this.onRequestClose} onWidgetSelect={this.handleWidgetSelection}/>
      <Header />
      <EditBar onEdit={this.toggleEdit} />
      <Dashboard
        frameComponent={CustomFrame}
        onRemove={this.onRemove}
        layout={this.state.layout}
        widgets={this.state.widgets}
        editable={this.state.editMode}
        onAdd={this.onAdd}
        onMove={this.onMove}
        addWidgetComponentText="Add New Widget"
        />

    </Container>
    );
  }

  /**
   * Toggeles edit mode in dashboard.
   */
  toggleEdit = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };

  /**
   * When user selects a widget from the modal dialog, this will be called.
   * By calling the 'addWidget' method, the widget could be added to the previous requested location.
   */
  handleWidgetSelection = (widgetName) => {
    const {layout, rowIndex, columnIndex} = this.state.addWidgetOptions;

    /**
     * 'AddWidget' method gives you the new layout.
     */
    this.setState({
      layout: addWidget(layout, rowIndex, columnIndex, widgetName),
    });

    // Close the dialogbox
    this.onRequestClose();
  }
}

export default App;