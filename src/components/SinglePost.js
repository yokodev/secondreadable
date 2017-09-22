import React, { Component } from 'react'
import * as Util from '../utils'
import { Item,Label, Header, Button, Icon, Card, Feed,Dropdown,  Menu, Segment } from 'semantic-ui-react'
import Rater from './Rater'

export default class SinglePost extends Component {

  render() {

    const {id, title, timestamp, author, category, voteScore } = this.props.post
    return (
      <Segment >
          <Item>
            {/* <Item.Image size="small" src="/assets/images/wireframe/image.png" /> */}
            <Rater voteScore={voteScore}/>
            <Item.Content verticalAlign='bottom'>
              <Item.Header as="a">{title}</Item.Header>
              <Item.Description>{`Submitted ${Util.timeSince(timestamp) } by ${author}`}</Item.Description>
              <Item.Extra>
                <Icon color="green" name="check" /> {voteScore}
              </Item.Extra>
              <Item.Extra content="121 comments" />
            </Item.Content>
          </Item>
      </Segment>

    )
  }
}

{/* <Item.Extra>
   <Button.Group  vertical icon>
      <Button>
        <Icon name='play' />
      </Button>

      <Button>
        <Icon  color="green" name='pause' />
      </Button>
    </Button.Group>
</Item.Extra> */}

{/* <div>
  <Button label={1048} icon="thumbs outline up" labelPosition="left" />
  <Button label="1,048" icon="thumbs outline down" labelPosition="left" />
  <Button label={{ content: '2,048' }} icon="heart" content="Like" labelPosition="left" />

</div> */}

{/* <div class="top-matter">
  <p class="title">
    <a> {title}</a>
  </p>
  <p class="tagline ">
    {`submitted ${Util.timeSince(timestamp)} by ${author}`}
  </p>
</div> */}
