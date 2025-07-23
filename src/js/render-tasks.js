import { getFromLS } from './local-storage-api';
import { refs } from './refs';
// const infoLS = getFromLS('tasks') || [];
export function createMarkup(infoLS) {
  const myMarkup = infoLS
    .map(key => {
      return `
<li class="task-list-item">
  <button class="task-list-item-btn">Delete</button>
  <h3>${key.title}</h3>
  <p>${key.description}</p>
</li>
`;
    })
    .join('');

  refs.markupInsert.innerHTML = myMarkup;
}
