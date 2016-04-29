import React, { PropTypes } from 'react';

const CustomFrame = ({title, editable, children, onRemove }) => {
  return (
      <div className="custom-frame-container">
        <div className="custom-frame-title">
            <h2>{title}</h2>
            {editable &&<a onClick={() => {onRemove();}} >Remove</a>}
        </div>
        <div className="custom-frame-content">
          {children}
        </div>
    </div>
  );
};

CustomFrame.propTypes = {
  children: PropTypes.element,
  onRemove: PropTypes.func,
  editable: PropTypes.bool,
  title: PropTypes.string,
};

export default CustomFrame;