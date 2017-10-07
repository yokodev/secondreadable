import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router';
import './App.css';
import { getPosts, getCategories } from '../actions';
import Posts from './Posts';
import PostDetail from './PostDetail';
import * as Utils from '../utils';
// import { Tab,  Button, Icon, Card, Feed,Dropdown,  Menu, Segment } from 'semantic-ui-react'
import Header from './Header';
class App extends Component {

  // constructor(props){
  //   super(props)
  //   // console.log(this.props)
  //   this.props.history.listen((location,action)=>{
  //     console.log('location  ',location)
  //   })

  // }
  componentDidMount() {
    this.props.getPosts();
    this.props.getCategories();
  }

  render() {
    // console.log('PROPS: ',this.props);
    
    const { categories, posts } = this.props;

    return <div className="wrapper">
        <Header categories={categories} />
        <div className="content">
          <Switch>
            <Route  exact path="/:cat?" render={({ location }) => <Posts posts={posts} />} />
            {/* <Route exact path="/:cat?" component={Posts} /> */}
            {/* {categories.map(cat => (
              <Route key={cat.name} exact path={`/${cat.path}`}
                render={({ match, history, location }) => (
                  <Posts posts={posts} />
                )}
              />
            ))} */}
            <Route path="/:cat/:id" render={({ location, match: { params: { id } } }) => <PostDetail location={location} id={id} />} />
          </Switch>
        </div>
      </div>;
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
