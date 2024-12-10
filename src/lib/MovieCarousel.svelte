<!-- MovieCard.svelte -->
<!-- <script lang="ts">
    export let movie: {
      title: string;
      poster: string;
      id: number;
    };
    export let onClick: (movieId: number) => void = () => {};
  </script>
  
  <div 
    class="movie-card"
    on:click={() => onClick(movie.id)}
    on:keydown={(e) => e.key === 'Enter' && onClick(movie.id)}
    tabindex="0"
    role="button"
  >
    <img 
      src={movie.poster} 
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
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
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
  </style> -->

<!-- MovieCarousel.svelte -->
<!-- <script lang="ts"> -->
<script>
  import { onMount } from "svelte";
  import MovieCard from "./MovieCard.svelte";

  // export let movies: Array<{
  //   title: string;
  //   poster: string;
  //   id: number;
  // }> = [];
  export let movies = [];

  // export let onMovieSelect: (movieId: number) => void = () => {};
  export let onMovieSelect;

  let carouselContainer;
  let isDragging = false;
  let startX;
  let scrollLeft;

  function handleMouseDown(e) {
    isDragging = true;
    startX = e.pageX - carouselContainer.offsetLeft;
    scrollLeft = carouselContainer.scrollLeft;
  }

  function handleMouseMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselContainer.offsetLeft;
    const walk = (x - startX) * 2;
    carouselContainer.scrollLeft = scrollLeft - walk;
  }

  function handleMouseUp() {
    isDragging = false;
  }

  function scrollCarousel(direction) {
    const scrollAmount = carouselContainer.clientWidth;
    carouselContainer.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }
</script>

<div class="carousel-container">
  <button class="nav-button left" on:click={() => scrollCarousel("left")}>
    ←
  </button>

  <div
    class="movie-list"
    bind:this={carouselContainer}
    on:mousedown={handleMouseDown}
    on:mousemove={handleMouseMove}
    on:mouseup={handleMouseUp}
    on:mouseleave={handleMouseUp}
  >
    {#each movies as movie (movie.id)}
      <MovieCard {movie} onClick={onMovieSelect} />
    {/each}
  </div>

  <button class="nav-button right" on:click={() => scrollCarousel("right")}>
    →
  </button>
</div>

<style>
  .carousel-container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .movie-list {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 20px 0;
    cursor: grab;
  }

  .movie-list::-webkit-scrollbar {
    display: none;
  }

  .movie-list:active {
    cursor: grabbing;
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px 15px;
    z-index: 10;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .nav-button:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }

  @media (max-width: 768px) {
    .nav-button {
      display: none;
    }
  }
</style>
