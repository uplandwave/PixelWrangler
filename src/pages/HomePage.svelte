<script>
  import MovieCarousel from "../lib/MovieCarousel.svelte";
  import HeroCarousel from "../lib/HeroCarousel.svelte";
  import LoadingIndicator from "../lib/LoadingIndicator.svelte";
  import movieData from "../movieData.json";
  import { updateFavoritesStore } from "../utils/supabaseFetchers.mjs";
  import { getNewReleases } from "../utils/external-services.mjs";
  import { user, route, favorites } from "../stores.js";

  const recommendedMovies = movieData.recommendedMovies;

  async function loadNewMovies() {
    if (import.meta.env.VITE_MODE === "production") {
      return getNewReleases();
    } else {
      // in development mode
      return movieData.newMovies;
    }
  }

  // Navigate to the login page
  function navigateToLogin() {
    route.set("#login");
  }

  // Fetch data when the page loads
  let favoritesPromise = $user ? updateFavoritesStore($user.id) : null;
  let newMoviesPromise = loadNewMovies();
</script>

<HeroCarousel />
<h2>New or Coming Soon</h2>
{#await newMoviesPromise}
  <LoadingIndicator />
{:then newMovies}
  <MovieCarousel movies={newMovies} />
{/await}

<h2>Recommended</h2>
<MovieCarousel movies={recommendedMovies} />

<h2>Favorites</h2>
{#if !$user}
  <!-- User not logged in -->
  <div id="login-message">
    <div id="home-page-log-in-message">Log in or Sign up to add favorites!</div>
    <button id="home-page-favorites-login-button" on:click={navigateToLogin}
      >Log In / Sign Up</button
    >
  </div>
{:else}
  {#await favoritesPromise}
    <LoadingIndicator />
  {:then confirmation}
    {#if $favorites.length > 0}
      <!-- Favorites available -->
      <MovieCarousel movies={$favorites} />
    {:else}
      <!-- No favorites yet -->
      <div id="add-favorites-message">
        You don't have any favorites yet. Start adding movies!
      </div>
    {/if}
  {/await}
{/if}

<style>
  h2 {
    text-align: left;
    padding-left: 20px;
    font-size: 25px;
  }

  #home-page-log-in-message {
    font-size: 25px;
    margin-bottom: 15px;
  }
  #add-favorites-message {
    font-size: 25px;
    margin-bottom: 35px;
  }
  #home-page-favorites-login-button {
    background-color: var(--Accent_2);
    color: white;
  }
  #login-message {
    padding-bottom: 50px;
  }
</style>
