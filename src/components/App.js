import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { getPosts } from '../actions'

class App extends Component {
  componentDidMount(){
    this.props.boundGetPosts()
  }
  render() {
    // console.log('PROPS: ',this.props);
    return (
      <div className="App">
        <div className="App-header">
          <p className="App-intro"> HELLO </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  // console.log('state',state)
  return {
    posts: state.posts,
  }
}

const mapDispatchToProps = dispatch => ({
  boundGetPosts: () => dispatch(getPosts())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
