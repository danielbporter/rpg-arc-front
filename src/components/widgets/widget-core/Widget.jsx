import React from 'react';
import Paper from 'material-ui/lib/paper';

class Widget extends React.Component {
    constructor(props) {
        super(props);
    }


    getStyle() {
    return {
      height: 200,
      width: 465,
      margin: 10,
      border: 5,
      borderColor: '#000000',
      backgroundColor: '#DDDDDD',
    };
  }

  render(){
    return (
        // switch to css mdl
            <div className="mdl-card mdl-shadow--2dp">
                {this.props.children}
            </div>
    );
  }
}

export default Widget;