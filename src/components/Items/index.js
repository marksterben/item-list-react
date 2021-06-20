import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './Items.module.css'

import plusIcon from '../../assets/plus-icon.svg'
import minusIcon from '../../assets/minus-icon.svg'
import deleteIcon from '../../assets/delete-icon.svg'

const Items = ({ items, addItemHandler, subtractItemHandler, deleteItemHandler }) => {
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

            {
              item.count > 0
                ? <button onClick={() => subtractItemHandler(index)} className={styles.itemActionButton}>
                  <img src={minusIcon} alt="minus icon" />
                </button>
                : <button onClick={() => deleteItemHandler(index)} className={styles.itemActionButton}>
                  <img src={deleteIcon} alt="delete icon" />
                </button>
            }



            <button onClick={() => addItemHandler(index)} className={styles.itemActionButton}>
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
  addItemHandler: PropTypes.func,
  subtractItemHandler: PropTypes.func,
  deleteItemHandler: PropTypes.func
}

export default Items