<script>
  import { onMount } from "svelte";
  import { supabase } from "../supabaseClient";
  import { user, route } from "../stores.js"; // user store for tracking login state
  import { fetchFavoritesData } from "../utils/supabaseFetchers.mjs";
  import MovieCard2 from "../lib/MovieCard2.svelte";
  import MovieSummaryCard from "./MovieSummaryCard.svelte";

  let favorites = [];
  let message = "";

  // fetch Favorites from Supabase table
  async function fetchFavorites() {
    if (!$user) {
      message = "You must be logged in to see your favorites.";
      return;
    }

    try {
      favorites = await fetchFavoritesData($user.id);

      if (favorites.length === 0) {
        message = "Start adding favorites!";
        return;
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      message = "Failed to load favorites.";
    }
  }

  // navigate to Login Page
  function navigateToLogin() {
    route.set("#login");
  }

  
  // fetch data on component mount
  onMount(fetchFavorites);

</script>
<!-- <MovieSummaryCard movieId={1307738}/> -->

<div id="favorites-container">
<!-- Display Content Based on State -->
{#if !$user}
  <div class="login-message">
    <p>You must be logged in to see your favorites.</p>
    <button class="login-button" on:click={navigateToLogin}
      >Log In / Sign Up</button
    >
  </div>
{:else if message}
  <p class="favorites-message">{message}</p>
{:else}
  <ul class="movie-list">
    {#each favorites as movie}
      <li class="movie-item">
        <MovieCard2 {movie}/>
      </li>
    {/each}
  </ul>
{/if}
</div>

<style>
    #favorites-container {
        margin-top: 150px;
    }
  .favorites-message,
  .login-message {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 200px;
    color: var(--text-color);
  }

  .login-button {
    padding: 0.7rem 1.5rem;
    background-color: var(--Accent_2);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }

  .login-button:hover {
    background-color: var(--Accent_1);
  }

  .movie-list {
    display: flex;
    flex-wrap: wrap;
    gap: .1rem;
    list-style: none;
    padding: 0;
  }

  .movie-item {
    flex: 1 1 calc(25% - 1rem); /* 4 movies per row */
    box-sizing: border-box;
  }
</style>
