<script>
  import SearchBar from "../lib/SearchBar.svelte";
  import MoviesList from "../lib/MoviesList.svelte";
  import movieData from "../movieData.json";
  import { autoSearch } from "../utils/external-services.mjs";
  import LoadingIndicator from "../lib/LoadingIndicator.svelte";

  const { newMovies } = movieData;

  let searchPromise;

  function onSubmit(value) {
    searchPromise = autoSearch(value);
  }
</script>

<div class="search-page-container">
  <SearchBar {onSubmit} />

  <div class="search-results-container">
    {#await searchPromise}
      <LoadingIndicator />
    {:then searchResults}
      <MoviesList movieList={searchResults} />
    {/await}
  </div>
</div>

<style>
  .search-page-container {
    margin-top: var(--margin-top-page-standard);
    position: relative;
  }
  .search-results-container {
    max-width: 900px;
    width: 90%;
    margin: 32px auto 0 auto;
  }
</style>
