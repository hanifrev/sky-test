import axios from "axios";

const BASE_URL = "https://todo.api.devcode.gethired.id";
const email = "hanifrev@gmail.com";

const getAllActivity = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/activity-groups?email=${email}`);
    const data = await res.data.data;
    return data;
  } catch (error) {
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

const updateActivity = async (title, id) => {
  try {
    const res = await axios.patch(`${BASE_URL}/activity-groups/${id}`, {
      title,
    });
    const data = await res.data.data;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getOneActivity = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/activity-groups/${id}`);
    const data = await res.data;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getTodoList = async (id) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/todo-items/?activity_group_id=${id}`
    );
    const data = await res.data.data;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const addTodo = async (activity_group_id, title, priority) => {
  try {
    const res = await axios.post(`${BASE_URL}/todo-items`, {
      activity_group_id,
      title,
      priority,
    });
    const data = await res.data.data;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteTodo = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/todo-items/${id}`);
    const data = await res.data.data;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateTodoTitlePriority = async (id, title, priority) => {
  try {
    const res = await axios.patch(`${BASE_URL}/todo-items/${id}`, {
      title,
      priority,
    });
    const data = await res.data.data;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateTodoChecked = async (id, is_active) => {
  try {
    const res = await axios.patch(`${BASE_URL}/todo-items/${id}`, {
      is_active,
    });
    const data = await res.data.data;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export {
  getAllActivity,
  createActivity,
  removeActivity,
  updateActivity,
  getOneActivity,
  getTodoList,
  addTodo,
  deleteTodo,
  updateTodoTitlePriority,
  updateTodoChecked,
};
