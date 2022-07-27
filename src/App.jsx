import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import Journal from './components/Journal/Journal'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import JournalNote from './Journal-Form/Journal-Note'
import * as noteService from './services/noteService'



const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [note, setJournalNote] = useState({})
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddNote =  async (newNoteData) => {
    const newNote= await noteService.create(newNoteData)
    setJournalNote([...note, newNote])
    navigate('/')
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
          element={ <Journal />}
        />
        <Route
          path="/journal-entry"
          element={ <JournalNote 
          handleAddEntry={handleAddNote}
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
