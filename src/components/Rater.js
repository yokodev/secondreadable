import React from 'react';
import { Icon, Segment } from 'semantic-ui-react';

const Rater = ({ voteScore, rateUp,rateDown }) => {

return (
  <Segment compact size="mini">
    <div className="raterwrapper">
      <div className="arrow up ">
        {/* <Icon link name="arrow up" size="large" /> */}
        <Icon link name="chevron up" size="large" onClick={rateUp} />
      </div>
      <div className="score " title={voteScore}>
        {voteScore}
      </div>
      <div className="arrow down ">
        <Icon link name="chevron down" size="large" onClick={rateDown} />
      </div>
    </div>
  </Segment>
)}

export default Rater;
