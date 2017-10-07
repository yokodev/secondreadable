import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router';
import './post.css';
import { getPosts, getCategories } from './actions';
// import Posts from '../Posts';
// import PostDetail from './PostDetail';
import * as Utils from 'utils';
// import Header from './Header';




class Post extends Component {
  
  componentDidMount() {
    this.props.getPosts();
    this.props.getCategories();
  }

  render() {
    // console.log('PROPS: ',this.props);

    const { categories, posts } = this.props;

    return (
      <div>
        {this.props.posts}
      </div>
    );
  }
}

function mapStateToProps({
  categories: { byId: cById, allIds: allCIds } = [],
  posts: { byId: pById, allIds: allPIds, orderBy = 'voteScore' },
  comments = []
}) {
  return {
    categories: Utils.arrayFromObject(cById, allCIds),
    posts: Utils.itemsSortedBy(pById, allPIds, orderBy),
    comments
  };
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
  getCategories: () => dispatch(getCategories())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));


