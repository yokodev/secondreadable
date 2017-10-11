import  * as Action  from '../actions'
import  * as AppAction  from '../actions/app'
import  mapkeys from 'lodash.mapkeys'

function createNewPosts(newPosts){
  let byId={}, allIds=[]
  byId = mapkeys(newPosts,'id')
  allIds = Object.keys(byId)
  return { byId, allIds }
}

function genPostDetail(state={},postId){
  // console.log(state)
  let postDetail ;
  state.byId ? postDetail = state.byId[postId]:postDetail={}
  return postDetail ? {postDetail}: {id:postId, title: "State was empty on post reducer"}
}

function posts(state = {}, action ){
  switch (action.type) {
    case Action.RECEIVE_POSTS:
      return { ...state, ...createNewPosts(action.posts) }
    case Action.GENERATE_POST_DETAIL:
    console.log('entro');
      return { ...state, ...genPostDetail(state, action.postId) }
    case Action.RECEIVE_POST_DETAIL:
      return { ...state, ...{postDetail:action.postDetail} }
    case AppAction.SET_ORDER_BY:
      return { ...state, orderBy:action.sortBy }
    default:
      return state
  }
}

export default posts
