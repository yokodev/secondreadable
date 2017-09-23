import React , {Component } from 'react'
import { Item,Label, Header, Button, Icon, Card, Feed,Dropdown,  Menu, Segment } from 'semantic-ui-react'


export default class Rater extends Component {

  render(){
    const {voteScore}= this.props
    return(
      <div className="raterwrapper" >
        {/* <Icon.Group size='big'> */}
          {/* <div> <Icon name='arrow up' /> </div> */}
          <Icon name='arrow up' />
          {/* <Button> <Icon name='thumbs outline up' /></Button> */}
          {/* <Label basic>{voteScore}</Label> */}
          <span>{voteScore}</span>
          <Icon name='arrow down' />
          {/* <Button> <Icon name='thumbs outline down' /></Button> */}
          {/* <div> <Icon name='arrow down' /> </div> */}
          {/* <Icon name='arrow down' /> */}
        {/* </Icon.Group> */}
    </div>

    )
  }
}
