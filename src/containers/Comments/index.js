import React, { Component } from 'react'
import { Label, Comment, Form, Button, Header, Icon, Segment } from 'semantic-ui-react'
import ToolBar from 'components/ToolBar'
import comment from 'components/Comment'

class Comments extends Component {

  render() {

    return (
      <div className="comments-wrapper">
        <Comment.Group>
          {/* <Header as="h3" dividing>
            Comments
          </Header> */}
          <Label as="a" color="teal" tag="right">
            {' '}
            <Icon name="comments" />
            {`805 comments `}
          </Label>
          <Segment attached>
            <comment />
          </Segment>
        </Comment.Group>
      </div>
    )
  }
}

export default Comments
