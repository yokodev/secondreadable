import { createSelector } from 'reselect'
import _ from 'lodash'
// create select function to pickup the piece of state we want

const postsSelector = state => state.posts.byId
const postsIdsSelector = state =>state.posts.allIds
const orderBySelector = state =>state.posts.orderBy

const arrayFromObject = (objectToConvert, idsArray) => {
  let result = []
  objectToConvert ? result = idsArray.map(itemID => objectToConvert[itemID]) : result = []
  return result
}

export const postsArrayFromObject = createSelector(
	postsSelector,
	postsIdsSelector,
	arrayFromObject
)

const orderedPostBy = ( posts=[], sortItemsBy) =>{
	return posts && posts.length > 0 && sortItemsBy === 'voteScore'
	? _.orderBy(posts, ['voteScore'], ['desc'])
	: _.orderBy(posts, ['timestamp'], ['desc'])
}

export const orderByPosts = createSelector(
	postsArrayFromObject,
	orderBySelector,
	orderedPostBy
)
