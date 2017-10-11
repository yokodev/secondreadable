import  * as Action  from '../actions'
import  mapkeys from 'lodash.mapkeys'

function createNewComments(newComments){
  let byId={}, allIds=[]
  byId = mapkeys(newComments,'id')
  allIds = Object.keys(byId)
  return { byId, allIds }
}

function comments(state = {}, action ){
  switch (action.type) {
    case Action.RECEIVE_COMMENTS:
      return { ...state, ...createNewComments(action.comments) }
    default:
      return state
  }
}

export default comments
