import * as API from 'service/'

export const ADD_POST = 'ADD_POST'

export const UPDATE_POST = 'UPDATE_POST'
export const EDIT_POST = 'EDIT_POST'



export function createNewPost(newPost,callback) {
  return function(dispatch){
    API.createNewPost(newPost)
    .then((data)=>{
      console.log(`Request succedeed`,data)
      callback()
      console.log('hello after callback');
    })
  }
}

export function editPost(postId,callback) {
  return function(dispatch){
    API.createNewPost(postId)
    .then((data)=>{
      console.log(`Request succedeed`,data)
      callback()
    })
  }
}

//
// PUT /posts/:id
//       USAGE:
//         Edit the details of an existing post
//       PARAMS:
//         title - String
//         body - String
//
// GET /posts/:id
//       USAGE:
//         Get the details of a single post
