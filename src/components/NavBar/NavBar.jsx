import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link className={styles.navitem} to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link className={styles.navitem} to="/changePassword">Change Password</Link></li>
            <li><Link className={styles.navitem} to="/journal-entry">New Post</Link></li>
            <li><Link className={styles.navitem} to="/journal">Journal</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
