<script>
  import MovieCarousel from "../lib/MovieCarousel.svelte";
  import HeroCarousel from "../lib/HeroCarousel.svelte";
  import MovieSummaryCard from "./MovieModal.svelte";
  import movieData from "../movieData.json";
  import { fetchFavoritesData } from "../utils/supabaseFetchers.mjs";
  import { user, route } from "../stores.js";

  let favorites = [];
  let showModal = false;
  let variableMovieID = ""; 

  const { newMovies, recommendedMovies } = movieData;

  // Fetch favorites when the page loads
  async function loadFavorites() {
    if ($user) {
      favorites = await fetchFavoritesData($user.id);
    }
  }

  // Navigate to the login page
  function navigateToLogin() {
    route.set("#login");
  }

  loadFavorites();
</script>

<HeroCarousel />

<h2>New</h2>
<MovieCarousel movies={newMovies} />
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
{:else if favorites.length > 0}
  <!-- Favorites available -->
  <MovieCarousel movies={favorites} />
{:else}
  <!-- No favorites yet -->
  <div id="add-favorites-message">
    You don't have any favorites yet. Start adding movies!
  </div>
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
