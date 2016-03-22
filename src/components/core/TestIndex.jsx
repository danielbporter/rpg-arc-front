import React from 'react';
import { Link } from 'react-router'

class TestIndex extends React.Component {

  render(){
    return (
            <div>
            <h1>This is the TEST Index Page</h1>
                <ul>
                    <li><Link to="/test/ranfiltrator">Ranfiltrator</Link></li>
                </ul>
        </div>
    );
  }
}

export default TestIndex;