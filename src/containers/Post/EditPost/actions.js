import * as API from 'service/'

export const EDIT_POST = 'readable/Post.Edit/EDIT_POST'
export const EDIT_POST_SUCCESS = 'readable/Post.Edit/EDIT_POST_SUCCESS'
export const EDIT_POST_FAILURE = 'readable/Post.Edit/EDIT_POST_FAILURE'

export const editPostAction = () => ({
  type: EDIT_POST
})

export function createNewPost(newPost, callback) {
  return function(dispatch) {
    API.createNewPost(newPost).then(
      data => {
        // console.log(`Request succedeed`, data)
        callback()
      },
      error => {
        console.log('error on createNewPosts')
        throw error
      }
    )
  }
}

export const editPost = (postData, callback) => dispatch => {
  dispatch(editPostAction)
  return API.editPost(postData).then(
    response => {
      dispatch({ type: EDIT_POST_SUCCESS, response })
      callback()
    },
    error => {
      dispatch({ type: EDIT_POST_FAILURE, error })
      throw error
    }
  )
}

//

//
