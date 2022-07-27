import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/notes`

async function create(note) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(note)
  })
  return await res.json()
}


async function getAll() {
  const res = await fetch(BASE_URL)
  return await res.json()
}

async function deleteNote(noteId) {
  const res = await fetch(`${BASE_URL}/${noteId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    },
  })
  return await res.json()
}


export {
  create,
  getAll,
  deleteNote
}