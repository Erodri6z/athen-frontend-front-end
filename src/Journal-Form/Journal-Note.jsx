import { useNavigate } from "react-router-dom"
import { useState, useRef,useEffect } from "react"
import { create } from "../services/noteService"
import { Link } from "react-router-dom"


const CreateNote = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    text: ''
  })

  const handleChange = (e) => {
    setFormData({...formData,
      [e.target.name] : e.target.value})
  }


  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleAddNote(formData)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  
  
  console.log(formData)
  return(
    <>
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          <h3>What's on your mind</h3>
          <input type="text" name="title" id="j-title" onChange={handleChange} />
          <br />
          <textarea name="text" id="textbox" cols="60" rows="10"  onChange={handleChange} />
        </label>
        <button type="submit">
          Save
        </button>
        {/* <Link to="/">
          <button>Cancel</button>
        </Link> */}
      </form>
    </div>

    </>
  )
}

export default CreateNote