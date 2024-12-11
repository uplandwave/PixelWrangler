<script>
  import { onMount } from "svelte";
  import { supabase } from "../supabaseClient";
  import { user } from "../stores.js";
  import { getTitleDetails } from "../utils/external-services.mjs";

  export let movieId;

  export let hideModal;

  let movieDetails = null;
  let message = "";

  let isFavorite = false;

  async function isMovieInFavorites() {
    if (!$user) return false;

    const { data, error } = await supabase
      .from("favorites")
      .select("id")
      .eq("uid", $user.id)
      .eq("movie_id", movieId)
      .single(); // single returns only one record or null

    if (error) {
      console.error("Error checking favorites:", error);
      return false;
    }

    return data !== null; //return true if movie exists
  }

  onMount(async () => {
    try {
      movieDetails = await getTitleDetails(movieId);
      // console.log(movieDetails);
      isFavorite = await isMovieInFavorites();
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  });

    // toggle add/remove favorites
    async function toggleFavorite() {
    if (!$user) {
      message = "Please log in to manage favorites.";
      return;
    }

    try {
      if (isFavorite) {
        // remove from favorites
        const { error } = await supabase
          .from("favorites")
          .delete()
          .eq("uid", $user.id)
          .eq("movie_id", movieId);

        if (error) throw error;
        isFavorite = false;
        message = "Movie removed from favorites.";
      } else {
        // add to favorites
        const { error } = await supabase.from("favorites").insert({
          uid: $user.id,
          movie_id: movieDetails.id,
          title: movieDetails.title,
          release_year: movieDetails.year || null,
          rating: movieDetails.us_rating || null,
          genre_names: movieDetails.genre_names || null,
          poster_url: movieDetails.poster || null,
          network_names: movieDetails.network_names || null,
          plot_overview: movieDetails.plot_overview || null,
          poster_large_url: movieDetails.posterLarge || null,
        });

        if (error) throw error;
        isFavorite = true;
        message = "Movie added to favorites.";
      }
    } catch (error) {
      console.error("Error updating favorites:", error);
      message = "An unexpected error occurred.";
    }
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="modal-overlay" on:click={() => hideModal()}>
  <div class="modal-content" on:click|stopPropagation>
    {#if movieDetails}
      <h1>{movieDetails.title}</h1>
      <div class="movie-card-grid">

        <!-- Column 1 -->
        <div class="movie-card-column">
          <div class="rating">
            <h2>Rating</h2>
            <p>{movieDetails.us_rating}</p>
          </div>
          <div class="year">
            <h2>Year</h2>
            <p>{movieDetails.year}</p>
          </div>
        </div>

        <!-- Column 2 -->
        <div class="movie-card-column">
          <div class="genre">
            <h2>Genre</h2>
            <ul>
              {#each movieDetails.genre_names as genre}
                <li>{genre}</li>
              {/each}
            </ul>
          </div>
          <div class="watch">
            <h2>Watch</h2>
            <ul>
              {#each movieDetails.network_names as network}
                <li>{network}</li>
              {/each}
            </ul>
          </div>
        </div>

        <!-- Column 3 -->
        <div class="movie-card-column">
          <img
            src={movieDetails.poster}
            alt={movieDetails.title}
            class="movie-image"
          />
        </div>

      </div>
      <p>{movieDetails.plot_overview}</p>

    <!-- Toggle Button for Favorites -->
    <button on:click={toggleFavorite} class="add-button">
      {isFavorite ? "- Remove from Favorites" : "+ Add to Favorites"}
    </button>
    <p class="message">{message}</p>
  {:else}
    <p>Loading...</p>
  {/if}
  </div>
</div>

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(1px);
    /* transition: background-filter 0.5s; */
  }

  .modal-content {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    max-width: 600px;
    width: 90%;
    position: relative;
  }

  .movie-card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .add-button {
    background-color: #0056b3;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .add-button:hover {
    background-color: #3f474e;
  }
</style>