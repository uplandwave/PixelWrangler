import { writable } from 'svelte/store';

export const route = writable("#home");

// store for the logged-in user
export const user = writable(null);

export const showModal = writable(null)
export const modalMovieID = writable(null)
export const favorites = writable(null)
