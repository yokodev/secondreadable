import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route,withRouter} from 'react-router-dom'
import './App.css';
import { getPosts, getCategories } from '../actions'
import Posts from './Posts'
import  * as Utils from '../utils'
// import { Tab,  Button, Icon, Card, Feed,Dropdown,  Menu, Segment } from 'semantic-ui-react'
import Header from './Header'
class App extends Component {

  componentDidMount(){
    this.props.getPosts()
    this.props.getCategories()
  }

  render() {

    // console.log('PROPS: ',this.props);
    const {categories, posts}= this.props

    return (
      <div className="wrapper">
        <Header categories={categories} />
        <div className="content">
          <Route exact path="/" render={({ location }) =><Posts posts={posts} /> }/>
          { categories.map(cat=>
            // <Route exact path="/" render={({ location }) =><Posts posts={posts} /> }/>
            <Route key={cat.name} exact path={`/${cat.path}`} render={({ location }) =><Posts posts={posts} /> }/>
          )}

        </div>
      </div>
    );
  }
}

function mapStateToProps({
    categories:{byId:cById, allIds:allCIds}=[],
    posts:{ byId:pById, allIds:allPIds,orderBy='voteScore' },
    comments=[] }){

  return {
    categories : Utils.arrayFromObject(cById, allCIds) ,
    posts : Utils.itemsSortedBy(pById, allPIds, orderBy) ,
    comments
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
  getCategories: () => dispatch(getCategories())
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
{/* <Route exact path="/" render={({ location }) =><Posts posts={posts} /> }/>
<Route exact path="/react" render={({ location }) =><h2>react</h2> }/>
<Route exact path="/redux" render={({ location }) =><h2>redux</h2> }/>
<Route exact path="/udacity" render={({ location }) =><h2>udacity</h2> }/>  */}
