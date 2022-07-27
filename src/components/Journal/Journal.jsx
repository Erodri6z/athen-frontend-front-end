
import { useState, useEffect, useReducer } from "react"
import { Link } from "react-router-dom"
import { getAll } from "../../services/noteService"



const Journal = (props) => {
  const [notes, setJournalNotes] = useState({})

  useEffect(() => {
    const fetchNotes = async () => {
      const notesData = await getAll()
      setJournalNotes(notesData.results)
    }
    fetchNotes()
  }, [])


  return(
    <><>
      <Link to="/journal-entry">
        <button>New Log?</button>
      </Link>
    </><>
          {props.notes.map(note =>
          <div>
            <h2>{note.author?.name}</h2>
            <h3>{note.title}</h3>
            <p>{note.text}</p>
            {props.user?.profile === note.author._id &&
            <><button onClick={() => props.handleDeleteNote(note._id)}>Delete</button>
            <button>Edit</button></>
            }

          </div>
          )}

      </></>
      
  )
}

export default Journal