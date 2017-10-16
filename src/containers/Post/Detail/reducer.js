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
    case Action.GET_POST_DETAIL:
      return { ...state, loading: true }
    case Action.GET_POST_DETAIL_SUCCESS:
      return { ...state, loading:false, ...action.postDetail }
    case Action.GET_POST_DETAIL_FAILURE:
      return { ...state, loading:false, error:action.error,id:action.postId }
    case Action.SET_POST_DETAIL_RATE:
      return  {...state, loading:true}
    case Action.SET_POST_DETAIL_RATE_SUCCESS:
    console.log('la cation antes de',action);
      return  { ...state, loading:false, voteScore: action.response }
    case Action.SET_POST_DETAIL_RATE_FAILURE:
    return  {...state, loading:false, error:action.error }
    default:
      return state
  }
}

export default postDetail
