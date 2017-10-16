import  * as Action  from './actions'
import  mapkeys from 'lodash.mapkeys'
import omit from 'lodash.omit'

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
    case Action.SET_COMMENT_RATE:
        return {...state, loading:true}
    case Action.SET_COMMENT_RATE_SUCCESS:
        return {...state, loading:false,
          byId:{...state.byId, [action.response.id]:action.response}
         }
    case Action.SET_COMMENT_RATE_FAILURE:
        return {...state, loading:false, error:action.error}
    case Action.ADD_COMMENT:
        return {...state, loading:true }
    case Action.ADD_COMMENT_SUCCESS:
        return {...state, loading:false,
          byid:{...state.byId,
            [action.response.id]:action.respose
          }
        }
    case Action.ADD_COMMENT_FAILURE:
        return {...state, loading:false, error:action.error}
    case Action.EDIT_COMMENT:
        return {...state, loading:true }
    case Action.EDIT_COMMENT_SUCCESS:
        return {...state, loading:false,
          byid:{...state.byId,
            [action.response.id]:action.respose
          }
        }
    case Action.EDIT_COMMENT_FAILURE:
        return {...state, loading:false, error:action.error}
    case Action.DELETE_COMMENT:
        return  omit(state,action.commentId)
    default:
      return state
  }
}

export default comments
