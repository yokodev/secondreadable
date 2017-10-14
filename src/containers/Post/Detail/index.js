import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from './actions'
import {commentsByPost}  from 'containers/Comments/actions'

import * as Util from 'utils'
import { Segment, Image, Dimmer, Loader } from 'semantic-ui-react'
import Rater from 'components/Rater'
import image from 'assets/images/message.png'
import Comments from 'containers/Comments'
import './detail.css'

class PostDetail extends Component {
  componentDidMount() {
    console.log(`this props on detail componentDidMount: `,this.props)
    this.props.dispatch(Actions.getPostDetail(this.props.match.params.id))
    this.props.dispatch(commentsByPost(this.props.match.params.id))

  }

  render() {
    console.log(`this props on detail: `, this.props)

    const { postDetail } = this.props
    // const { id, title, timestamp, author, voteScore, body } = postDetail
    let postToShow
    if (postDetail) {
      let { id, title, timestamp, author, voteScore, body, category } = postDetail
      postToShow =
      <Segment>
        <Segment>
          <div className="post">
            <div className="post-rater">
              <Rater voteScore={voteScore} />
            </div>
            <div className="post-image">
              <Image shape="circular" src="https://picsum.photos/100/100/?random" size="small" />
              {/* <Image shape="circular" src="https://picsum.photos/100/100/?random" size="tiny" /> */}
            </div>
            <div className="post-content">
              <h2 className="post-title">{title}</h2>
              <p className="post-submitted">
                {`submitted ${Util.timeSince(timestamp)} by `} <span> {author} </span>
              </p>
              <p className="post-body">{body}</p>
              <p className="post-comments">{`805 comments `}</p>
            </div>
          </div>
        </Segment>
        <Segment>
          <Comments postId={id} />
        </Segment>
      </Segment>

    }else {
			postToShow =
      <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>
      </Segment>
		}
    return postToShow
  }
}

const mapStateToProps =({postDetail} )=> ({ postDetail  })

export default connect(mapStateToProps)(PostDetail)
// export default PostDetail
