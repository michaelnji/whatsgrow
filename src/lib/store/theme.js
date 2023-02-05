import { writable } from 'svelte/store';
// theme store for dark mode
const theme = writable('light');
export default theme;
