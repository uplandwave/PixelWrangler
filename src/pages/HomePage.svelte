  <script>
    import MovieCarousel from "../lib/MovieCarousel2.svelte";
    import HeroCarousel from "../lib/HeroCarousel.svelte";
    import movieData from "../movieData.json"

    const { newMovies, recommendedMovies } = movieData;
  
  </script>
  
  <HeroCarousel />

  <h2>New</h2>
  <MovieCarousel movies={newMovies} />
  <h2>Recommended</h2>
  <MovieCarousel movies={recommendedMovies} />
  <h2>Favorites</h2>
  <h4>Log in to see your favorites</h4>

<style>
    h2 {
    text-align: left;
    padding-left: 20px;
    font-size: 25px;
  }
</style>