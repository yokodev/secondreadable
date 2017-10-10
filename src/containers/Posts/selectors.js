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

const sortedBy = ( posts=[], sortItemsBy) =>{
  let postToShow = []
  sortItemsBy && posts.length>0 ? postToShow = posts.sort(sortBy(-sortItemsBy)) : postToShow = posts
  return postToShow;
}

const itemsSortedBy = (objectToConvert, idsArray,sortItemsBy) =>{
  return sortedBy(arrayFromObject(objectToConvert,idsArray),sortItemsBy)
}

export default createSelector(
	postsSelector,
	postsIdsSelector,
	orderBySelector,
	itemsSortedBy
)
