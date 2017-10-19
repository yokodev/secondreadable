import React from 'react';
import { Icon } from 'semantic-ui-react';
import './rater.css';
const RaterMini = ({ voteScore, rateUp, rateDown }) => {
  return (
    <div className="miniwrapper">
      <div className="up rmitem">
        <Icon link name="chevron up" onClick={rateUp} />
      </div>
      <div className="score rmitem " title={voteScore}>
        {voteScore}
      </div>
      <div className="down rmitem">
        <Icon link name="chevron down" onClick={rateDown} />
      </div>
    </div>
  );
};

export default RaterMini;
