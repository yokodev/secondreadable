import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { getPosts, getCategories } from '../actions'
import Posts from './Posts'
import  * as Utils from '../utils'


class App extends Component {
  componentDidMount(){
    this.props.getPosts()
    this.props.getCategories()
  }
  render() {
    // console.log('PROPS: ',this.props);
    return (
      <div className="wrapper">
        <header className="mainheader">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </header>
        <div className="content">
          <Posts posts={this.props.posts} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({categories=[], posts=[], comments=[] }){
  // console.log('state',state)

  return {
    categories,
    posts: Utils.arrayFromObject(posts.byId, posts.allIds) ,
    comments
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
  getCategories: () => dispatch(getCategories())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
