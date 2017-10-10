// import axios from 'axios'
import * as Utils from 'utils'
const url = 'http://localhost:3001'
const headers = { headers: { 'Authorization': 'whatever-you-wan1'}
    }
const headerPost= {headers:{
  // 'Accept':'application/json',
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

export const getPosts = category => {
  let urlPosts = category ? `${url}/${category}/posts` : `${url}/posts`
  return fetch(urlPosts, headers)
    .then(status)
    .then(json)
}

export const getCategories = () =>
  fetch(`${url}/categories`, headers)
    .then(status)
    .then(json)

export const getCommentsById = (postId) =>
  fetch(`${url}/comments`, headers)
    .then(status)
    .then(json)

export const getPostsByCategory = category =>
  fetch(`${url}/${category}/posts`, headers)
    .then(status)
    .then(json)

export const getPostDetail = postId =>
  fetch(`${url}/posts/${postId}`, headers)
    .then(status)
    .then(json)

export const allCommentsByPost = postId =>
  fetch(`${url}/posts/${postId}/comments`, headers)
    .then(status)
    .then(json)

export const getCommentDetail = commentId =>
  fetch(`${url}/comments/${commentId}`, headers)
    .then(status)
    .then(json)

export const createNewPost = formValues =>{
  let newPost= Utils.prepareNewPost(formValues)
  let {headers} =headerPost
  // console.log(newPost)
  // console.log(JSON.stringify(newPost))
  // debugger
  fetch(`${url}/posts`,
    {
      method: "post",
      headers,
      body:JSON.stringify(newPost)})
  // fetch(`${url}/posts/`, {method: "POST",headers, body:newPost})
  .then(json)
  .then(data=> new Promise(data))
  .catch(error=>{
    console.log('Request Failed',error);
  })
  // .then(json)

}
