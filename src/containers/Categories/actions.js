import * as API from 'service/'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
// export const RECEIVE_CATEGORIES = 'readable/App/RECEIVE_CATEGORIES'

export function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

export function getCategories() {
  return function(dispatch) {
    return API.getCategories().then(categories =>
      dispatch(receiveCategories(categories))
    )
  }
}

