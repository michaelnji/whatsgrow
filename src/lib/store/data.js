import { writable } from 'svelte/store';
// data store for data coming from the getData() server action
const data = writable({});
export default data;
