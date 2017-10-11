import  * as Action  from './actions'
// import  mapkeys from 'lodash.mapkeys'
//
// function genPostDetail(state={},postId){
//   let postDetail ;
//   state.byId ? postDetail = state.byId[postId]:postDetail={}
//   return postDetail ? {postDetail}: {id:postId, title: "State was empty on post reducer"}
// }

function postDetail(state = {}, action ){
  switch (action.type) {
    case Action.RECEIVE_POST_DETAIL:
      return { ...state, ...action.postDetail }
    default:
      return state
  }
}

export default postDetail
