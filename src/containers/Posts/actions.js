import * as API from 'service/'
// export const RECEIVE_POSTS = 'readable/App/RECEIVE_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
// export const RECEIVE_POST_DETAIL = 'RECEIVE_POST_DETAIL'
// export const GENERATE_POST_DETAIL = 'GENERATE_POST_DETAIL'
// export const GENERATE_OWN_POST_DETAIL = 'GENERATE_OWN_POST_DETAIL'

export const POST_DELETED = 'POST_DELETED'

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
  }
}

export function receivePosts(posts){
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function getPostsByCat(thisCategory) {
  return function(dispatch){
    return API.getPostsByCategory(thisCategory)
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
