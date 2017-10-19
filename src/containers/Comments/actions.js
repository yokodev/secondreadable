import * as API from 'service/'

export const GET_COMMENTS_BY_POSTID = 'readable/Comments/GET_COMMENTS_BY_POSTID'
export const GET_COMMENTS_BY_POSTID_SUCCESS = 'readable/Comments/GET_COMMENTS_BY_POSTID_SUCCESS'
export const GET_COMMENTS_BY_POSTID_FAILURE = 'readable/Comments/GET_COMMENTS_BY_POSTID_FAILURE'

export const SET_MESSAGE = 'readable/Comments/SET_MESSAGE'
export const SET_ORDER_BY = 'readable/Comments/SET_ORDER_BY'

export const SET_COMMENT_RATE = 'readable/Comments/SET_COMMENT_RATE'
export const SET_COMMENT_RATE_SUCCESS = 'readable/Comments/SET_COMMENT_RATE_SUCCESS'
export const SET_COMMENT_RATE_FAILURE = 'readable/Comments/SET_COMMENT_RATE_FAILURE'

export const ADD_COMMENT = 'readable/Comments/ADD_COMMENT'
export const ADD_COMMENT_SUCCESS = 'readable/Comments/ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_FAILURE = 'readable/Comments/ADD_COMMENT_FAILURE'

export const EDIT_COMMENT = 'readable/Comments/EDIT_COMMENT'
export const EDIT_COMMENT_SUCCESS = 'readable/Comments/EDIT_COMMENT_SUCCESS'
export const EDIT_COMMENT_FAILURE = 'readable/Comments/EDIT_COMMENT_FAILURE'

export const GET_COMMENT_DETAIL = 'readable/Comments/GET_COMMENT_DETAIL'
export const GET_COMMENT_DETAIL_SUCCESS = 'readable/Comments/GET_COMMENT_DETAIL_SUCCESS'
export const GET_COMMENT_DETAIL_FAILURE = 'readable/Comments/GET_COMMENT_DETAIL_FAILURE'

export const DELETE_COMMENT = 'readable/Comments/DELETE_COMMENT'
export const DELETE_COMMENT_SUCCESS = 'readable/Comments/DELETE_COMMENT_SUCCESS'
export const DELETE_COMMENT_FAILURE = 'readable/Comments/DELETE_COMMENT_FAILURE'


export const SET_COMMENT_TO_DETAIL = 'readable/Comments/SET_COMMENT_TO_DETAIL'
export const DELETE_COMMENT_TO_DETAIL = 'readable/Comments/DELETE_COMMENT_TO_DETAIL'
export const ADD_COMMENT_TO_DETAIL = 'readable/Comments/ADD_COMMENT_TO_DETAIL'



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
        dispatch({type:SET_COMMENT_TO_DETAIL ,
          comments:response && response.length>0? response.length: 0 })
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



/***********ADD-NEW-COMMENT************/
export const addNewComment = (postId, formValues)=>
  dispatch=>{
    dispatch({type:ADD_COMMENT})
    return API.addNewComment(postId, formValues)
    .then(
      response =>{
        dispatch({type:ADD_COMMENT_SUCCESS, response})
        dispatch({type:ADD_COMMENT_TO_DETAIL, response})
      },
      error =>{
        dispatch({type:ADD_COMMENT_FAILURE, error})
        throw error
      }
    )
  }
/***********ADD-NEW-COMMENT************/

/***********DELETE-COMMENT************/
export const deleteComment = (commentId)=>
  dispatch=>{
    dispatch({type:DELETE_COMMENT})
    return API.deleteComment(commentId)
    .then(
      response =>{
        dispatch({type:DELETE_COMMENT_SUCCESS, response})
        dispatch({type:DELETE_COMMENT_TO_DETAIL, response})
      },
      error =>{
        dispatch({type:DELETE_COMMENT_FAILURE, error})
        throw error
      }
    )
  }
/***********DELETE-COMMENT************/

/***********EDIT-COMMENT************/
export const editComment = (commentId, body)=>
  dispatch=>{
    dispatch({type:EDIT_COMMENT})
    return API.editComment(commentId, body)
    .then(
      response =>{
        dispatch({type:EDIT_COMMENT_SUCCESS, response})
      },
      error =>{
        dispatch({type:EDIT_COMMENT_FAILURE, error})
        throw error
      }
    )
  }
/***********EDIT-COMMENT************/

export const getThisComment = (commentId, callback)=>
  dispatch=>{
    dispatch({type:GET_COMMENT_DETAIL})
    return API.getCommentDetail(commentId )
    .then(
      response =>{
        dispatch({type:GET_COMMENT_DETAIL_SUCCESS, response})
        callback(response)
      },
      error =>{
        dispatch({type:GET_COMMENT_DETAIL_FAILURE, error})
        throw error
      }
    )
  }
/***********EDIT-COMMENT************/
