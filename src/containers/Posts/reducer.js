import  * as Action  from './actions'
import omit from 'lodash.omit'
import  mapkeys from 'lodash.mapkeys'

function createNewPosts(newPosts){
  let byId={}, allIds=[]
  byId = mapkeys(newPosts,'id')
  allIds = Object.keys(byId)
  return { byId, allIds }
}


const initialState = { orderBy:'voteScore'}
// const initialState = { orderBy:'timestamp'}

function posts(state = initialState, action ){
  switch (action.type) {
    case Action.RECEIVE_POSTS:
      return { ...state, ...createNewPosts(action.posts) }
    case Action.SET_ORDER_BY:
       return {...state, orderBy:action.sortBy }
    case Action.POST_DELETED:
      return  omit(state,action.postId)
    case Action.SET_POST_RATE:
      return  {...state, loading:true}
    case Action.SET_POST_RATE_SUCCESS:
      let post = action.response
      return  { ...state, loading:false,
        byId:{ ...state.byId, [post.id]: post }
      }
    case Action.SET_POST_RATE_FAILURE:
    return  {...state, loading:false, error:action.error }
    default:
      return state
  }
}

export default posts
