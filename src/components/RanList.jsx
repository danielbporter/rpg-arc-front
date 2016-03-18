import React, { Component, PropTypes } from 'react';
import RanListItem from './RanListItem';

class RanList extends Component {
  render() {
    const style = {
      //backgroundColor: '#333300',
    };

    const items = this.props.children.map((item) => <RanListItem children={item} />);

    return (
      <div style={style}>
        {items}
      </div>
    );
  }
}

RanList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RanList;
