import React, { Component } from 'react'
import { connect  } from 'react-redux'
import * as Util from 'utils'
import { Segment, Image, Dimmer, Loader, Label, Icon } from 'semantic-ui-react'
import Rater from 'components/Rater'
import { getPostDetail } from './actions'
import {commentsByPost}  from 'containers/Comments/actions'
import Comments from 'containers/Comments'
import {setPostRate, deletePost } from 'containers/Posts/actions'
import ToolBar from 'components/ToolBar'
import './detail.css'

class PostDetail extends Component {

  componentDidMount() {
    this.props.dispatch(getPostDetail(this.props.match.params.id,(result)=>{
      result
      ? this.props.history.push('/notfound')
      : this.props.dispatch(commentsByPost(this.props.match.params.id))
    }))
    //TODO MAKE VALIDATION THAT IF  post DETAIL IS EMPTY NOT FOLLOW with flow
  }

  rateUp = ()=>{
    let { postDetail:{id}}=this.props
    this.props.dispatch(setPostRate(id,'upVote'))
  }
  rateDown = ()=>{
    let { postDetail:{id}}=this.props
    this.props.dispatch(setPostRate(id,'downVote'))
  }

  deletePost = id =>{
    let {match:{params:{cat}}} = this.props
    this.setState({loading:true})
    this.props.dispatch(deletePost(id,
      ()=>{ this.props.history.push(`/${cat}`) }))
  }

  editPost = id=>{
    this.props.history.push(`/editPost/${id}`,{postToEdit:this.props.postDetail})
  }

  render() {
    const { postDetail} = this.props
    let postToShow
    if (postDetail) {
      let { id, title, timestamp, author, voteScore, body, comments } = postDetail
      postToShow =
      <Segment>
        <Segment>
          <Label as='a' color='red' ribbon="right"><Icon name="comments" />{comments} Comments</Label>
          <div className="post">
            <div className="post-rater">
              <Rater voteScore={voteScore} rateUp={this.rateUp} rateDown={this.rateDown} />
            </div>
            <div className="post-image">
              <Image shape="circular" src="https://picsum.photos/100/100/?random" size="small" />
            </div>
            <div className="post-content">
              <h2 className="post-title">{title}</h2>
              <p className="post-submitted">
                {`submitted ${Util.timeSince(timestamp)} by `} <span> {author} </span>
              </p>
              <p className="post-body">{body}</p>
              {/* <p className="post-comments">{`805 comments `}</p> */}
            </div>
          </div>
          <div className="editToolbar">
            <ToolBar editHandler={()=>this.editPost(id)} deleteHandler={()=>this.deletePost(id)} />
          </div>
        </Segment>
        <Segment>
          <Comments  id={id} />
        </Segment>
      </Segment>

    }else {
			postToShow =
      <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>
      </Segment>
		}
    return postToShow
  }
}

const mapStateToProps =({postDetail})=> ({
  postDetail
})

export default connect(mapStateToProps)(PostDetail)
