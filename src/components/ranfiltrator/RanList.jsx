import React, { Component, PropTypes } from 'react';
import RanListItem from './RanListItem';

class RanList extends Component {
  render() {
    const style = {
      //backgroundColor: '#333300',
    };

    const items = this.props.children.map((item) =>
      <RanListItem name={item.name} description={item.description} genre={item.genre} />);

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
