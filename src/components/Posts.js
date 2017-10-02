import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as AppAction from '../actions/app'
import { Dimmer, Loader, Tab, Header, Button, Icon, Card, Feed, Dropdown, Menu, Segment } from 'semantic-ui-react'
import * as Util from '../utils'
import SinglePost from './SinglePost'
import sortBy from 'sort-by'
import {Switch, Route,withRouter} from 'react-router-dom'

class Posts extends Component {

  state ={
    loading:true
  }

  handleLoading = ()=>{
    this.props.posts
    ? this.setState({loading:false})
    : this.setState({loading:true})
  }

  componentDidMount(){
    // this.props.dispatch()
  }
  handleClick = (e, { value }) => {
    this.props.dispatch(AppAction.setOrderBy(value))
  }

  render() {
    const { posts = [] } = this.props
    return (
      <div>
        <Segment >
          <Menu attached="top">
            <Menu.Menu position="right">
              <Dropdown item text="Sort By" icon="sort">
                <Dropdown.Menu>
                  <Dropdown.Item value="votescore" onClick={this.handleClick}>
                    VoteScore
                  </Dropdown.Item>
                  <Dropdown.Item value="timestamp" onClick={this.handleClick}>
                    Timestamp
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Menu>
          {/* <Segment attached="bottom">{posts.map(post => <SinglePost key={post.id} post={post} />)}</Segment> */}
          {posts.map(post => <SinglePost key={post.id} post={post} />)}
        </Segment>
        
      </div>
    )
  }
}

export default connect()(Posts)
{/* <Switch>
  <Route  exact path="/posts" 
  render={({ location }) =>
}/>
<Route  path="/posts/:id" 
render={({ location }) =>
<Posts posts={posts} /> 
}
/>
</Switch> */}
