<script>
  import { onMount } from "svelte";
  import MovieCard from "./MovieCard.svelte";
  import MovieSummaryCard from "../pages/MovieModal.svelte";

  export let movies = [];
  export let id = Math.random().toString(36).substr(2, 9); // Unique ID for each carousel
  
  let isHovered = false;

  function scroll(direction) {
    const carousel = document.getElementById(`carousel-${id}`);
    const carouselContainer = document.getElementById(
      `carousel-container-${id}`
    );
    const scrollAmount = carouselContainer.clientWidth;

    if (direction === "right") {
      carousel.scrollLeft += scrollAmount;
    } else {
      carousel.scrollLeft -= scrollAmount;
    }
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="carousel-container"
  id="carousel-container-{id}"
  on:mouseenter={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
>
  <div class="carousel" id="carousel-{id}">
    {#each movies as movie}
      <MovieCard {movie} />
    {/each}
  </div>
  <!-- Buttons -->
  <!-- svelte-ignore a11y_consider_explicit_label -->
  <button
    on:click={() => {
      scroll("left");
    }}
    class:is-visible={isHovered}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-arrow-left"
      ><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
    >
  </button>
  <!-- svelte-ignore a11y_consider_explicit_label -->
  <button
    on:click={() => {
      scroll("right");
    }}
    class:is-visible={isHovered}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-arrow-right"
      ><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
    >
  </button>
</div>

<style>
  .carousel-container {
    width: 98%;
    margin: 0 auto;
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
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .carousel-container:hover::before,
  .carousel-container:hover::after {
    opacity: 1;
  }

  .carousel-container::before {
    left: -10px;
    background: linear-gradient(to right, #f2f3f4, rgba(255, 255, 255, 0));
  }

  .carousel-container::after {
    right: -10px;
    background: linear-gradient(to left, #f2f3f4, rgba(255, 255, 255, 0));
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    background: rgba(0, 0, 0, 0.7);
    color: #f2f3f4;
    border: none;
    padding-left: 7px;
    padding-right: 7px;
    padding-bottom: 15px;
    padding-top: 20px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  button.is-visible {
    opacity: 1;
  }

  button:first-of-type {
    left: 5px;
  }

  button:last-of-type {
    right: 5px;
  }

  .carousel {
    display: flex;
    gap: 10px;
    scroll-behavior: smooth;
    overflow-x: scroll;

    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;
    scrollbar-width: none; 
  }
</style>
