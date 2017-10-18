import React, { Component } from 'react'
import { connect  } from 'react-redux'
import { Comment, Segment } from 'semantic-ui-react'
// import ToolBar from 'components/ToolBar'
import MyComment from 'components/Comment'
import {deleteComment, setCommentRate, setOrderBy,
        addNewComment, editComment, getThisComment }  from './actions'
import { orderByComments }  from 'containers/Comments/selectors'
import { withRouter } from 'react-router-dom'
import MyMenu from 'components/MainMenu'
import MyModal from 'components/MyModal'

class Comments extends Component {

  componentDidMount() {
    console.log(`COMMENTS  LIST componentDidMount: `,this.props)
    // this.props.dispatch(commentsByPost(this.props.match.params.id))
  }



handleNewComment = (data) =>{
  this.props.dispatch(addNewComment(this.props.id,data.body))
  this.handleClose()
}
  // getDetail = postId => {
  //   console.log(this.props)
  //   console.log(`este es el postid `,postId);
  //   // this.props.dispatch(Actions.genPostDetail(postId))
  // }
  deleteComment = id =>{
    const {dispatch}= this.props
     this.setState({loading:true})//TODO ADD A CALLBACK OR LOADER
    // this.props.dispatch(deleteComment(id,()=>{
      // console.log('regres0 del callback ',id);
      // this.setState({loading:false})
      // this.props.history.push('/')
    // }))
    dispatch(deleteComment(id))
  }

  editComment = id =>{//FIX NEED TO COME HERE WHENEVER I'm done with the edit
    // this.props.history.push(`/editComment/${id}`,{postToEdit:this.props.post})
    // console.log('editing this id ',id);
    // console.log('editing props en editing ',this.props);
    // this.props.dispatch(editComment(id))
    this.props.dispatch(getThisComment(id,
      (data)=>{
        console.log('returning from callback ',data);
        this.setState({editPayload:data})
        this.changingToEditMode()
      }))
  }

  submitCommentChanges = (data)=>{
    console.log('en submit chero',data);
    const {body, payload:{id}}=data
    // console.log('en submit chero',this.props);
    this.props.dispatch(editComment(id,body))
    this.handleClose()
  }
  ratecUp = (cId)=>{ this.props.dispatch(setCommentRate(cId,'upVote'))}
  ratecDown = (cId)=>{ this.props.dispatch(setCommentRate(cId,'downVote'))}

  handleVote= ( value )=>{this.props.dispatch(setOrderBy(value))}

  state={
    editing: false,
    adding:false,
    modalNewOpen:false,
    modalEditOpen:false,
    loading:false,
    editPayload:{}
  }
changingToAddMode = ()=> {
  this.setState({adding:true, editing:false}, ()=>this.handleOpen())}
changingToEditMode = ()=>{
  this.setState({editing:true, adding:false}, ()=>this.handleOpen())}

handleOpen = () => { this.state.adding
  ? this.setState({ modalNewOpen: true })
  :this.setState({ modalEditOpen: true })
}
handleClose = () => { this.state.adding
  ? this.setState({ modalNewOpen: false, adding:false })
  : this.setState({modalEditOpen:false, editing:false })
}

  render() {
    let {comments} = this.props

    return (
      <div className="comments-wrapper">
        <Comment.Group>
          {/* <Header as="h3" dividing>
            Comments
          </Header> */}
          <MyMenu  addTitle={'Add Comment'}
            handleVote={this.handleVote} handleOpen={this.changingToAddMode}
          />
          <Segment attached>
            { comments.map((comment, i)=>
              <MyComment key={i} comment={comment} ratecUp={this.ratecUp}
                ratecDown={this.ratecDown}  deleteComment={this.deleteComment}
                editComment={this.editComment}
              />
            )}
          </Segment>
          <MyModal modalHeader="Add new Comment" modalOpen={this.state.modalNewOpen}
              handleClose={this.handleClose}
            onSubmit={this.handleNewComment} onCancel={this.handleClose}
            mainButton="Add Comment" mainIcon="add"
           />
          <MyModal modalHeader="Edit Comment" modalOpen={this.state.modalEditOpen}
              handleClose={this.handleClose}
            onSubmit={this.submitCommentChanges} onCancel={this.handleClose}
            mainButton="Edit Comment" mainIcon="edit" payload={this.state.editPayload}
           />
        </Comment.Group>
      </div>
    )
  }
}

const mapStateToProps = ({comments})=> ({
  comments: orderByComments(comments)
   })

export default withRouter(connect(mapStateToProps)(Comments))
