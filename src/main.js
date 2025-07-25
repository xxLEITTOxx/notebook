import { getFromLS, saveInLS } from './js/local-storage-api';
import { refs } from './js/refs';
import { createMarkup } from './js/render-tasks';
import { addTask, tasks, deleteTask } from './js/tasks';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { changeTheme, localTheme } from './js/theme-switcher';

localTheme();

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const myTaskName = refs.taskName.value.trim();
  const myTaskDescription = refs.taskDescription.value.trim();

  if (myTaskName === '' || myTaskDescription === '') {
    iziToast.error({
      title: 'ALARM!',
      message: 'Please fill in both fields',
      position: 'topRight',
    });
    refs.form.reset();
  } else {
    addTask({
      title: myTaskName,
      description: myTaskDescription,
      id: Date.now(),
    });
    refs.form.reset();
  }
});

createMarkup(tasks);

refs.list.addEventListener('click', onDeleteCLick);

function onDeleteCLick(event) {
  event.preventDefault();
  if (event.target.classList.contains('task-list-item-btn')) {
    const taskId = Number(event.target.dataset.id);
    deleteTask(taskId);
  }
}

refs.themeButton.addEventListener('click', changeTheme);
