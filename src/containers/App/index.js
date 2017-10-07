import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import './app.css';
// import { getPosts, getCategories } from '../actions';
// import Posts from 'Posts';
// import PostDetail from 'PostDetail';
// import * as Utils from 'utils';
import Layout from 'components/Layout'
import Posts from 'containers/Posts'
import PostDetail from 'containers/Detail'



class App extends Component {
  
  // componentDidMount() {
  //   this.props.getPosts();
  //   this.props.getCategories();
  // }

  render() {
    // console.log('PROPS: ',this.props);
    // const { categories, posts } = this.props;
    return (
      <Layout >
        <Switch>
            <Route exact path="/:cat?"
              // render={() => <Posts posts={posts} />}
              render={() => <Posts />}
            />
     
            <Route path="/:cat/:id"
              render={({ location, match: { params: { id } } }) => (
                <PostDetail location={location} id={id} />
              )}
            />
          </Switch>
      </Layout>
    )
  }
}

// function mapStateToProps({
//   categories: { byId: cById, allIds: allCIds } = [],
//   posts: { byId: pById, allIds: allPIds, orderBy = 'voteScore' },
//   comments = []
// }) {
//   return {
//     categories: Utils.arrayFromObject(cById, allCIds),
//     posts: Utils.itemsSortedBy(pById, allPIds, orderBy),
//     commentsgetPost
//   };
// }

// const mapDispatchToProps = dispatch => ({
//   getPosts: () => dispatch(getPosts()),
//   getCategories: () => dispatch(getCategories())
// });

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
export default App


