import React, { Component } from 'react';
import { connect } from 'react-redux';
import './post.css';
import { getPosts, setOrderBy, getPostsByCat} from './actions';
import SinglePost from './PostItem';
import * as Utils from 'utils';
import {orderByPosts, postsArrayFromObject } from './selectors'
import NewPostForm from 'components/Form'
import {Segment, Menu,Dropdown, Button, Icon, Modal,Container, Grid } from 'semantic-ui-react'
import { Link, NavLink, withRouter  } from 'react-router-dom';

class Posts extends Component {

  state={
    modalOpen:false
  }

  componentDidMount() {
    const {match:{params:{cat}}, getPosts, getPostsByCat }=this.props
    cat?getPostsByCat(cat):getPosts()

  }

  handleVoteClick = (e, { value }) => {
    this.props.setOrderBy(value)
  }

  handleOpen = () => {
    // this.setState({ modalOpen: true })
    console.log(this.props);
    this.props.history.push('/newPost')
  }
  handleClose = () => this.setState({ modalOpen: false })
  handleNewPost = (values)=>{

  }
  render() {
    const {posts, categories,history } = this.props;
    console.log('las cats ',categories);
    return (
      <Segment >
        <Menu attached="top">
          <Menu.Item >
            <Button onClick={this.handleOpen}>Add Post</Button>
            {/* <Button onClick={this.handleOpen}>Add Post</Button> */}
          </Menu.Item>
          <Menu.Menu position="right">
            <Dropdown item text="Sort By" icon="sort">
              <Dropdown.Menu>
                <Dropdown.Item value="voteScore" onClick={this.handleVoteClick}>
                  VoteScore
                </Dropdown.Item>
                <Dropdown.Item value="timestamp" onClick={this.handleVoteClick}>
                  Timestamp
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
        <Segment  color="grey" attached className="postList">
          {posts.map(post => <SinglePost key={post.id} post={post} history={history} />)}
        </Segment>
        {/* <Modal trigger={<Button onClick={this.handleOpen}>Add Post</Button>} scrolling */}
        <Modal  scrolling
          open={this.state.modalOpen}
          onClose={this.handleClose}//TODO need to handle de onclose so that when a post is submitted you close this
          closeOnEscape={false}
          closeOnRootNodeClick={false}
        >
        <Modal.Header>Add Post</Modal.Header>
        <Modal.Content >
          <NewPostForm categories={categories} onSubmit={this.handleNewPost} onCancel={this.handleClose} />
        </Modal.Content>
      </Modal>
      </Segment>

    )
  }
}
// function mapStateToProps({
//   posts: { byId: pById, allIds: allPIds, orderBy = 'voteScore' },
// }) {
function mapStateToProps(state,ownProps) {
  // console.log('ownProps:', ownProps);
  // let Posts = postsArrayFromObject(state)
  return {
    // posts: Utils.itemsSortedBy(pById, allPIds, orderBy)
    posts: orderByPosts(state)
  }
}

export default connect(mapStateToProps, {getPostsByCat, getPosts, setOrderBy})(Posts);
