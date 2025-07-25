import { getFromLS, saveInLS } from './local-storage-api';
import { refs } from './refs';
import { createMarkup } from './render-tasks';

export let tasks = getFromLS('tasks') || [];
export const addTask = task => {
  tasks.push(task);
  saveInLS('tasks', tasks);

  createMarkup(tasks);
};

export const deleteTask = taskId => {
  console.log('bFil', tasks);
  tasks = tasks.filter(task => task.id !== taskId);
  saveInLS('tasks', tasks);
  createMarkup(tasks);

  console.log('afterFil', tasks);
};
