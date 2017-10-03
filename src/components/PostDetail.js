import React, { Component } from 'react'
import { connect } from 'react-redux'
import SinglePost from './SinglePost'
import * as Actions from '../actions'
import * as Util from '../utils'
import { Segment, Image } from 'semantic-ui-react'
import Rater from './Rater'
import image from '../assets/images/snoo-head.jpg'
import { Link } from 'react-router-dom'
import { myBreadCrumb } from './MyComponents'
import Comments from './Comments'

class PostDetail extends Component {
  componentDidMount() {
    // console.log(`this props on detail componentDidMount: `,this.props)
    this.props.dispatch(Actions.getPostDetail(this.props.id))
  }

  render() {
    console.log(`this props on detail: `, this.props)

    // const { id, title, timestamp, author, voteScore, body } = postDetail
    const { location: { pathname }, posts: { postDetail } } = this.props
    let postToShow
    // let id, title, timestamp, author, voteScore, body
    if (postDetail) {
      let { id, title, timestamp, author, voteScore, body, category } = postDetail
      postToShow = (
				<div>
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
              <p className="post-body">{body}</p>
              <p className="post-comments">{`805 comments `}</p>
            </div>
          </div>
        </Segment>
				<Comments	/>
				</div>
      )
    }else {
			postToShow = null
		}
    return postToShow
  }
}

function mapStateToProps({
  // posts:{ byId:pById, allIds:allPIds,orderBy='voteScore' },
  posts,
  comments = [],
  postDetail = {}
}) {
  return {
    // posts : Utils.itemsSortedBy(pById, allPIds, orderBy) ,
    posts,
    comments,
    postDetail
  }
}
export default connect(mapStateToProps)(PostDetail)
