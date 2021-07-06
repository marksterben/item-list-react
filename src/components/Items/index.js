import { useMutation, useQueryClient } from "react-query";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./Items.module.css";

import plusIcon from "../../assets/plus-icon.svg";
import minusIcon from "../../assets/minus-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";

import { deleteItem, updateItem } from "../../rest";

const Items = ({ items }) => {
  const queryClient = useQueryClient();

  const { mutate: updateItemHandler } = useMutation(updateItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("items");
    },
  });

  const { mutate: deleteItemHandler } = useMutation(deleteItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("items");
    },
  });

  return (
    <div className={styles.items}>
      {items.map((item, index, arr) => (
        <div
          key={item._id}
          className={classnames(styles.item, {
            [styles.itemDivider]: !(arr.length === index + 1),
          })}
        >
          {item.name}

          <div className={styles.itemIconWrapper}>
            <div className={styles.itemCount}>{item.count}</div>

            {item.count > 1 ? (
              <button
                onClick={() =>
                  updateItemHandler({
                    id: item._id,
                    name: item.name,
                    count: item.count - 1,
                  })
                }
                className={styles.itemActionButton}
              >
                <img src={minusIcon} alt="minus icon" />
              </button>
            ) : (
              <button
                onClick={() => deleteItemHandler(item._id)}
                className={styles.itemActionButton}
              >
                <img src={deleteIcon} alt="delete icon" />
              </button>
            )}

            <button
              onClick={() =>
                updateItemHandler({
                  id: item._id,
                  name: item.name,
                  count: item.count + 1,
                })
              }
              className={styles.itemActionButton}
            >
              <img src={plusIcon} alt="plus icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

Items.propTypes = {
  items: PropTypes.array,
};

export default Items;
