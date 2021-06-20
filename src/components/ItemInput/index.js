import PropTypes from 'prop-types'

import styles from './ItemInput.module.css'

const ItemInput = ({ onChange, value }) => {
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

ItemInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default ItemInput