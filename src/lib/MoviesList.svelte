<script>
  import MovieCard from "./MovieCard.svelte";

  export let movieList = [];
</script>

<ul class="movie-list">
  {#each movieList as movie}
    <li class="movie-item">
      <MovieCard {movie} />
    </li>
  {/each}
</ul>

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
