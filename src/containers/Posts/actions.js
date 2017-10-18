import * as API from 'service/'
import * as postDetailActions from '../Post/Detail/actions'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

export const POST_DELETED = 'POST_DELETED'

export const SET_POST_RATE = 'readable/Posts/SET_POST_RATE'
export const SET_POST_RATE_SUCCESS = 'readable/Posts/SET_POST_RATE_SUCCESS'
export const SET_POST_RATE_FAILURE = 'readable/Posts/SET_POST_RATE_FAILURE'


// this is the sorting part
export const SET_ORDER_BY = 'SET_ORDER_BY'
export function setOrderBy(sortBy){
  return{
    type:SET_ORDER_BY,
    sortBy
  }
}
// this is the sorting part

export function getPosts() {
  return function(dispatch){
    return API.getPosts()
      .then(posts=>dispatch(receivePosts(posts)))
  }//TODO THE SAME AS BELOW THIS NEEDS TO GET FIXED IN ORDER TO PASS THE COUNT NUMBER
}

export function receivePosts(posts){
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function getPostsByCat(thisCategory) {
  return function(dispatch){
    return API.getPostsByCategory(thisCategory) //TODO this is where I need to fix the counting of comments
      .then(posts=>dispatch(receivePosts(posts)))
  }
}

export function deletePost(postId,callback) {
  return function(dispatch){
    return API.deletePost(postId)
    .then(post=>{
      console.log(`Request succedeed`,post)
      dispatch(getPosts())
      callback()
    })
        // return dispatch(getPosts())
  }
}

export function postDeleted(postId){
  return {
    type: POST_DELETED,
    postId
  }
}

export const setPostRate = (postId, voteScore)=>
  dispatch=>{
    dispatch({type:SET_POST_RATE})
    return API.voteOnPost(postId,voteScore)
    .then(
      response=>{
        dispatch({type:SET_POST_RATE_SUCCESS,response})
        dispatch({type:postDetailActions.SET_POST_DETAIL_RATE_SUCCESS,response})
      },
      error=>{
        dispatch({type:SET_POST_RATE_FAILURE,error})
        dispatch({type:postDetailActions.SET_POST_DETAIL_RATE_FAILURE,error})
        throw error
      }
    )
}
