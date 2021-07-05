import axios from "axios";

export const getItems = async () => {
  try {
    const res = await axios.get(
      "https://marksterben-item-list-api.herokuapp.com/api/items"
    );

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const addItem = async (data) => {
  try {
    await axios.post(
      "https://marksterben-item-list-api.herokuapp.com/api/item",
      data
    );
  } catch (error) {
    console.error(error);
  }
};

export const updateItem = async (id, data) => {
  try {
    await axios.put(
      `https://marksterben-item-list-api.herokuapp.com/api/item/${id}`,
      data
    );
  } catch (error) {
    console.error(error);
  }
};

export const deleteItem = async (id) => {
  try {
    await axios.delete(
      `https://marksterben-item-list-api.herokuapp.com/api/item/${id}`
    );
  } catch (error) {
    console.error(error);
  }
};
