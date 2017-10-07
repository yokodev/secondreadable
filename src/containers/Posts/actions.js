import * as API from 'service/'
export const RECEIVE_POSTS = 'readable/App/RECEIVE_POSTS'
export const RECEIVE_CATEGORIES = 'readable/App/RECEIVE_CATEGORIES'
export const RECEIVE_COMMENTS = 'readable/App/RECEIVE_COMMENTS'
export const RECEIVE_POST_DETAIL = 'readable/App/RECEIVE_POST_DETAIL'
export const GENERATE_POST_DETAIL = 'readable/App/GENERATE_POST_DETAIL'
export const GENERATE_OWN_POST_DETAIL = 'readable/App/GENERATE_OWN_POST_DETAIL'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';


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
