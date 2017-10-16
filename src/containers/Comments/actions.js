import * as API from 'service/'


export const GET_COMMENTS_BY_POSTID = 'readable/Comments/GET_COMMENTS_BY_POSTID'
export const GET_COMMENTS_BY_POSTID_SUCCESS = 'readable/Comments/GET_COMMENTS_BY_POSTID_SUCCESS'
export const GET_COMMENTS_BY_POSTID_FAILURE = 'readable/Comments/GET_COMMENTS_BY_POSTID_FAILURE'
export const SET_MESSAGE = 'readable/Comments/SET_MESSAGE'

export const SET_COMMENT_RATE = 'readable/Comments/SET_COMMENT_RATE'
export const SET_COMMENT_RATE_SUCCESS = 'readable/Comments/SET_COMMENT_RATE_SUCCESS'
export const SET_COMMENT_RATE_FAILURE = 'readable/Comments/SET_COMMENT_RATE_FAILURE'

export const SET_ORDER_BY = 'readable/Comments/SET_ORDER_BY'
// export const SET_ORDER_BY_SUCCESS = 'readable/Comments/SET_ORDER_BY_SUCCESS'
// export const SET_ORDER_BY_FAILURE = 'readable/Comments/SET_ORDER_BY_FAILURE'

// this is the sorting part
export function setOrderBy(sortBy){
  return{
    type:SET_ORDER_BY,
    sortBy
  }
}

// this is the sorting part

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

/***********SET-COMMENT-RATE************/
export const setCommentRate = (commentId, voteScore)=>
  dispatch=>{
    dispatch({type:SET_COMMENT_RATE})
    return API.voteOnComment(commentId,voteScore)
    .then(
      response=>
        dispatch({type:SET_COMMENT_RATE_SUCCESS,response}),
      error=>{
        dispatch({type:SET_COMMENT_RATE_FAILURE,error})
        throw error
      }
    )
}
/***********SET-COMMENT-RATE************/
