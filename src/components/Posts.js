import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as AppAction from '../actions/app'
import { Dimmer, Loader, Tab, Header, Button, Icon, Card, Feed, Dropdown, Menu, Segment } from 'semantic-ui-react'
import * as Util from '../utils'
import SinglePost from './SinglePost'
import sortBy from 'sort-by'

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
    // console.log('PROPS en POSTS :', this.props)
    // this.handleLoading()
    // const { loading }= this.state
    const { posts = [] } = this.props
    return (
      // <Segment loading={loading}>
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
        {/* <Dimmer inactive >
          <Loader >Loading</Loader>
        </Dimmer> */}
        {/* <Segment attached="bottom">{posts.map(post => <SinglePost key={post.id} post={post} />)}</Segment> */}
        {posts.map(post => <SinglePost key={post.id} post={post} />)}
      </Segment>
    )
  }
}

export default connect()(Posts)
