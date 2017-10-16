import React, { Component } from 'react'
import { connect  } from 'react-redux'
import { Label, Comment, Form, Button, Header, Icon, Segment } from 'semantic-ui-react'
import ToolBar from 'components/ToolBar'
import MyComment from 'components/Comment'
import {commentsByPost, setCommentRate, setOrderBy}  from 'containers/Comments/actions'
import { orderByComments }  from 'containers/Comments/selectors'
import { withRouter } from 'react-router-dom'
import MyMenu from 'components/MainMenu'

class Comments extends Component {

  componentDidMount() {
    console.log(`COMMENTS  LIST componentDidMount: `,this.props)
    // this.props.dispatch(commentsByPost(this.props.match.params.id))
  }


  // getDetail = postId => {
  //   console.log(this.props)
  //   console.log(`este es el postid `,postId);
  //   // this.props.dispatch(Actions.genPostDetail(postId))
  // }
  // deletePost = id =>{
  //   this.setState({loading:true})
  //   this.props.deletePost(id,()=>{
  //     // console.log('regres0 del callback ',id);
  //     this.setState({loading:false})
  //     this.props.history.push('/')
  //   })
  // }
  // editPost = id=>{
  //   this.props.history.push(`/editPost/${id}`,{postToEdit:this.props.post})
  //   // console.log(this.props)
  //   console.log('editing this id ',id);
  // }
  ratecUp = (cId)=>{//FIXME SOME HOW IT DOESNT REFRESH
    // console.log('ratecUP enPostItem con postID: ',this.props);
    // console.log('ratecUP enPostItem con CID: ',cId);
    this.props.dispatch(setCommentRate(cId,'upVote'))
  }
  ratecDown = (cId)=>{//FIXME SOME HOW IT DOESNT REFRESH
    // console.log('ratecDOWN enPostItem con postID: ',this.props);
    // console.log('ratecDOWN enPostItem con CID: ',cId);
    this.props.dispatch(setCommentRate(cId,'downVote'))
  }

  handleVote= ( value )=>{
    this.props.dispatch(setOrderBy(value))
    // console.log('la e ',value);
  }

  render() {
    let {comments} = this.props
    console.log('estos son los comments',comments);
    console.log('PROPS EN  comments',this.props);

    return (
      <div className="comments-wrapper">
        <Comment.Group>
          {/* <Header as="h3" dividing>
            Comments
          </Header> */}

          <MyMenu  addTitle={'Add Comment'} handleVote={this.handleVote} />
          <Segment attached>
            { comments.map((comment, i)=>
              <MyComment key={i}
                comment={comment}
                ratecUp={this.ratecUp}
                ratecDown={this.ratecDown} />
            )}
          </Segment>
        </Comment.Group>
      </div>
    )
  }
}

const mapStateToProps = ({comments})=> ({
  comments: orderByComments(comments)
   })

export default withRouter(connect(mapStateToProps)(Comments))
