import  * as Action  from '../actions'
import  mapkeys from 'lodash.mapkeys'

const initialState = {
    categories:{ byId:{}, allIds:[]},
    posts:{ byId:{}, allIds:[] },
    comments:{ byId:{}, allIds:[] },
    ui:{}
}

function createNewPosts(newPosts){
  let byId={}, allIds=[]
  byId = mapkeys(newPosts,'id')
  allIds = Object.keys(byId)
  return {
    posts:{ byId, allIds }
  }
}

function readable(state = initialState, action ){
  switch (action.type) {
    case Action.RECEIVE_POSTS:
      return {...state,  ...createNewPosts(action.posts)}
    default:
      return state
  }
}


export default readable
