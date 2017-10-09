import React, { Component } from 'react'
import * as Util from '../utils'
import * as Actions from '../actions'
import { Segment, Image } from 'semantic-ui-react'
import Rater from './Rater'
import image from '../assets/images/snoo-head.jpg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class SinglePost extends Component {
  handleLinkClicked = postId => {
    // this.props.dispatch(Actions.genPostDetail(postId))
    console.log(`este es el postid `,postId);
    this.props.dispatch(Actions.genPostDetail(postId))
  }
  render() {
    // let id, timestamp, title, body, author, category, voteScore, deleted
    console.log(`lasprops en singlePost: `, this.props)
    let { id, title, timestamp, author, voteScore, category } = this.props.post
    return (
      <Segment>
        <div className="post">
          <div className="post-rater">
            <Rater voteScore={voteScore} />
          </div>
          <div className="post-image">
            <Image src={image} size="tiny" />
          </div>
          <div className="post-content">
            <p>
              <Link className="post-title" to={`/${category}/${id}`} onClick={() => this.handleLinkClicked(id)}>
                {title}
              </Link>
            </p>
            <p className="post-submitted">
              {`submitted ${Util.timeSince(timestamp)} by `} <span> {author} </span>
            </p>
            <p className="post-comments">{`805 comments `}</p>
          </div>
        </div>
      </Segment>
    )
  }
}

export default connect()(SinglePost)
