import * as API from '../service/'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const RECEIVE_POST_DETAIL = 'RECEIVE_POST_DETAIL'
export const GENERATE_POST_DETAIL = 'GENERATE_POST_DETAIL'
export const GENERATE_OWN_POST_DETAIL = 'GENERATE_OWN_POST_DETAIL'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'



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

export function getCategories() {
  return function(dispatch){
    return API.getCategories()
      .then(categories=>dispatch(receiveCategories(categories)))
  }
}

export function receiveCategories(categories){
  console.log(categories);
  return {
    type: RECEIVE_CATEGORIES,
    categories
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
