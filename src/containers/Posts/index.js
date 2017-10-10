import React, { Component } from 'react';
import { connect } from 'react-redux';
import './post.css';
import { getPosts, setOrderBy, createNewPost } from './actions';
import SinglePost from 'components/SinglePost';
import * as Utils from 'utils';
import SortBySelector from './selectors'
import NewPostForm from '../../components/Form'
import {Segment, Menu,Dropdown, Button, Icon, Modal,Container, Grid } from 'semantic-ui-react'

class Posts extends Component {

  state={
    modalOpen:false
  }

  componentDidMount() {
    this.props.getPosts();
  }

  handleVoteClick = (e, { value }) => {
    this.props.setOrderBy(value)
  }

  handleAddClick = (e,data) =>{
    console.log('button data', data);
  }
  handleOpen = () => {

    this.setState({ modalOpen: true })
  }
  handleClose = () => this.setState({ modalOpen: false })

  handleNewPost = (values)=>{

    // console.log(values);
    this.props.createNewPost(values,()=>{
      this.props.history.push('/')
    })
  }
  render() {
    const {posts, categories } = this.props;

    return (
      <Segment >
        <Menu attached="top">
          <Menu.Item >
            <Modal trigger={<Button onClick={this.handleOpen}>Add Post</Button>} scrolling
              open={this.state.modalOpen}
              onClose={this.handleClose}//TODO need to handle de onclose so that when a post is submitted you close this

              // closeOnEscape={closeOnEscape}
              // closeOnRootNodeClick={closeOnRootNodeClick}
              // onClose={this.close}
            >
            <Modal.Header>Add Post</Modal.Header>
            <Modal.Content >
              <NewPostForm categories={categories} onSubmit={this.handleNewPost} />
            </Modal.Content>
          </Modal>
          </Menu.Item>
          <Menu.Menu position="right">
            <Dropdown item text="Sort By" icon="sort">
              <Dropdown.Menu>
                <Dropdown.Item value="votescore" onClick={this.handleVoteClick}>
                  VoteScore
                </Dropdown.Item>
                <Dropdown.Item value="timestamp" onClick={this.handleVoteClick}>
                  Timestamp
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
        {posts.map(post => <SinglePost key={post.id} post={post} />)}
      </Segment>
    )
  }
}


// function mapStateToProps({
//   posts: { byId: pById, allIds: allPIds, orderBy = 'voteScore' },
// }) {
function mapStateToProps(state) {
  return {
    // posts: Utils.itemsSortedBy(pById, allPIds, orderBy)
    posts: SortBySelector(state)
  }
}

export default connect(mapStateToProps, {getPosts, setOrderBy, createNewPost})(Posts);
