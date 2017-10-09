import React, { Component } from 'react';
import { connect } from 'react-redux';
import './post.css';
import { getPosts, getCategories, setOrderBy } from './actions';
import SinglePost from 'components/SinglePost';
import * as Utils from 'utils';
import SortBySelector from './selectors'
import {Segment, Menu,Dropdown } from 'semantic-ui-react'


class Posts extends Component {
  
  componentDidMount() {
    this.props.getPosts();
  }
  handleClick = (e, { value }) => {
    this.props.setOrderBy(value)
  }
  
  render() {
    // console.log('PROPS: ',this.props);
    const {posts } = this.props;

    return (         
      <Segment >
        <Menu attached="top">
          <Menu.Menu position="right">
            <Dropdown item text="Sort By" icon="sort">
              <Dropdown.Menu>
                <Dropdown.Item value="votescore" onClick={this.handleClick}>
                  VoteScore
                </Dropdown.Item>
                <Dropdown.Item value="timestamp" onClick={this.handleClick}>
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

// { 
//   posts: { byId: pById, allIds: allPIds, orderBy = 'voteScore' },
// }
function mapStateToProps(state) {
  return {
    // posts: Utils.itemsSortedBy(pById, allPIds, orderBy)    
    posts: SortBySelector(state)     
  }
}

export default connect(mapStateToProps, {getPosts, getCategories, setOrderBy})(Posts);


