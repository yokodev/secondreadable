import moment from 'moment'


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
  objectToConvert ? (result = idsArray.map(itemID => objectToConvert[itemID])) : (result = [])
  return result
}


/**
 *
 * <Table sortable celled fixed selectable>
   <Table.Header>
     <Table.Row>
      //  {/* <Table.HeaderCell sorted={column === 'name' ? direction : null} onClick={this.handleSort('name')}> */
 //       <Table.HeaderCell>Post</Table.HeaderCell>
 //       <Table.HeaderCell>category</Table.HeaderCell>
 //       <Table.HeaderCell>Time</Table.HeaderCell>
 //       {/* <Table.HeaderCell sorted={column === 'votescore' ? direction : null} onClick={this.handleSort('votescore')}> */}
 //       <Table.HeaderCell >
 //         voteScore
 //       </Table.HeaderCell>
 //     </Table.Row>
 //   </Table.Header>
 //   <Table.Body>
 //     {posts.map(({ id, category, timestamp, title, voteScore }) => (
 //       <Table.Row key={id}>
 //         <Table.Cell>{title}</Table.Cell>
 //         <Table.Cell>{category}</Table.Cell>
 //         <Table.Cell>{Util.timeSince(timestamp)}</Table.Cell>
 //         <Table.Cell><Header as="h3" textAlign="center">{voteScore}</Header></Table.Cell>
 //       </Table.Row>
 //     ))}
 //   </Table.Body>
 //   <Table.Footer fullWidth>
 //     <Table.Row>
 //       <Table.HeaderCell colSpan="4">
 //         <Button floated="right" icon labelPosition="left" primary size="small">
 //           <Icon name="user" /> Add Post
 //         </Button>
 //       </Table.HeaderCell>
 //     </Table.Row>
 //   </Table.Footer>
 // </Table>
 // *
 // * */
