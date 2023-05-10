import axios from "axios";

const BASE_URL = "https://todo.api.devcode.gethired.id";
const email = "hanifrev@gmail.com";

const getAllActivity = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/activity-groups?email=${email}`);
    const data = await res.data.data;
    return data;
  } catch (error) {
    // throw new Error(error.message);
    console.error(error);
    return null;
  }
};

const createActivity = async (title, email) => {
  try {
    const res = await axios.post(`${BASE_URL}/activity-groups`, {
      title,
      email,
    });
    const data = await res.data.data;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const removeActivity = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/activity-groups/${id}`);
    const data = await res.data.data;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getAllActivity, createActivity, removeActivity };
