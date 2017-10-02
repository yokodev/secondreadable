import React, { Component } from 'react'
import * as Util from '../utils'
import { Segment, Image } from 'semantic-ui-react'
import Rater from './Rater'
import image from '../assets/images/snoo-head.jpg'
import { Link } from 'react-router-dom'

export default class SinglePost extends Component {
  handleLinkClicked = (data)=>{
    console.log('theDATA: ',data)
  }
  render() {
    const { id, title, timestamp, author, voteScore } = this.props.post
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
              <Link className="post-title" to={`/posts/${id}`}  onClick={(post)=>this.handleLinkClicked(this.props.post)}>
                {title}
              </Link>
            </p>
            <p className="post-submitted">
              {`submitted ${Util.timeSince(timestamp)} by `}{' '}
              <span> {author} </span>
            </p>
            <p className="post-comments">{`805 comments `}</p>
          </div>
        </div>
      </Segment>
    )
  }
}
