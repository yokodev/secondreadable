import * as API from 'service/'

export const ADD_POST = 'ADD_POST'

export const UPDATE_POST = 'UPDATE_POST'



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
