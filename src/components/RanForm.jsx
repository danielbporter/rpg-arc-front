import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Select from 'react-select';
import { changeRanfiltratorFilters } from '../actions/ActionCreators';

function mapStateToProps(state) {
  return {
    genre: state.get('genre'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    formChange: (field, newValue) => dispatch(changeRanfiltratorFilters(field, newValue)),
  };
}

const genres = [
  {
    value: 'any',
    label: 'Any',
  },
  {
    value: 'fantasy',
    label: 'Fantasy',
  },
  {
    value: 'scifi',
    label: 'Science Fiction',
  },
];

class RanForm extends Component {

  onGenreChange(newGenre) {
    // console.log('changeGenre');
    // console.log(newGenre);
    // console.log(this.props);
    this.props.formChange('genre', newGenre);
  }

  render() {
    const genre = this.props;
    const onGenreChange = this.onGenreChange;

    return (
      <Select
        name="genre-select"
        value={genre}
        options={genres}
        onChange={onGenreChange}
      />
    );
  }
}

RanForm.propTypes = {
  formChange: PropTypes.func,
  genre: PropTypes.string,
};

// RanForm.defaultProps = {
//   genre: 'any',
// };

export default connect(mapStateToProps, mapDispatchToProps)(RanForm);
