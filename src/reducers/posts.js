import  * as Action  from '../actions'
import  * as AppAction  from '../actions/app'
import  mapkeys from 'lodash.mapkeys'

function createNewPosts(newPosts){
  let byId={}, allIds=[]
  byId = mapkeys(newPosts,'id')
  allIds = Object.keys(byId)
  return { byId, allIds }
}

function posts(state = {}, action ){
  switch (action.type) {
    case Action.RECEIVE_POSTS:
      return { ...state, ...createNewPosts(action.posts) }
    case AppAction.SET_ORDER_BY:
      return { ...state, orderBy:action.sortBy }
    default:
      return state
  }
}

export default posts
