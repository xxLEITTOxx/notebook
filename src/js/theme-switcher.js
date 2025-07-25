import { getFromLS, saveInLS } from './local-storage-api';
import { refs } from './refs';

export function changeTheme() {
  if (refs.body.classList.contains('theme-dark')) {
    refs.body.classList.remove('theme-dark');
    refs.body.classList.add('theme-light');
    saveInLS('theme', 'theme-light');
  } else {
    refs.body.classList.remove('theme-light');
    refs.body.classList.add('theme-dark');
    saveInLS('theme', 'theme-dark');
  }
}

export function localTheme() {
  refs.body.classList.value = '';
  refs.body.classList.add(getFromLS('theme'));
}
