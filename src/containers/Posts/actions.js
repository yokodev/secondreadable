import * as API from 'service/'
// export const RECEIVE_POSTS = 'readable/App/RECEIVE_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const RECEIVE_POST_DETAIL = 'RECEIVE_POST_DETAIL'
export const GENERATE_POST_DETAIL = 'GENERATE_POST_DETAIL'
export const GENERATE_OWN_POST_DETAIL = 'GENERATE_OWN_POST_DETAIL'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'

// this is the sorting part
export const SET_ORDER_BY = 'SET_ORDER_BY'

// export const sortBy = {
//   timestamp: 'TIMESTAMP',
//   votescore: 'VOTESCORE',
// }

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

export function receivePostDetail(postDetail){
  return {
    type: RECEIVE_POST_DETAIL,
    postDetail
  }
}
export const getPostDetail = (postId)=>(dispatch)=> API.getPostDetail(postId)
  .then( postDetail=>dispatch(receivePostDetail(postDetail)))

export const genPostDetail = (postId)=>(
  {
    type:GENERATE_POST_DETAIL,
    postId
  }
)

export function createNewPost(newPost,callback) {
  return function(dispatch){
    API.createNewPost(newPost)
    .then((data)=>{
      console.log(`Request succedeed`,data)
      callback()
    })
        // return dispatch(getPosts())
  }
}
