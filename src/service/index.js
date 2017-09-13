export const url = 'http://localhost:3001'
export const headers = { headers: { Authorization: 'micodigo123' } }



export const getPosts = () => {
  fetch(`${url}/posts`, headers)
}

