import  * as Action  from '../actions'
import  mapkeys from 'lodash.mapkeys'

const initialState = {
  entities:{
    categories:{ byId:{}, allIds:[]},
    posts:{ byId:{}, allIds:[] },
    comments:{ byId:{}, allIds:[] },
    categoryPostComment:{ byId:{ }, allIds:[] }
  },
  ui:{}
}

function readable(state = initialState, action ){
  switch (action.type) {
    case Action.GET_POSTS:
      let newPosts = mapkeys(action.posts,'id')
      return {...state.entities.posts.byId, ...newPosts}

    default:
      return state
  }
}


export default readable
