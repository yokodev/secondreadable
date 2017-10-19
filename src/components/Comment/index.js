import React from 'react';
import { Comment, Segment } from 'semantic-ui-react';
import * as Util from 'utils';
import ToolBar from 'components/ToolBar';
import Rater from 'components/Rater/mini';
import './comment.css';

const MyComment = ({
  comment: { id, body, author, voteScore, timestamp },
  ratecUp,
  ratecDown,
  deleteComment,
  editComment
}) => {
  const handleRateUp = e => ratecUp(id);
  const handleRateDown = e => ratecDown(id);

  return (
    <Segment className="single-comment">
      <Rater
        voteScore={voteScore}
        className="minirater"
        rateUp={handleRateUp}
        rateDown={handleRateDown}
      />

      <Comment className="the-comment">
        <Comment.Avatar
          src={`https://api.adorable.io/avatars/40/${author}.png`}
        />
        <Comment.Content>
          <Comment.Author as="a">{author}</Comment.Author>
          <Comment.Metadata>
            <div>{Util.timeSince(timestamp)}</div>
          </Comment.Metadata>
          <Comment.Text>{body}</Comment.Text>
        </Comment.Content>
      </Comment>
      <ToolBar
        editHandler={() => editComment(id)}
        deleteHandler={() => deleteComment(id)}
      />
    </Segment>
  );
};
export default MyComment;
