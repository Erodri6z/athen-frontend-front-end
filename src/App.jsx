import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import Journal from './components/Journal/Journal'
import EditNote from './components/Edit-Note/Edit-Note'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import JournalNote from './Journal-Form/Journal-Note'
import * as noteService from './services/noteService'



const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [notes, setNotes] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }
  useEffect(() => {
    const fetchAllNotes = async () => {
      const notesData = await noteService.getAll()
      setNotes(notesData)
    }
    fetchAllNotes()
  }, [])

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleDeleteNote = async noteId => {
    const deletedNote = await noteService.deleteNote(noteId)
    const newNoteArray = notes.filter(note => note._id !== deletedNote._id)
    setNotes(newNoteArray)
    navigate('/journal')
  }

  const handleAddNote =  async (newNoteData) => {
    const newNote = await noteService.create(newNoteData)
    setNotes([...notes, newNote])
    navigate('/journal')
  }

  const handleUpdateNote = async (noteData) => {
    const updatedNote = await noteService.update(noteData)
    const newNoteArray = notes.map(note => note._id === updatedNote._id ?
      updatedNote : note)
    setNotes(newNoteArray)
    navigate('/journal')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/journal"
          element={ <Journal 
            user={user} 
            notes={notes}
            handleDeleteNote={handleDeleteNote}
          />}
        />
        <Route
          path="/journal-entry"
          element={ <JournalNote 
          handleAddNote={handleAddNote}
          />}
        />
        <Route
          path="/edit"
          element={ <EditNote 
          handleUpdateNote={handleUpdateNote}
          />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  )
}

export default App
