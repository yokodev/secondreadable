import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
// import './app.css';
import { connect } from 'react-redux'
import { getCategories } from 'containers/Categories/actions';
import CatToArraySelector from 'containers/Categories/selectors'
import PostDetail from 'containers/Post/Detail';
import Layout from 'components/Layout'
import Posts from 'containers/Posts'
import NewPost from 'containers/Post/NewPost'
import EditPost from 'containers/Post/EditPost'
import NotFoundPage from 'components/NotFoundPage'

class App extends Component {

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const {categories}= this.props
    return (
      <Layout categories={categories} >
        <Switch>
          <Route exact path="/"
            render={(rprops) => <Posts categories={categories} {...rprops} />}
          />
          <Route path="/notfound" component={NotFoundPage} />
          <Route path="/newPost"
            render={(rprops) => <NewPost categories={categories} {...rprops} />}
          />
          <Route path="/editPost/:id"
            render={(rprops) => <EditPost categories={categories} {...rprops} />}
          />
          <Route path="/:cat/:id"
            render={(rprops) => <PostDetail {...rprops} />}
          />
          <Route path="/:cat"
            render={(rprops) => <Posts categories={categories}{...rprops} />}
            />
        </Switch>
      </Layout>
    )
  }
}

// function mapStateToProps({ categories: { byId: cById, allIds: allCIds } = []}) {

function mapStateToProps(state) {
  return {
    categories: CatToArraySelector(state),
  }
}

// const mapDispatchToProps = dispatch => ({
//   getPosts: () => dispatch(getPosts()),
//   getCategories: () => dispatch(getCategories())
// });

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
// export default (connect(mapStateToProps, mapDispatchToProps)(App))
export default withRouter(connect(mapStateToProps,{getCategories})(App))
