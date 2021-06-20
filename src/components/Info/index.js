import PropTypes from 'prop-types'

import styles from './Info.module.css'

const Info = ({ itemsLength, totalCounts, deleteAllHandler }) => {
  return (
    <div className={styles.info}>
      <div className={styles.infoTotal}>
        <p>{`Total List: ${itemsLength}`}</p>
      </div>

      <div className={styles.infoTotal}>
        <p>{`Total Counts: ${totalCounts}`}</p>
      </div>

      <button onClick={deleteAllHandler} className={styles.deleteAllButton}>
        Delete All List
      </button>
    </div>
  )
}

Info.propTypes = {
  itemsLength: PropTypes.number,
  totalCounts: PropTypes.number,
  deleteAllHandler: PropTypes.func
}

export default Info