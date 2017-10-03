import moment from 'moment'
import sortBy from 'sort-by'
/*
************************************
Unix Timestamp (milliseconds) 1.0.0+

edit
moment(Number);
Similar to new Date(Number), you can create a moment by passing an integer value representing the number of milliseconds since the Unix Epoch (Jan 1 1970 12AM UTC).

var day = moment(1318781876406);
*******************************
Unix Timestamp (seconds) 1.6.0+

edit
moment.unix(Number)
To create a moment from a Unix timestamp (seconds since the Unix Epoch), use moment.unix(Number).

var day = moment.unix(1318781876);
This is implemented as moment(timestamp * 1000), so partial seconds in the input timestamp are included.

var day = moment.unix(1318781876.721);
*/

export const timeSince = unixTimeStamp =>{
  let iniTime = moment(unixTimeStamp)
  return iniTime.fromNow()
}
export const tFromUTS = unixTimeStamp => {
  let dt = new Date(unixTimeStamp )
  let ds = dt.toDateString()
  let lts = dt.toLocaleTimeString()
  return `${ds}:${lts}`

}

export const arrayFromObject = (objectToConvert, idsArray) => {
  let result = []
  objectToConvert ? result = idsArray.map(itemID => objectToConvert[itemID]) : result = []
  return result
}

export const sortedBy = ( posts=[], sortItemsBy) =>{
  let postToShow = []
  sortItemsBy && posts.length>0 ? postToShow = posts.sort(sortBy(sortItemsBy)) : postToShow = posts
  return postToShow;
}

export const itemsSortedBy = (objectToConvert, idsArray,sortItemsBy) =>{
  return sortedBy(arrayFromObject(objectToConvert,idsArray),sortItemsBy)
}
// export function itemsSortedBy(objectToConvert, idsArray){

export function separateLocation(location){
  let tokens = location.split('/')
  tokens.shift();

  return tokens
}
