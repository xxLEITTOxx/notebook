import { getFromLS, saveInLS } from './local-storage-api';
import { refs } from './refs';
import { createMarkup } from './render-tasks';
export const tasks = getFromLS('tasks') || [];
export const addTask = task => {
  tasks.push(task);
  saveInLS('tasks', tasks);
  console.log(tasks);
  createMarkup(tasks);
};

// export const deleteTask = () => {};
