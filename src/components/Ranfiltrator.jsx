import React, { Component, PropTypes } from 'react';
import RanForm from './RanForm';
import RanList from './RanList';

class Ranfiltrator extends Component {
  render() {
    const itemsToShow = this.props.contentList;
    return (
      <div>
        <RanForm />
        <RanList>
          { itemsToShow }
        </RanList>
      </div>
    );
  }
}

Ranfiltrator.propTypes = {
  contentList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Ranfiltrator;
