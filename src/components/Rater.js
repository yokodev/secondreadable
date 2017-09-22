import React , {Component } from 'react'
import { Item,Label, Header, Button, Icon, Card, Feed,Dropdown,  Menu, Segment } from 'semantic-ui-react'


export default class Rater extends Component {

  render(){
    const {voteScore}= this.props
    return(
      <div >
        {/* <Icon.Group size='big'> */}
          {/* <Icon name='arrow up' /> */}
          {/* <div> <Icon name='arrow up' /> </div> */}
          <Button> <Icon name='thumbs outline up' /></Button>
          <Label basic>{voteScore}</Label>
          <Button> <Icon name='thumbs outline down' /></Button>
          {/* <div> <Icon name='arrow down' /> </div> */}
          {/* <Icon name='arrow down' /> */}
        {/* </Icon.Group> */}
    </div>

    )
  }
}
