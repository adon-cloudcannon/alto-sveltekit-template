import { browser } from '$app/environment';
import { writable } from 'svelte/store';
 
const defaultValue = 'light';
const initialValue = browser ? window.localStorage.getItem('mode') ?? defaultValue : defaultValue;
 
const theme = writable(initialValue);
 
theme.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('mode', value);
  }
});
 
export default theme;