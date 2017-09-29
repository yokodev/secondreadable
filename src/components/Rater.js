import React , {Component } from 'react'
import { Item,Label, Header, Button, Icon, Card, Feed,Dropdown,  Menu, Segment } from 'semantic-ui-react'


export default class Rater extends Component {

  render(){
    const {voteScore}= this.props
    return(
      <Segment  compact raised size='mini'>
        <div className="raterwrapper">
          <div className="arrow up " aria-label="upvote">
            <Icon link name="arrow up" size='large' />
          </div>
          {/* <div className="score " title={voteScore}>20.3k</div> */}
          <div className="score " title={voteScore}>{voteScore}</div>
          <div className="arrow down " aria-label="downvote">
            <Icon link name="arrow down" size='large' />
          </div>
        </div>
      </Segment>
    )
  }
}
