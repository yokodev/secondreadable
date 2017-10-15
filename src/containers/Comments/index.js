import React, { Component } from 'react'
import { Label, Comment, Form, Button, Header, Icon, Segment } from 'semantic-ui-react'
import ToolBar from 'components/ToolBar'
import MyComment from 'components/Comment'

class Comments extends Component {

  render() {
    let {comments} = this.props
    console.log('estos son los comments',comments);

    return (
      <div className="comments-wrapper">
        <Comment.Group>
          {/* <Header as="h3" dividing>
            Comments
          </Header> */}
          <Label as='a' color='red' ribbon><Icon name="comments" />805 Comments</Label>
          <Segment attached>
            { comments.map((comment, i)=><MyComment key={i} comment={comment} />)}
          </Segment>
        </Comment.Group>
      </div>
    )
  }
}

export default Comments
