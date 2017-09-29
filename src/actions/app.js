export const SET_ORDER_BY = 'SET_ORDER_BY'

export const sortBy = {
  timestamp: 'TIMESTAMP',
  votescore: 'VOTESCORE',
}

export function setOrderBy(sortBy){
  return{
    type:SET_ORDER_BY,
    sortBy
  }
}
