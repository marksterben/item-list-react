import { useMutation, useQueryClient } from "react-query";
import PropTypes from "prop-types";

import styles from "./Info.module.css";
import { deleteAllItem } from "../../rest";

const Info = ({ itemsLength, totalCounts }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(deleteAllItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("items");
    },
  });
  return (
    <div className={styles.info}>
      <div className={styles.infoTotal}>
        <p>{`Total List: ${itemsLength}`}</p>
      </div>

      <div className={styles.infoTotal}>
        <p>{`Total Counts: ${totalCounts}`}</p>
      </div>

      <button onClick={() => mutate()} className={styles.deleteAllButton}>
        Delete All List
      </button>
    </div>
  );
};

Info.propTypes = {
  itemsLength: PropTypes.number,
  totalCounts: PropTypes.number,
};

export default Info;
