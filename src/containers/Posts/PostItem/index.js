import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom'
import * as Util from 'utils'
import { connect } from 'react-redux';
import { deletePost }  from 'containers/Posts/actions'
import './postItem.css'
import { Segment, Image, Dimmer, Loader } from 'semantic-ui-react'
import Rater from 'components/Rater'
import image from 'assets/images/snoo-head.jpg'
import {Icon, Label} from 'semantic-ui-react'
import ToolBar from 'components/ToolBar'
import {setPostRate} from '../actions'

class PostItem extends Component {

  state={loading:false}

  getDetail = postId => {
    console.log(this.props)
    console.log(`este es el postid `,postId);
    // this.props.dispatch(Actions.genPostDetail(postId))
  }
  deletePost = id =>{
    this.setState({loading:true})
    this.props.deletePost(id,()=>{
      // console.log('regres0 del callback ',id);
      this.setState({loading:false})
      this.props.history.push('/')
    })
  }
  editPost = id=>{
    this.props.history.push(`/editPost/${id}`,{postToEdit:this.props.post})
    // console.log(this.props)
    console.log('editing this id ',id);
  }
  rateUp = ()=>{
    let { post:{id}, setPostRate }=this.props
    console.log('rateUP enPostItem con postID: ',id);
    setPostRate(id,'upVote')
  }
  rateDown = ()=>{
    let { post:{id}, setPostRate }=this.props
    console.log('rateDOWN enPostItem con postID: ',id);
    setPostRate(id,'downVote')
  }
  render() {
    // let id, timestamp, title, body, author, category, voteScore, deleted
    // console.log(`lasprops en singlePost: `, this.props)
    let { id, title, timestamp, author, voteScore, category } = this.props.post
    let {loading} = this.state
    return (
      <Segment  color="orange"piled raised className="postContent" >
        <Dimmer active={loading}>
          <Loader />
        </Dimmer>
        <Label  as='a' color='teal' ribbon='right'  > <Icon name='comments' />{`805 comments `}</Label>
        <div className="post">
          <div className="post-rater">
            <Rater voteScore={voteScore} rateUp={this.rateUp} rateDown={this.rateDown} />
          </div>
          <div className="post-image">
            <Image src={image} size="tiny" />
          </div>
            <div className="post-content">
              <p>
                {/* <Link className="post-title" to={`${category}/${id}`} onClick={() => this.getDetail(id)}> */}
                <Link className="post-title" to={`/${category}/${id}`} >
                  {title}
                </Link>
              </p>
              <p className="post-submitted">
                {`submitted ${Util.timeSince(timestamp)} by `} <span> {author} </span>
              </p>
              <div className="post-comments">
                <ToolBar editHandler={()=>this.editPost(id)} deleteHandler={()=>this.deletePost(id)} />
              </div>
            </div>
        </div>
       </Segment>
    )
  }
}

export default withRouter(connect(null,{deletePost,setPostRate})(PostItem))
// export default PostItem
