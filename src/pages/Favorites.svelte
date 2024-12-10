 <script>
    import { onMount } from "svelte";
    import { supabase } from "../supabaseClient"; // Supabase client
    import { user, route } from "../stores.js"; // User store for tracking login state
  
    let favorites = [];
    let message = "";
  
    // fetch Favorites from Supabase table
    async function fetchFavorites() {
      if (!$user) {
        message = "You must be logged in to see your favorites.";
        return;
      }
  
      try {
        const { data, error } = await supabase
          .from("favorites")
          .select("poster_large_url")
          .eq("uid", $user.id);
  
        if (error) {
          console.error("Error fetching favorites:", error);
          message = "Failed to load favorites.";
          return;
        }
  
        if (data.length === 0) {
          message = "Start adding favorites!";
        } else {
          favorites = data.map((movie) => movie.poster_large_url); // Extract only URLs
        }
      } catch (error) {
        console.error("Unexpected error:", error);
        message = "An unexpected error occurred.";
      }
    }
  
    // fetch data on component mount
    onMount(fetchFavorites);
  
    // navigate to Login Page
    function navigateToLogin() {
      route.set("#login");
    }
  </script>
  
  <!-- Display Content Based on State -->
  {#if !$user}
    <div class="login-message">
      <p>You must be logged in to see your favorites.</p>
      <button class="login-button" on:click={navigateToLogin}>Log In / Sign Up</button>
    </div>
  {:else if message}
    <p class="favorites-message">{message}</p>
  {:else}
    <ul class="movie-list">
      {#each favorites as poster_large_url}
        <li class="movie-item">
          <img src={poster_large_url} alt="Movie Poster" class="movie-poster" />
        </li>
      {/each}
    </ul>
  {/if}
  
  <style>
    .favorites-message,
    .login-message {
      text-align: center;
      font-size: 1.5rem;
      margin-top: 2rem;
      color: var(--text-color);
    }
  
    .login-button {
      padding: 0.7rem 1.5rem;
      background-color: var(--Accent_1);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
    }
  
    .login-button:hover {
      background-color: var(--Accent_2);
    }
  
    .movie-list {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      list-style: none;
      padding: 0;
      margin-top: 2rem;
    }
  
    .movie-item {
      flex: 1 1 calc(25% - 1rem); /* 4 movies per row */
      box-sizing: border-box;
    }
  
    .movie-poster {
      width: 100%;
      border-radius: 8px;
    }
  </style>
  