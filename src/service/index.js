// import axios from 'axios'
const url = 'http://localhost:3001'
const headers = { headers: { 'Authorization': 'whatever-you-wan1' }}

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

export const getPosts = categories => {
  let urlPosts = categories ? `${url}/${categories}/posts` : `${url}/posts`
  return fetch(urlPosts, headers)
    .then(status)
    .then(json)
}


export const getCategories = () =>
  fetch(`${url}/categories`, headers)
    .then(status)
    .then(json)

export const getCommentsById = (postID) =>
  fetch(`${url}/comments`, headers)
    .then(status)
    .then(json)

export const getPostsByCategory = category =>
  fetch(`${url}/${category}/posts`, headers)
    .then(status)
    .then(json)
