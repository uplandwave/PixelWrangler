<script>
  import SearchBar from "../lib/SearchBar.svelte";
  import MoviesList from "../lib/MoviesList.svelte";
  import movieData from "../movieData.json";

  const { newMovies } = movieData;

  let movieList = newMovies;
</script>

<div class="search-page-container">
  <SearchBar />
  <div class="search-results-container">
    <MoviesList {movieList} />
  </div>
</div>

<style>
  .search-page-container {
    margin-top: var(--margin-top-page-standard);
  }
  .search-results-container {
    max-width: 900px;
    width: 90%;
    margin: 32px auto 0 auto;
  }
</style>
