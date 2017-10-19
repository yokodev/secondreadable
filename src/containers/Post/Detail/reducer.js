import * as Action from './actions'
import * as postsActions from 'containers/Posts/actions'
import {
  SET_COMMENT_TO_DETAIL,
  DELETE_COMMENT_TO_DETAIL,
  ADD_COMMENT_TO_DETAIL
} from 'containers/Comments/actions'

function postDetail(state = {}, action) {
  switch (action.type) {
    case Action.RECEIVE_POST_DETAIL:
      return { ...state, ...action.postDetail }
    case Action.GET_POST_DETAIL:
      return { ...state, loading: true }
    case Action.GET_POST_DETAIL_SUCCESS:
      return { ...state, loading: false, ...action.postDetail }
    case Action.GET_POST_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        id: action.postId
      }
    case postsActions.SET_POST_RATE:
      return { ...state, loading: true }
    case Action.SET_POST_DETAIL_RATE_SUCCESS:
      return { ...state, loading: false, voteScore: action.response.voteScore }
    case Action.SET_POST_DETAIL_RATE_FAILURE:
      return { ...state, loading: false, error: action.error }
    case SET_COMMENT_TO_DETAIL:
      return { ...state, comments: action.comments }
    case DELETE_COMMENT_TO_DETAIL:
      return { ...state, comments: state.comments - 1 }
    case ADD_COMMENT_TO_DETAIL:
      return { ...state, comments: state.comments + 1 }
    default:
      return state
  }
}

export default postDetail
