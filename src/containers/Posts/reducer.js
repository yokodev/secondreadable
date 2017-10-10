import  * as Action  from './actions'

import  mapkeys from 'lodash.mapkeys'

function createNewPosts(newPosts){
  let byId={}, allIds=[]
  byId = mapkeys(newPosts,'id')
  allIds = Object.keys(byId)
  return { byId, allIds }
}

// function genPostDetail(state={},postId){
//   let postDetail ;
//   state.byId ? postDetail = state.byId[postId]:postDetail={}
//   return postDetail ? {postDetail}: {id:postId, title: "State was empty on post reducer"}
// }

const initialState = { orderBy:'voteScore'}
function posts(state = initialState, action ){
  switch (action.type) {
    case Action.RECEIVE_POSTS:
      return { ...state, ...createNewPosts(action.posts) }
    // case Action.GENERATE_POST_DETAIL:
    //   return { ...state, ...genPostDetail(state, action.postId) }
    // case Action.RECEIVE_POST_DETAIL:
    //   return { ...state, ...{postDetail:action.postDetail} }
    case Action.SET_ORDER_BY:
      console.log('stado: ',state);
      return {...state, orderBy:action.sortBy }
      // return Object.assign({},state,{orderBy:action.sortBy})
    default:
      return state
  }
}

export default posts
