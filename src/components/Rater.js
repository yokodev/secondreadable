import React from 'react';
import { Icon, Segment } from 'semantic-ui-react';

const Rater = ({ voteScore }) => (
  <Segment compact size="mini">
    <div className="raterwrapper">
      <div className="arrow up ">
        <Icon link name="arrow up" size="large" />
      </div>
      <div className="score " title={voteScore}>
        {voteScore}
      </div>
      <div className="arrow down ">
        <Icon link name="arrow down" size="large" />
      </div>
    </div>
  </Segment>
)

export default Rater;
