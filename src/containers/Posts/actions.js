import * as API from 'service/'
import * as postDetailActions from '../Post/Detail/actions'

export const RECEIVE_POSTS = 'readable/Posts/RECEIVE_POSTS'
export const RECEIVE_POSTS_FAILURE = 'readable/Posts/RECEIVE_POSTS_FAILURE'
export const RECEIVE_CATEGORIES = 'readable/Posts/RECEIVE_CATEGORIES'
export const RECEIVE_COMMENTS = 'readable/Posts/RECEIVE_COMMENTS'

export const POST_DELETED = 'POST_DELETED'

export const SET_POST_RATE = 'readable/Posts/SET_POST_RATE'
export const SET_POST_RATE_SUCCESS = 'readable/Posts/SET_POST_RATE_SUCCESS'
export const SET_POST_RATE_FAILURE = 'readable/Posts/SET_POST_RATE_FAILURE'

export const GETTING_COMMENTS_FOR_THIS_POST= 'readable/Posts/GETTING_COMMENTS_FOR_THIS_POST'
export const GETTING_COMMENTS_FOR_THIS_POST_SUCCESS = 'readable/Posts/GETTING_COMMENTS_FOR_THIS_POST_SUCCESS'
export const GETTING_COMMENTS_FOR_THIS_POST_FAILURE = 'readable/Posts/GETTING_COMMENTS_FOR_THIS_POST_FAILURE'

export const POST_AND_COMMENTS= 'readable/Posts/POST_AND_COMMENTS'
export const POST_AND_COMMENTS_SUCCESS = 'readable/Posts/POST_AND_COMMENTS_SUCCESS'
export const POST_AND_COMMENTS_FAILURE = 'readable/Posts/POST_AND_COMMENTS_FAILURE'

// this is the sorting part
export const SET_ORDER_BY = 'SET_ORDER_BY'
export function setOrderBy(sortBy) {
  return {
    type: SET_ORDER_BY,
    sortBy
  }
}
// this is the sorting part

export const commentsForThisPost = id => dispatch => {
  dispatch({ type: GETTING_COMMENTS_FOR_THIS_POST })
  return API.allCommentsByPostId(id).then(
    comments =>
      dispatch({ type: GETTING_COMMENTS_FOR_THIS_POST_SUCCESS, id, comments }),
    error => {
      dispatch({ type: GETTING_COMMENTS_FOR_THIS_POST_FAILURE, error })
      throw error
    }
  )
}

export const allPostsWComments = () => (dispatch, getState) => {
  return dispatch(getPosts()).then(() => {
    const allIds = getState().posts.allIds
    allIds &&
      allIds.length > 0 &&
      allIds.map(singlePostId => dispatch(commentsForThisPost(singlePostId)))
  })
}
export const allPostsWCommentsNCat = cat => (dispatch, getState) => {
  return dispatch(getPostsByCat(cat)).then(() => {
    const allIds = getState().posts.allIds
    allIds &&
      allIds.length > 0 &&
      allIds.map(singlePostId => dispatch(commentsForThisPost(singlePostId)))
  })
}

export function getPosts() {
  return function(dispatch) {
    return API.getPosts().then(
      posts => dispatch(receivePosts(posts)),
      error => {
        dispatch({ type: RECEIVE_POSTS_FAILURE, error })
        throw error
      }
    )
  }
}

export function getPostsByCat(thisCategory) {
  return function(dispatch) {
    return API.getPostsByCategory(thisCategory) //TODO this is where I need to fix the counting of comments
      .then(
        posts => dispatch(receivePosts(posts)),
        error => {
          dispatch({ type: RECEIVE_POSTS_FAILURE, error })
          throw error
        }
      )
  }
}

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function deletePost(postId, callback) {
  return function(dispatch) {
    return API.deletePost(postId).then(post => {
      //TODO this is how I cheat the reducer and save a action type
      //SO I have to send getPosts a callback
      // dispatch(getPosts())
      dispatch(allPostsWComments())
      callback()
    })
  }
}

export function postDeleted(postId) {
  return {
    type: POST_DELETED,
    postId
  }
}

export const setPostRate = (postId, voteScore) => dispatch => {
  dispatch({ type: SET_POST_RATE })
  return API.voteOnPost(postId, voteScore).then(
    response => {
      dispatch({ type: SET_POST_RATE_SUCCESS, response })
      dispatch({
        type: postDetailActions.SET_POST_DETAIL_RATE_SUCCESS,
        response
      })
    },
    error => {
      dispatch({ type: SET_POST_RATE_FAILURE, error })
      dispatch({ type: postDetailActions.SET_POST_DETAIL_RATE_FAILURE, error })
      throw error
    }
  )
}
