import * as API from 'service/'

export const RECEIVE_POST_DETAIL = 'readable/App/RECEIVE_POST_DETAIL'
export const GENERATE_POST_DETAIL = 'readable/App/GENERATE_POST_DETAIL'
export const GENERATE_OWN_POST_DETAIL = 'readable/App/GENERATE_OWN_POST_DETAIL'



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
