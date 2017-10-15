import React from 'react'
import { Comment, Form, Button, Header, Segment } from 'semantic-ui-react'
import * as Util from 'utils'
// const Comments = ({body,author,voteScore,timestamp},props) => {
const Comments = ({comment:{body,author,voteScore,timestamp}}) => (
  <Segment>
    <Comment>
      <Comment.Avatar src={`https://api.adorable.io/avatars/40/${author}.png`}  />
      {/* <Comment.Avatar src="https://picsum.photos/100/100/?random" /> */}
      <Comment.Content>
        <Comment.Author as="a">{author}</Comment.Author>
        <Comment.Metadata>
          <div>{Util.timeSince(timestamp)}</div>
        </Comment.Metadata>
        <Comment.Text>{body}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  </Segment>
)


export default Comments
