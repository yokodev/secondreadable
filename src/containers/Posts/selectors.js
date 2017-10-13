import { createSelector } from 'reselect'
import sortBy from 'sort-by'

// create select function to pickup the piece of state we want

const postsSelector = state => state.posts.byId
const postsIdsSelector = state =>state.posts.allIds
const orderBySelector = state =>{
	console.log(state.posts.orderBy)
	return state.posts.orderBy
}

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

const willSortBy = ( posts=[], sortItemsBy) =>{
  let postToShow = []
  sortItemsBy && posts.length>0 ? postToShow = posts.sort(sortBy(`-${sortItemsBy}`)) : postToShow = posts
  // sortItemsBy && posts.length>0 ? postToShow = posts.sort(sortBy(-"voteScore")) : postToShow = posts
  // sortItemsBy && posts.length>0 ? postToShow = posts.sort(sortBy("voteScore")) : postToShow = posts
  // sortItemsBy && posts.length>0 ? postToShow = posts.sort(sortBy("-timestamp")) : postToShow = posts
  // sortItemsBy && posts.length>0 ? postToShow = posts.sort(sortBy("timestamp")) : postToShow = posts
  return postToShow;
}

// const itemsSortedBy = (objectToConvert, idsArray,sortItemsBy) =>{
//   return willSortBy(arrayFromObject(objectToConvert,idsArray),sortItemsBy)
// }

export default createSelector(
	postsArrayFromObject,
	orderBySelector,
	willSortBy
)
