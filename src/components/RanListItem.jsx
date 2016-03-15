import React, { Component, PropTypes } from 'react';

class RanListItem extends Component {

  getStyle() {
    return {
      border: 'solid black 1px',
      minWidth: 600,
      minHeight: 80,
      padding: 5,
      margin: 10,
    };
  }

  render() {
    const style = this.getStyle();

    const name = this.props.name;
    const shortDescription = this.props.description;

    return (
      <div style={ style }>
        <p>{name}</p>
        <p>{shortDescription}</p>
      </div>
    );
  }
}

RanListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default RanListItem;
