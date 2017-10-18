// import axios from 'axios'
import * as Utils from 'utils'
const url = 'http://localhost:3001'
const headers = { headers: { 'Authorization': 'whatever-you-wan1'}
    }
const headerPost= {headers:{
  'Accept':'application/json',
  'Content-Type':'application/json',
  'Authorization': 'whatever-you-wan1',
}}

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}

/*********POSTS****************/
export const getPosts = category => {
  let urlPosts = category ? `${url}/${category}/posts` : `${url}/posts`
  return fetch(urlPosts, headers)
    .then(status)
    .then(json)
}
/*********POSTS****************/

/*********CATEGORIES****************/
export const getCategories = () =>
  fetch(`${url}/categories`, headers)
    .then(status)
    .then(json)
/*********CATEGORIES****************/

/*********POSTbyCATEGORIES****************/
export const getPostsByCategory = category =>
  fetch(`${url}/${category}/posts`, headers)
    .then(status)
    .then(json)
/*********POSTbyCATEGORIES****************/

/********** CRUD POST*****************/
export const createNewPost = formValues =>{
  let newPost= Utils.prepareNewPost(formValues)
  let {headers} =headerPost
  return fetch(`${url}/posts`,{
    method: "post",
    headers,
    body:JSON.stringify(newPost)}
    )
    .then(response=>response.json())
    .then(data=> data)
    .catch(error=>{ console.log('Request Failed',error) })
}
//**EDITPOST**/
export const editPost = ({id,title,body}) =>{
  let {headers} =headerPost
  return fetch(`${url}/posts/${id}`,{
    method: "put",
    headers,
    body:JSON.stringify({title, body})
  })
  .then(response=>response.json())
  .then(data=> data)
  .catch(error=>{ console.log('Request Failed',error) })
}
//**EDITPOST**/
/*********--DELETE-POST--**************/
export const deletePost = postId =>{
  let {headers} =headerPost
  return fetch(`${url}/posts/${postId}`,
    { method: "delete", headers })
  .then(response=>response.json())
  .then(data=> data)
  .catch(error=>{ console.log('Request Failed',error) })
}
/*********--DELETE-POST--**************/

 /*********LIST POST BY ID**********/
export const getPostDetail = postId =>
fetch(`${url}/posts/${postId}`, headers)
.then(status)
.then(json)
/*********LIST POST BY ID**********/
/********** CRUD POST*****************/

///full detail

export const getPostDetailByPostId = postId =>
  fetch(`${url}/posts/${postId}`, headers)
  .then(status)
  .then(json)//TODO Im not sure if I'm using it...

///full detail

/*********-- CRUD-COMMENTS--**************/

export const allCommentsByPostId = postId =>
fetch(`${url}/posts/${postId}/comments`, headers)
.then(status)
.then(json)

/*********COMMENTDETAIL****************/
export const getCommentDetail = commentId =>
fetch(`${url}/comments/${commentId}`, headers)
.then(status)
.then(json)
/*********COMMENTDETAIL****************/

/*********ADD-COMMENT****************/
export const addNewComment = (postId, formValues) =>{
  let newComment= Utils.prepareNewComment(postId,formValues)
  let {headers} =headerPost
  return fetch(`${url}/comments`,{
    method: "post",
    headers,
    body:JSON.stringify(newComment)}
    )
    .then(response=>response.json())
    .then(data=> data)
    .catch(error=>{ console.log('Request Failed',error) })
}
/*********ADD-COMMENT****************/

/*********--DELETE-COMMENT--**************/
export const deleteComment = commentId =>{
  let {headers} =headerPost
  return fetch(`${url}/comments/${commentId}`,
    { method: "delete", headers })
  .then(response=>response.json())
  .then(data=> data)
  .catch(error=>{ console.log('Request Failed',error) })
}
/*********--DELETE-COMMENT--**************/

//**EDIT-COMMENT**/
export const editComment = (id,body) =>{
  let {headers} =headerPost
  return fetch(`${url}/comments/${id}`,{
    method: "put",
    headers,
    body:JSON.stringify({timestamp:Date.now(),body})
  })
  .then(response=>response.json())
  .then(data=> data)
  .catch(error=>{ console.log('Request Failed',error) })
}
//**EDIT-COMMENT**/


/*********-- CRUD-COMMENTS--**************/

/*********--RATER--**************/
export const voteOnPost = (postId,upOrDownVote) =>{
  let {headers} =headerPost
  return fetch(`${url}/posts/${postId}`,{
    method: "post",
    headers,
    body:JSON.stringify({"option":upOrDownVote})
  })
  .then(response=>response.json())
  .then(data=> data)
  .catch(error=>{ console.log('Request Failed',error) })
}
export const voteOnComment = (commentId,upOrDownVote) =>{
  let {headers} = headerPost
  return fetch(`${url}/comments/${commentId}`,{
    method: "post",
    headers,
    body:JSON.stringify({"option":upOrDownVote})
  })
  .then(response=>response.json())
  .then(data=> data)
  .catch(error=>{ console.log('Request Failed',error) })
}
/*********--RATER--**************/
