import React, { Component } from 'react';
import Ranfiltrator from './Ranfiltrator';
import encounters from '../../sample_encounters.json';

let keyCount = 0;
const encounterList = encounters.map(encounter =>
  Object.assign({}, encounter, { key: keyCount++ }));

class RanApp extends Component {
  render() {
    return (
      <Ranfiltrator contentList={encounterList} />
    );
  }
}

export default RanApp;
