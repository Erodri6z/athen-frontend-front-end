
import { useState, useEffect, useReducer } from "react"
import { Link } from "react-router-dom"
import { getAll } from "../../services/noteService"



const Journal = (props) => {

  return(
    <><>
      <Link to="/journal-entry">
        <button>New Log?</button>
      </Link>
    </><>
          {props.notes.map(note =>
          <div key={note._id}>
            <h2>{note.author.name}</h2>
            <h3>{note.title}</h3>
            <p>{note.text}</p>
            {props.user.profile === note.author._id  &&
            <><button onClick={() => props.handleDeleteNote(note._id)}>Delete</button>
            <Link to="/edit" state={{note}}>
              <button>Edit</button>
            </Link>
            </>
            }

          </div>
          )}

      </></>
      
  )
}

export default Journal