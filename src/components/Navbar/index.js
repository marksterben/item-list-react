import styles from './Navbar.module.css'

import listIcon from '../../assets/list-icon.svg'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img className={styles.navIcon} src={listIcon} alt="shopping icon" />
      <h1 className={styles.navTitle}>Item List</h1>
    </nav>
  )
}

export default Navbar