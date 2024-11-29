<script>
  import { onMount } from "svelte";
  import { getTitleDetails } from "../utils/external-services.mjs";

  export let movieId;

  let movieDetails = null;

  onMount(async () => {
    try {
      movieDetails = await getTitleDetails(movieId);
      // console.log(movieDetails);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  });
</script>

  {#if movieDetails}
    <img
      src={movieDetails.poster}
      alt={movieDetails.title}
      class="movie-quick-view-image"
    />
  {:else}
    <p>Loading...</p>
  {/if}

<style>


  .movie-quick-view-image {
    max-width: 100%;
    border-radius: 8px;
  }
</style>
