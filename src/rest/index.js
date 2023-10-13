import axios from "axios";

const baseUrl = "https://item-list-api.onrender.com";

export const getItems = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/items`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const addItem = async (data) => {
  try {
    await axios.post(`${baseUrl}/api/item`, data);
  } catch (error) {
    console.error(error);
  }
};

export const updateItem = async ({ id, name, count }) => {
  try {
    await axios.put(`${baseUrl}/api/item/${id}`, {
      name: name,
      count: count,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteItem = async (id) => {
  try {
    await axios.delete(`${baseUrl}/api/item/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const deleteAllItem = async () => {
  try {
    await axios.delete(`${baseUrl}/api/items`);
  } catch (error) {
    console.error(error);
  }
};
