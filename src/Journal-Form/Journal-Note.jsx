import { useNavigate } from "react-router-dom"
import { useState, useRef,useEffect } from "react"
import { create } from "../services/noteService"


const CreateNote = (props) => {
  const formElement = useRef()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    text: ''
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const handleSubmit = evt => {
    props.handleAddEntry(formData)
  }

  
  console.log(formData)
  return(
    <>
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          <h3>What's on your mind</h3>
          <input type="text" name="title" id="j-title"  onChange={handleChange} />
          <br />
          <textarea name="text" id="textbox" cols="60" rows="10"  onChange={handleChange} />
        </label>
        <button
        className="btn btn-sm"
        type="submit"
        >
          Save
        </button>
      </form>
    </div>

    </>
  )
}

export default CreateNote