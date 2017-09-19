import * as API from '../service/'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
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
  console.log(posts);
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function getPostsBy(categories) {
  return function(dispatch){
    return API.getPosts(categories)
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
