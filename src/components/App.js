import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  componentDidMount(){
  }
  render() {
    console.log('PROPS: ',this.props);
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
  return {
    entities: state.entities,
    posts: state.entities.posts,
  }
}

export default connect(mapStateToProps)(App);
