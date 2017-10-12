import * as API from 'service/'


export const RECEIVE_POST_DETAIL = 'readable/Post.Detail/RECEIVE_POST_DETAIL'
export const GENERATE_POST_DETAIL = 'readable/Post.Detail/GENERATE_POST_DETAIL'

export const RECEIVE_FULL_POST_DETAIL = 'readable/Post.Detail/RECEIVE_FULL_POST_DETAIL'
export const GENERATE_FULL_POST_DETAIL = 'readable/Post.Detail/GENERATE_FULL_POST_DETAIL'

export const GET_POST_DETAIL = 'readable/Post.Detail/GET_POST_DETAIL'
export const GET_POST_DETAIL_SUCCESS = 'readable/Post.Detail/GET_POST_DETAIL_SUCCESS'
export const GET_POST_DETAIL_FAILURE = 'readable/Post.Detail/GET_POST_DETAIL_FAILURE'


// export function receivePostDetail(postDetail){
//   return {
//     type: RECEIVE_POST_DETAIL,
//     postDetail
//   }
// }

export const getPostDetail = (postId)=>
  dispatch=>{
    dispatch({type:GET_POST_DETAIL})
    return API.getPostDetail(postId)
    .then(
      postDetail =>
        dispatch({type:GET_POST_DETAIL_SUCCESS, postDetail }),
      error =>{
        dispatch({type:GET_POST_DETAIL_FAILURE, postId, error})
        throw error
      }
    )
  }

// export const genPostDetail = (postId)=>(
//   {
//     type:GENERATE_POST_DETAIL,
//     postId
//   }
// )
// export const genFullPostDetail = (postId)=>
//   dispatch=>
//     API.getPostDetailByPostId(postId)
//     .then(
//       json => dispatch({ type: DO_SOMETHING, json }),
//       err => dispatch({ type: SOMETHING_FAILED, err })
//     )
//
//
//
//     type:GENERATE_FULL_POST_DETAIL,
//     postId
