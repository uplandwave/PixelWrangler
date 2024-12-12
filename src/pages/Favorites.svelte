<script>
  import { onMount } from "svelte";
  import { user, route, favorites } from "../stores.js";
  import { updateFavoritesStore } from "../utils/supabaseFetchers.mjs";
  import MovieCard from "../lib/MovieCard.svelte";
  import LoadingIndicator from "../lib/LoadingIndicator.svelte";

  let message = "";
  let favoritesPromise;

  // fetch Favorites from Supabase table
  async function fetchFavorites() {
    if (!$user) {
      message = "You must be logged in to see your favorites.";
      return;
    }

    try {
      favoritesPromise = updateFavoritesStore($user.id);
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

<div id="favorites-container">
  <!-- Display Content Based on State -->
  {#if !$user}
    <div class="login-message">
      <p>You must be logged in to see your favorites.</p>
      <button class="login-button" on:click={navigateToLogin}
        >Log In / Sign Up</button
      >
    </div>
  {:else}
    {#await favoritesPromise}
      <div class="favorites-message">
        <LoadingIndicator />
      </div>
    {:then confirmation}
      {#if $favorites.length === 0}
        <p class="favorites-message">Start adding favorites!</p>
      {:else}
        <h2>Favorites</h2>
        <ul class="movie-list">
          {#each $favorites as movie}
            <li class="movie-item">
              <MovieCard {movie} />
            </li>
          {/each}
        </ul>
      {/if}
    {/await}
  {/if}
</div>

<style>
  #favorites-container {
    margin-top: 60px;
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
    gap: 10px;
    list-style: none;
    padding: 0;
    padding-left: 20px;
  }
  /* .movie-item {
    flex: 1 1 calc(15% - 2rem); 
    box-sizing: border-box;
  } */
  h2 {
    text-align: left;
    padding-left: 20px;
    font-size: 30px;
  }
</style>
