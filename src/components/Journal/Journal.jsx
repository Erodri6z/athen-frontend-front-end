import { Link } from "react-router-dom"

const Journal = () => {
  return(
    <>
    <Link to="/journal-entry">
      <button>New Log?</button>
    </Link>
    <h2>hello this is a certified</h2>
    <div>
      <h2>title</h2>
      <div>
        <p>this is a placeholder for the people will say once this thing is up and running</p>
      </div>
    </div>
    </>
  )
}

export default Journal