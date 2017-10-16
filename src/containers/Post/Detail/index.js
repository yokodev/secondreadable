import React, { Component } from 'react'
import { connect  } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as Util from 'utils'
import { Segment, Image, Dimmer, Loader, Label, Icon } from 'semantic-ui-react'
import Rater from 'components/Rater'
import { getPostDetail } from './actions'
import {commentsByPost, setCommentRate}  from 'containers/Comments/actions'
import Comments from 'containers/Comments'
import {setPostRate} from 'containers/Posts/actions'
import './detail.css'

class PostDetail extends Component {
  componentDidMount() {
    // console.log(`this props on detail componentDidMount: `,this.props)

    this.props.dispatch(getPostDetail(this.props.match.params.id))
    this.props.dispatch(commentsByPost(this.props.match.params.id))

  }
  rateUp = ()=>{
    let { postDetail:{id},dispatch}=this.props
    // console.log('rateUP enPostItem con postID: ',id);
    this.props.dispatch(setPostRate(id,'upVote'))
  }
  rateDown = ()=>{
    let { postDetail:{id},dispatch}=this.props
    // console.log('rateDOWN enPostItem con postID: ',this.props);
    this.props.dispatch(setPostRate(id,'downVote'))
  }
  render() {
    const { postDetail, comments } = this.props
    // const { id, title, timestamp, author, voteScore, body } = postDetail
    let postToShow
    if (postDetail) {
      let { id, title, timestamp, author, voteScore, body, category } = postDetail
      postToShow =
      <Segment>
        <Segment>
          <div className="post">
            <div className="post-rater">
              <Rater voteScore={voteScore} rateUp={this.rateUp} rateDown={this.rateDown} />
            </div>
            <div className="post-image">
              <Image shape="circular" src="https://picsum.photos/100/100/?random" size="small" />
            </div>
            <div className="post-content">
              <h2 className="post-title">{title}</h2>
              <p className="post-submitted">
                {`submitted ${Util.timeSince(timestamp)} by `} <span> {author} </span>
              </p>
              <p className="post-body">{body}</p>
              <p className="post-comments">{`805 comments `}</p>// FIXME: Comments not working
            </div>
          </div>
          <Label as='a' color='red' ribbon="right"><Icon name="comments" />805 Comments</Label>
        </Segment>
        <Segment>
          {/* <Comments comments={comments} id={id} /> */}
          <Comments  id={id} />
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

const mapStateToProps =({postDetail})=> ({
  postDetail
   })

   export default connect(mapStateToProps)(PostDetail)
// export default connect(mapStateToProps, { getPostDetail})(PostDetail)
// export default connect(mapStateToProps, {setPostRate, commentsByPost, getPostDetail})(PostDetail)
// export default PostDetail
