import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <div>
        <p>this will be where the daily list will be</p>
      </div>
      <div>
        <p>reminder to take breaks</p>
      </div>
      <div>
        <p>stuck timer will be here</p>
      </div>
      <div>
        <p>daily checklist for mental health</p>
      </div>
    </main>
  )
}

export default Landing
