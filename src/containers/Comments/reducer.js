import  * as Action  from './actions'
import  mapkeys from 'lodash.mapkeys'

const initialState = { orderBy:'voteScore'}
function comments(state = initialState, action ){
  switch (action.type) {
    case Action.GET_COMMENTS_BY_POSTID:
      return {...state, loading:true}
    case Action.GET_COMMENTS_BY_POSTID_SUCCESS:
      return {...state, loading:false, byId:mapkeys(action.comments,'id') }
    case Action.GET_COMMENTS_BY_POSTID_FAILURE:
      return {...state, message:action.error, error:action.error}
    case Action.SET_ORDER_BY:
       return {...state, orderBy:action.sortBy }
    case Action.SET_MESSAGE:
      return {...state, loading:false, message:action.response }
    default:
      return state
  }
}

export default comments
