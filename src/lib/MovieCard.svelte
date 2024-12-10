<!-- <script lang="ts"> -->
<script>
  // export let movie: {
  //   title: string;
  //   poster: string;
  //   id: number;
  // };
  export let movie = {};
  export let onClick;
</script>

<div
  class="movie-card"
  on:click={() => onClick(movie.id)}
  on:keydown={(e) => e.key === "Enter" && onClick(movie.id)}
  tabindex="0"
  role="button"
>
  <img
    src={movie.poster_url}
    alt={movie.title}
    loading="lazy"
    class="movie-poster"
  />
  <div class="movie-overlay">
    <span class="movie-title">{movie.title}</span>
  </div>
</div>

<style>
  .movie-card {
    position: relative;
    width: 200px;
    height: 300px;
    margin: 0 10px;
    cursor: pointer;
    transition: transform 0.3s ease;
    border-radius: 8px;
    overflow: hidden;
  }

  .movie-card:hover {
    transform: scale(1.05);
  }

  .movie-poster {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .movie-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    padding: 10px;
    transition: opacity 0.3s ease;
  }

  .movie-title {
    color: white;
    font-weight: bold;
    text-align: center;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .movie-card:focus {
    outline: 3px solid #e50914;
    outline-offset: 3px;
  }
</style>
