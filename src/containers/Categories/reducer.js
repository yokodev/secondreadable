import * as Action from './actions'
import mapkeys from 'lodash.mapkeys'

function createNewCategories(newCategories) {
  const byId = mapkeys(newCategories.categories, 'path')
  const allIds = Object.keys(byId)
  return { byId, allIds }
}

function categories(state = {}, action) {
  switch (action.type) {
    case Action.RECEIVE_CATEGORIES:
      return {
        ...state,
        ...createNewCategories(action.categories)
      }
    default:
      return state
  }
}

export default categories
