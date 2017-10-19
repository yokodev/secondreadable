import { createSelector } from 'reselect'
import _ from 'lodash'
// create select function to pickup the piece of comments we want

const commentsSelector = comments =>  comments.byId
const orderBySelector = comments => comments.orderBy


const arrayFromObject = ( objectToConvert ) => {
  let result = []
  objectToConvert
  ? result = Object.keys(objectToConvert).map(itemID => objectToConvert[itemID])
  : result = []
  return result
}

export const commentsArrayFromObject = createSelector(
	commentsSelector,
	arrayFromObject
)

const orderedPostBy = ( comments=[], sortItemsBy) =>{

	return comments && comments.length > 0 && sortItemsBy === 'voteScore'
	? _.orderBy(comments, ['voteScore'], ['desc'])
	: _.orderBy(comments, ['timestamp'], ['desc'])
}


export const orderByComments = createSelector(
	commentsArrayFromObject,
	orderBySelector,
	orderedPostBy
)
