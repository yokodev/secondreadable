import  * as Action  from './actions'
import  mapkeys from 'lodash.mapkeys'

const initialState = { orderBy:'voteScore'}
function comments(state = initialState, action ){
  switch (action.type) {
    case Action.GET_COMMENTS_BY_POSTID:
      console.log('comments by postID');
      return {...state, loading:true}
    case Action.GET_COMMENTS_BY_POSTID_SUCCESS:
      console.log('comments by postID success')
        console.log(action);
      return {...state, loading:false, byId:mapkeys(action.comments,'id') }
    case Action.GET_COMMENTS_BY_POSTID_FAILURE:
    console.log('comments by postID Failed');
    return {...state, message:action.error, error:action.error}
    case Action.SET_MESSAGE:
      console.log('comments by postID  MESSAGE');
      return {...state, loading:false, message:action.response }
    default:
      return state
  }
}

export default comments
