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
            <Paper style={this.getStyle()}>
                {this.props.children}
            </Paper>
    );
  }
}
Widget.propTypes= {children: React.PropTypes.element.isRequired};

export default Widget;