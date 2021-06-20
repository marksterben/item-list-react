import PropTypes from 'prop-types'

import styles from './ItemInput.module.css'

const SearchInput = ({ onChange, value }) => {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        onChange={onChange}
        value={value}
        type="text"
        placeholder="Type Your New Item" />
      <button className={styles.addButton} type="submit">add</button>
    </form>
  )
}

SearchInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default SearchInput