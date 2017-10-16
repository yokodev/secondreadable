import React from 'react'
import { Comment, Form, Button, Header, Segment } from 'semantic-ui-react'
import * as Util from 'utils'
import ToolBar from 'components/ToolBar'
import Rater from 'components/Rater/mini'
import './comment.css'

const MyComment = ({comment:{id,body,author,voteScore,timestamp},ratecUp, ratecDown}) => {

const  deletePost = id =>{
    this.setState({loading:true})
    this.props.deletePost(id,()=>{
      // console.log('regres0 del callback ',id);
      this.setState({loading:false})
      this.props.history.push('/')
    })
  }
const  editPost = id=>{
    this.props.history.push(`/editPost/${id}`,{postToEdit:this.props.post})
    // console.log(this.props)
    console.log('editing this id ',id);
  }

  const handleRateUp =   (e)=> ratecUp(id)
  const handleRateDown = (e)=> ratecDown(id)

  return(
  <Segment className="single-comment">
    <Rater voteScore={voteScore}  className="minirater"
      rateUp={handleRateUp} rateDown={handleRateDown} />

    <Comment className="the-comment">
      <Comment.Avatar src={`https://api.adorable.io/avatars/40/${author}.png`}  />
      {/* <Comment.Avatar src="https://picsum.photos/100/100/?random" /> */}
      <Comment.Content>
        <Comment.Author as="a">{author}</Comment.Author>
        <Comment.Metadata>
          <div>{Util.timeSince(timestamp)}</div>
        </Comment.Metadata>
        <Comment.Text>{body}</Comment.Text>
      </Comment.Content>
    </Comment>
    <ToolBar editHandler={()=>this.editPost(id)} deleteHandler={()=>this.deletePost(id)} />
  </Segment>
)}
export default MyComment
