import { writable } from 'svelte/store';
import { fetchSessionUser } from './utils/supabaseFetchers.mjs';

export const route = writable("#home");

// store for the logged-in user
export const user = writable(await fetchSessionUser());

export const showModal = writable(null)
export const modalMovieID = writable(null)
export const favorites = writable([])
