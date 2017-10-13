import React, { Component } from 'react'
import { Comment, Form, Button, Header, Segment } from 'semantic-ui-react'
import ToolBar from 'components/ToolBar'

class Comments extends Component {
  render() {
    return (
      <div className="comments-wrapper">


      <Comment.Group>
        <Header as="h3" dividing>
          Comments
        </Header>
        {/* <Segment > */}
          <Comment>
            <Comment.Avatar src="https://picsum.photos/100/100/?random" />
            <Comment.Content>
              <Comment.Author as="a">Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>
                  <ToolBar editHandler={()=>this.editPost('id')} deleteHandler={()=>this.deletePost('id')} />
                </Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
          <Comment>
            <Comment.Avatar src="https://picsum.photos/100/100" />
            <Comment.Content>
              <Comment.Author as="a">Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
          <Comment>
            <Comment.Avatar src="http://lorempixel.com/g/100/100" />
            <Comment.Content>
              <Comment.Author as="a">Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        {/* </Segment> */}
      </Comment.Group>
      </div>
    )
  }
}

export default Comments
