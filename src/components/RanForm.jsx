import React, { Component } from 'react';

const genres = {
  any: {
    
  }
}

class RanForm extends Component {
  constructor() {
    super();
    this.genre = 'any';
  }

  getStyle() {
    return {
      border: 'solid black 1px',
    };
  }

  handleSelect() {
    console.log('Selection!');
  }

  render() {
    const style = this.getStyle();

    return (
      <div style={style}>
        <form onChange={this.handleSelect}>
          <label>Genre</label>
          <select>
            <option value="any">Any</option>
            <option value="fantasy">Fantasy</option>
            <option value="science-fiction">Science Fiction</option>
          </select>
        </form>
      </div>
    );
  }
}

export default RanForm;
