import React from 'react';
import Widget from './widget-core/Widget';

class Note extends React.Component {

  render(){
    return (
        <Widget>
            <div className="mdl-card__title">
            <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="text"></input>
            </div>
            </div>

            <div className="mdl-card__supporting-text">
           <div className="mdl-textfield mdl-js-textfield">
            <textarea className="mdl-textfield__input" type="text" rows= "3" defaultValue=""></textarea>
            </div></div>

        </Widget>
    );
  }
}

export default Note;