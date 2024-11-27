<script>
  import { onMount } from "svelte";
  import { getListOfRandomMovies } from "../utils/external-services.mjs";
  import MovieCard from "./MovieCard.svelte";

  let movieList = [];
  
  onMount(async () => {
    try {
      const response = await getListOfRandomMovies();
      movieList = response.titles.slice(0, 12); // Limit to the first 12 movies
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  });
</script>

<h2>Movies</h2>
{#if movieList}
  <ul class="movie-list">
    {#each movieList as movie}
      <li class="movie-item">
        <MovieCard movieId={movie.id} />
      </li>
    {/each}
  </ul>
{:else}
  <p>Loading...</p>
{/if}


<style>
    .movie-list {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      list-style: none;
      padding: 0;
    }
  
    .movie-item {
      flex: 1 1 calc(33.333% - 1rem);
      box-sizing: border-box;
    }
  </style>