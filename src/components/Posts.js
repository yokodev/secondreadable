import React, { Component } from 'react'
import { Table, Header, Button, Icon, Card, Feed,Dropdown,  Menu, Segment } from 'semantic-ui-react'
import * as Util from '../utils'
import SinglePost from './SinglePost'

export default class Posts extends Component {

  // handleSort = clickedColumn => () => {
  //  const { column, data, direction } = this.state
  //
  //  if (column !== clickedColumn) {
  //    this.setState({
  //      column: clickedColumn,
  //      data: _.sortBy(data, [clickedColumn]),
  //      direction: 'ascending',
  //    })
  //
  //    return
  //  }

  render() {
    console.log('posts :', this.props.posts)
    const { posts = [] } = this.props
    return (
    <div>
    <Menu attached='top' >
      <Dropdown item text='Sort By' icon='sort' simple>
        <Dropdown.Menu>
          <Dropdown.Item>VoteScore</Dropdown.Item>
          <Dropdown.Item>Timestamp</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
    {/* <Segment attached='bottom'> */}
      {posts.map(post=> <SinglePost key={post.id} post={post}/>)}
    {/* </Segment> */}
  </div>

    )
  }
}
