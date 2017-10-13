import  * as Action  from './actions'
import omit from 'lodash.omit'
import  mapkeys from 'lodash.mapkeys'

function createNewPosts(newPosts){
  let byId={}, allIds=[]
  byId = mapkeys(newPosts,'id')
  allIds = Object.keys(byId)
  return { byId, allIds }
}

// const initialState = { orderBy:'voteScore'}
const initialState = { orderBy:'timestamp'}

function posts(state = initialState, action ){
  switch (action.type) {
    case Action.RECEIVE_POSTS:
      return { ...state, ...createNewPosts(action.posts) }
    case Action.SET_ORDER_BY:
      console.log('setting orderBy: ',state);
      return   Object.assign({}, state, {orderBy:action.sortBy})
      // return Object.assign({},state,{orderBy:action.sortBy})
    case Action.POST_DELETED:
      // let istado= {...state}
      // console.log('stado en POST_DELETED: ',state);
      // console.log('PAYLOAD en POST_DELETED: ',action);
      // console.log('boy a borrar en POST_DELETED: ',action.postId);
      // console.log('resultado en POST_DELETED: ',omit(istado,action.postId));
      return  omit(state,action.postId)
    default:
      return state
  }
}

export default posts
