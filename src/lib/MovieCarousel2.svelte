<!-- <script>
  import { onMount } from "svelte";
  import MovieCard2 from "./MovieCard2.svelte";
  export let newMovies = [];

  function scroll(direction) {
    const carousel = document.querySelector(".carousel");
    const carouselContainer = document.querySelector(".carousel-container");
    const scrollAmount = carouselContainer.clientWidth;
    if (direction === "right") {
      carousel.scrollLeft += scrollAmount;
    } else {
      carousel.scrollLeft -= scrollAmount;
    }
  }
</script>

<div class="carousel-container">
  <div class="carousel">
    {#each newMovies as movie}
      <MovieCard2 {movie} />
    {/each}
  </div>
  <button
    on:click={() => {
      scroll("left");
    }}>⬅️</button
  >
  <button
    on:click={() => {
      scroll("right");
    }}>➡️</button
  >
</div>




<div class="carousel-container">
  <div class="carousel">
    {#each newMovies as movie}
      <MovieCard2 {movie} />
    {/each}
  </div>
  <button
    on:click={() => {
      scroll("left");
    }}>⬅️</button
  >
  <button
    on:click={() => {
      scroll("right");
    }}>➡️</button
  >
</div>


<style>
  .carousel-container {
    width: 80%;
    margin: 0 auto;
    max-width: 1000;
  }
  .carousel-container {
    position: relative;
  }

  .carousel-container::before,
  .carousel-container::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px;
    pointer-events: none;
    z-index: 1;
  }

  .carousel-container::before {
    left: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  }

  .carousel-container::after {
    right: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding-left: 7px;
    padding-right: 7px;
    padding-bottom: 30px;
    padding-top: 30px;
    cursor: pointer;
  }

  button:first-of-type {
    left: 10px;
  }

  button:last-of-type {
    right: 10px;
  }
  .carousel {
    display: flex;
    gap: 20px;
    scroll-behavior: smooth;
    /* todo: change this to hidden */
    overflow-x: scroll;

    /* Hide scrollbar for Chrome, Safari and Opera */
    :-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
 -->










 <script>
  import { onMount } from "svelte";
  import MovieCard2 from "./MovieCard2.svelte";
  
  export let movies = [];
  export let id = Math.random().toString(36).substr(2, 9); // Unique ID for each carousel

  function scroll(direction) {
    const carousel = document.getElementById(`carousel-${id}`);
    const carouselContainer = document.getElementById(`carousel-container-${id}`);
    const scrollAmount = carouselContainer.clientWidth;
    
    if (direction === "right") {
      carousel.scrollLeft += scrollAmount;
    } else {
      carousel.scrollLeft -= scrollAmount;
    }
  }
</script>

<div class="carousel-container" id="carousel-container-{id}">
  <div class="carousel" id="carousel-{id}">
    {#each movies as movie}
      <MovieCard2 {movie} />
    {/each}
  </div>
  <button 
    on:click={() => { scroll("left"); }}
  >
    ⬅️
  </button>
  <button 
    on:click={() => { scroll("right"); }}
  >
    ➡️
  </button>
</div>

<style>
  .carousel-container {
    width: 80%;
    margin: 0 auto;
    max-width: 1000;
    position: relative;
  }

  .carousel-container::before,
  .carousel-container::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px;
    pointer-events: none;
    z-index: 1;
  }

  .carousel-container::before {
    left: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  }

  .carousel-container::after {
    right: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding-left: 7px;
    padding-right: 7px;
    padding-bottom: 30px;
    padding-top: 30px;
    cursor: pointer;
  }

  button:first-of-type {
    left: 10px;
  }

  button:last-of-type {
    right: 10px;
  }

  .carousel {
    display: flex;
    gap: 20px;
    scroll-behavior: smooth;
    overflow-x: scroll;

    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
</style>