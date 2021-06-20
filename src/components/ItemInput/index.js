import PropTypes from 'prop-types'

import styles from './ItemInput.module.css'

const ItemInput = ({ onSubmit, onChange, value }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        onChange={onChange}
        value={value}
        type="text"
        placeholder="Type Your New Item" required />
      <button className={styles.addButton} type="submit">submit</button>
    </form>
  )
}

ItemInput.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  value: PropTypes.string
}

export default ItemInput