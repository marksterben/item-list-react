import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

import styles from "./ItemInput.module.css";

import { addItem } from "../../rest";

const ItemInput = () => {
  const [value, setValue] = useState("");
  const queryClient = useQueryClient();

  const { mutate } = useMutation(addItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("items");
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    mutate({
      name: value,
      count: 1,
    });

    setValue("");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        placeholder="Type Your New Item"
        required
      />
      <button className={styles.addButton} type="submit">
        submit
      </button>
    </form>
  );
};

export default ItemInput;
