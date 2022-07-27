
import { useState, useEffect } from "react"
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
        <div>
          {notes.map(note => <h3>{props.note.title}</h3>
          )}

        </div>
      </></>
      
  )
}

export default Journal