import * as API from 'service/'


export const GET_COMMENTS_BY_POSTID = 'readable/Comments/GET_COMMENTS_BY_POSTID'
export const GET_COMMENTS_BY_POSTID_SUCCESS = 'readable/Comments/GET_COMMENTS_BY_POSTID_SUCCESS'
export const GET_COMMENTS_BY_POSTID_FAILURE = 'readable/Comments/GET_COMMENTS_BY_POSTID_FAILURE'
export const SET_MESSAGE = 'readable/Comments/SET_MESSAGE'

export const setMessage = (message)=>({
    type:SET_MESSAGE,
    message
})

export const getCommentsById = ()=>({
    type:GET_COMMENTS_BY_POSTID
})
export const commentsByIdSuccess=(comments)=>({
  type:GET_COMMENTS_BY_POSTID_SUCCESS,
  comments
})

export const commentsByIdFailure=(error)=>({
  type:GET_COMMENTS_BY_POSTID_FAILURE,
  error
})


export const commentsByPost = (postId)=>dispatch=>{
  dispatch(getCommentsById)
  return API.allCommentsByPostId(postId)
    .then(
      response =>{
        dispatch(commentsByIdSuccess(response))
        dispatch(setMessage(response))
      },
      error=>{
        dispatch(commentsByIdFailure(error))
        // dispatch(setMessage(error))
        throw error
      }
    )
}
