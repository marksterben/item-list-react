import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './Items.module.css'

import plusIcon from '../../assets/plus-icon.svg'
import minusIcon from '../../assets/minus-icon.svg'

const Items = ({ items }) => {
  return (
    <div className={styles.items}>
      {items.map((item, index, arr) =>
        <div
          key={index}
          className={classnames(styles.item, {
            [styles.itemDivider]: !(arr.length === index + 1)
          })}
        >
          {item.name}

          <div className={styles.itemIconWrapper}>
            <div className={styles.itemCount}>{item.count}</div>

            <button className={styles.itemActionButton}>
              <img src={minusIcon} alt="minus icon" />
            </button>
            <button className={styles.itemActionButton}>
              <img src={plusIcon} alt="plus icon" />
            </button>

          </div>
        </div>
      )}
    </div>
  )
}

Items.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    count: PropTypes.number
  })),
}

export default Items