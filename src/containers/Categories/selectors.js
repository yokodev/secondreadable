import { createSelector } from 'reselect'

// create select function to pickup the piece of state we want

const catsSelector = state => state.categories.byId
const catsIdsSelector = state =>state.categories.allIds


const arrayFromObject = (objectToConvert, idsArray) => {
  let result = []
  objectToConvert ? result = idsArray.map(itemID => objectToConvert[itemID]) : result = []
  return result
}

export default createSelector(
	catsSelector,
	catsIdsSelector,
	arrayFromObject
)
