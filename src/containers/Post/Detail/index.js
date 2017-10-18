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
    // console.log(`this props on detail componentDidMount: `,this.props)
    this.props.dispatch(getPostDetail(this.props.match.params.id,(result)=>{
      result
      ? this.props.history.push('/notfound')
      : this.props.dispatch(commentsByPost(this.props.match.params.id))
    }))
    //TODO MAKE VALIDATION THAT IF DETAIL IS EMPTY NOT FOLLOW
  }

  rateUp = ()=>{
    let { postDetail:{id}}=this.props
    // console.log('rateUP enPostItem con postID: ',id);
    this.props.dispatch(setPostRate(id,'upVote'))
  }
  rateDown = ()=>{
    let { postDetail:{id}}=this.props
    // console.log('rateDOWN enPostItem con postID: ',this.props);
    this.props.dispatch(setPostRate(id,'downVote'))
  }

  deletePost = id =>{
    let {match:{params:{cat}}} = this.props
    this.setState({loading:true})
    this.props.dispatch(deletePost(id,()=>{
    //   // console.log('regres0 del callback ',id);
    //   this.setState({loading:false})
      this.props.history.push(`/${cat}`)
    }))

    console.log(this.props)
    console.log('editing this id ',id);
  }
  editPost = id=>{

    this.props.history.push(`/editPost/${id}`,{postToEdit:this.props.postDetail})
    // console.log(this.props)
    // console.log('editing this id ',id);
  }

  render() {
    const { postDetail, comments } = this.props
    // const { id, title, timestamp, author, voteScore, body } = postDetail
    let postToShow
    if (postDetail) {
      let { id, title, timestamp, author, voteScore, body, category } = postDetail
      postToShow =
      <Segment>
        <Segment>
          <Label as='a' color='red' ribbon="right"><Icon name="comments" />805 Comments</Label>
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
          {/* <Comments comments={comments} id={id} /> */}
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
// export default connect(mapStateToProps, { getPostDetail})(PostDetail)
// export default connect(mapStateToProps, {setPostRate, commentsByPost, getPostDetail})(PostDetail)
// export default PostDetail
