import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { getPosts, getCategories } from '../actions'

class App extends Component {
  componentDidMount(){
    this.props.getPosts()
    this.props.getCategories()
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

function mapStateToProps({categories={},posts={}, comments={}}){
  // console.log('state',state)
  return {
    categories,
    posts,
    comments
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
  getCategories: () => dispatch(getCategories())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
