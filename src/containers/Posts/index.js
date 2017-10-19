import React, { Component } from 'react';
import { connect } from 'react-redux';
import './post.css';
import {  setOrderBy, allPostsWCommentsNCat, allPostsWComments } from './actions';
import SinglePost from './PostItem';
import {orderByPosts } from './selectors'
import {Segment, Menu, Dropdown, Button } from 'semantic-ui-react'

class Posts extends Component {

  state={
    modalOpen:false
  }

  componentDidMount() {
    const {match:{params:{cat}},allPostsWComments, allPostsWCommentsNCat  }=this.props
    cat ? allPostsWCommentsNCat(cat) : allPostsWComments()
  }
  componentDidUpdate(prevProps) {
    const {match:{params:{cat},path}, allPostsWCommentsNCat} =  this.props
    prevProps.match.params.cat !== cat && path !== "/" &&
    allPostsWCommentsNCat(cat)
  }

  handleVoteClick = (e, { value }) => { this.props.setOrderBy(value) }
  handleOpen = () => {this.props.history.push('/newPost')}
  handleClose = () => this.setState({ modalOpen: false })


  render() {
    const {posts, categories,history } = this.props;
    return (
      <Segment >
        <Menu attached="top">
          <Menu.Item >
            <Button onClick={this.handleOpen}>Add Post</Button>
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
      </Segment>

    )
  }
}

function mapStateToProps(state,ownProps) {
  return {
    posts: orderByPosts(state),
    allIds:state.posts.allIds
  }
}

export default connect(mapStateToProps,
  {allPostsWCommentsNCat, setOrderBy, allPostsWComments})(Posts);
