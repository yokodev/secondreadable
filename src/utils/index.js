import moment from 'moment';
import capitalize from 'lodash.capitalize';
import { v4 } from 'node-uuid';
var faker = require('faker');

export const timeSince = unixTimeStamp => {
  let iniTime = moment(unixTimeStamp);
  return iniTime.fromNow();
};

export const tFromUTS = unixTimeStamp => {
  let dt = new Date(unixTimeStamp);
  let ds = dt.toDateString();
  let lts = dt.toLocaleTimeString();
  return `${ds}:${lts}`;
};

export function separateLocation(location) {
  let tokens = location.split('/');
  tokens.shift();

  return tokens;
}

//generate a capitalize letter from the given string
export function makeCapital(string) {
  return capitalize(string);
}

export function generateUid() {
  return v4();
}

export function prepareNewPost(formValues) {
  // we have in the form: title,body,category,author
  // we need
  // id, timestamp: Date.now(), voteScore:Integer defaul 1, deleted: Boolean default false
  formValues['id'] = generateUid();
  formValues['timestamp'] = Date.now();
  formValues['voteScore'] = 1;
  formValues['author'] = faker.name.findName();
  // formValues['deleted']= false;
  return formValues;
}

// PARAMS:
//   id: Any unique ID. As with posts, UUID is probably the best here.
//   timestamp: timestamp. Get this however you want.
//   body: String
//   author: String
//   parentId: Should match a post id in the database

export function prepareNewComment(postId, body) {
  let newComment = {};
  newComment['id'] = generateUid();
  newComment['timestamp'] = Date.now();
  newComment['author'] = faker.name.findName();
  newComment['voteScore'] = 1;
  newComment['parentId'] = postId;
  newComment['body'] = body;
  return newComment;
}
