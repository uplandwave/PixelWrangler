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

<div class="movie-card">
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
      <img src={movieDetails.poster} alt="{movieDetails.title}" class="movie-image" />
    </div>
    <!-- Column 3 -->
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
  </div>
  <p>{ movieDetails.plot_overview }</p>
  {:else}
    <p>Loading...</p>
  {/if}
</div>

<style>
.movie-card {
  max-width: 425px;
  height: 500px;
  margin: 0 auto;
  padding: 3rem 1rem 3rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
}

.movie-card h1 {
  text-align: center;
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 40px;
}

.movie-card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three equal columns */
  /* gap: 1rem;  */
}

.movie-card-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.movie-card-column h2 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.movie-card-column p,
.movie-card-column ul {
  margin: 0.5rem 0;
  text-align: center;
}

.movie-card-column ul {
  list-style: none;
  padding: 0;
}

.movie-image {
  max-width: 100%;
  border-radius: 8px;
}

</style>