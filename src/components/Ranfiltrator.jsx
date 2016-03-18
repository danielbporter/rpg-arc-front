import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RanForm from './RanForm';
import RanList from './RanList';

function mapStateToProps(state) {
  return {
    genre: state.get('genre'),
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

class Ranfiltrator extends Component {
  filteredContent(content, genre) {
    if (genre === 'any') {
      return content;
    } else {
      return content.filter((item) => item.hasOwnProperty('genre') && item.genre === genre);
    }
  }

  render() {
    const itemsToShow = this.filteredContent(this.props.contentList, this.props.genre);
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
  genre: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Ranfiltrator);
