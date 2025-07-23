import { refs } from './js/refs';
import { addTask } from './js/tasks';
import { createMarkup } from './js/render-tasks';
import { tasks } from './js/tasks';
refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const myTaskName = refs.taskName.value.trim();
  const myTaskDescription = refs.taskDescription.value.trim();

  if (myTaskName === '' || myTaskDescription === '') {
    alert('please fill inputs');
  } else {
    addTask({ title: myTaskName, description: myTaskDescription });
    refs.form.reset();
  }
});
// refs.form.elements.taskDescription.value.trim();
createMarkup(tasks);

// const exactButton = document.querySelector(h3.textContext === );
