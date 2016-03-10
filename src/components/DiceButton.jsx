import React from 'react';
import FloatingActionButton from 'material-ui/lib/floating-action-button';

class DiceButton extends React.Component {
  getStyle() {
    return {
      margin: 5,
    };
  }

  rolling(e) {
    // console.log(this.props);
    this.props.roll(this.props.value);
  }

  render() {
    return (
      <FloatingActionButton
        onTouchTap={e => this.rolling(e)}
        style={this.getStyle()}
      >
        {this.props.value}
      </FloatingActionButton>
    );
  }
}

DiceButton.propTypes = {
  value: React.PropTypes.number.isRequired,
  roll: React.PropTypes.func.isRequired,
};

export default DiceButton;
