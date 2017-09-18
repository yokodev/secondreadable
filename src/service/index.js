// import axios from 'axios'
const url = 'http://localhost:3001'
const headers = { headers: { 'Authorization': 'whatever-you-wan1' }}
// const headers = new Headers()
// headers.append("Authorization","micodigo123")
// headers.append("Content-Type", "application/json");

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

export const getPosts = () =>
  fetch(`${url}/posts`, headers)
    .then(status)
    .then(json)
    
export const getCategories = () =>
  fetch(`${url}/categories`, headers)
    .then(status)
    .then(json)
    
export const getComments = () =>
  fetch(`${url}/comments`, headers)
    .then(status)
    .then(json)
