import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { reduxForm } from 'redux-form';
import Select from 'react-select';
import { changeRanfiltratorFilters } from '../../actions/ActionCreators';
import { List } from 'immutable';

function mapStateToProps(state) {
  return {
    genre: state.ranfiltrator.get('genre'),
    genres: state.ranfiltrator.get('genres'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    formChange: (field, newValue) => dispatch(changeRanfiltratorFilters(field, newValue)),
    // formChange: (newGenre) => {
    //   console.log('field');
    //   console.log(field);
    //   console.log('newValue');
    //   console.log(newValue);
    //   dispatch(changeRanfiltratorFilters('genre', newValue));
    // },
  };
}

class RanForm extends Component {

  // changeGenre(formChange, newGenre) {
  //   formChange('genre', newGenre.value);
  // }

  render() {
    const { genre, genres, formChange } = this.props;
    // const changeGenre = this.changeGenre;

    /* return (
      <Select
        name="genre-select"
        value={genre}
        options={genres}
        onChange={(newGenre) => formChange('genre', newGenre.value)}
      />
    ); */
    return (<h1>RanForm Goes Here.</h1>);
  }
}

RanForm.propTypes = {
  formChange: PropTypes.func,
  genre: PropTypes.string,
  genres: PropTypes.instanceOf(List),
};

// RanForm.defaultProps = {
//   genre: 'any',
// };

export default connect(mapStateToProps, mapDispatchToProps)(RanForm);
