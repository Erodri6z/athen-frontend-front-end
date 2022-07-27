import { useLocation, useNavigate } from "react-router-dom"
import { useState, useRef,useEffect } from "react"
import { Link } from "react-router-dom"


const EditNote = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.note)

  const handleChange = (e) => {
    setFormData({...formData,
      [e.target.name] : e.target.value})
  }


  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleUpdateNote(formData)
      navigate('/journal')
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
          <h3>Edit</h3>
          <input type="text" name="title" id="j-title" onChange={handleChange} />
          <br />
          <textarea name="text" id="textbox" cols="60" rows="10"  onChange={handleChange} />
          <br />
        </label>
        <button type="submit">
          Save Change
        </button>
        <Link to="/journal">
          <button>Cancel</button>
        </Link>
      </form>
    </div>

    </>
  )
}

export default EditNote