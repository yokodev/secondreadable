import React from 'react';
import { Icon, Segment } from 'semantic-ui-react';
import "./rater.css"
const Rater = ({ voteScore, rateUp,rateDown }) => {

return (
  <Segment >
    <div className="raterwrapper">
      <div className="ritem up ">
        <Icon link name="chevron up" size="large" onClick={rateUp} />
      </div>
      <div className="score " title={voteScore}>
        {voteScore}
      </div>
      <div className="ritem down ">
        <Icon link name="chevron down" size="large" onClick={rateDown} />
      </div>
    </div>
  </Segment>
)}

export default Rater;
