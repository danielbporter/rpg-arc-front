import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/lib/raised-button';
import Divider from 'material-ui/lib/divider';
import DiceButton from './DiceButton';
import { diceRoll, resetRoll } from '../actionCreators/Dice';
import { List } from 'immutable';

function mapStateToProps(state) {
  return {
    total: state.diceWidget.get('total'),
    history: state.diceWidget.get('history'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addRoll: (diceValue) => dispatch(diceRoll(diceValue)),
    resetRoll: () => dispatch(resetRoll()),
  };
}

class DiceWidget extends React.Component {
  rollHistory() {
    if (this.props.history.size === 0) {
      return '...';
    }
    // console.log(this.props.history.toString());
    const die = this.props.history
      // even indexed elements are dice
      .filter((v, i) => i % 2 === 0)
      // make them look like (20):
      .map((v) => '(' + v + '): ');

    // console.log(die.toString());

    const rolls = this.props.history
      // odd indexed elements are rolls
      .filter((v, i) => i % 2 === 1)
      // convert to string
      .map((v) => String(v));

    return die.zipWith((d, r) => d + r, rolls).join(', ');
  }

  render() {
    const history = this.rollHistory();

    return (
      <div className="dice-widget">
        <DiceButton value={4} roll={this.props.addRoll} />
        <DiceButton value={6} roll={this.props.addRoll} />
        <DiceButton value={8} roll={this.props.addRoll} />
        <DiceButton value={10} roll={this.props.addRoll} />
        <DiceButton value={12} roll={this.props.addRoll} />
        <DiceButton value={20} roll={this.props.addRoll} />
        <DiceButton value={100} roll={this.props.addRoll} />

        <Divider />
        <p>{history}</p>
        <Divider />
        <p>{this.props.total}</p>
        <Divider />
        <RaisedButton label="Reset" onTouchTap={this.props.resetRoll} />
      </div>
    );
  }
}

DiceWidget.propTypes = {
  addRoll: React.PropTypes.func,
  resetRoll: React.PropTypes.func,
  total: React.PropTypes.number,
  history: React.PropTypes.instanceOf(List),
};

export default connect(mapStateToProps, mapDispatchToProps)(DiceWidget);
