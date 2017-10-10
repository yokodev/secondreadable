import React, { Component } from 'react';
import { Switch, Route/*, withRouter*/ } from 'react-router-dom';
// import './app.css';
import { connect } from 'react-redux'
import { getCategories } from 'containers/Categories/actions';
import CatToArraySelector from 'containers/Categories/selectors'
// import PostDetail from 'PostDetail';
// import * as Utils from 'utils';
import Layout from 'components/Layout'
import Posts from 'containers/Posts'

class App extends Component {

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    // console.log('PROPS: ',this.props);
    const {categories}= this.props
    return (
      <Layout categories={categories} >
        <Switch>
          {/* <Route exact path="/"  component={Posts}/>
          <Route   path="/:cat"  component={Posts}/> */}
          <Route exact path="/"
            render={() => <Posts categories={categories} />}
          />
          <Route exact path="/:cat/"
            render={() => <Posts categories={categories} />}
          />

            {/* <Route path="/:cat/:id"
              render={({ location, match: { params: { id } } }) => (
                <PostDetail location={location} id={id} />
              )}
            /> */}
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
export default connect(mapStateToProps,{getCategories})(App)
