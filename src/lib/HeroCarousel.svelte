<script>
  import { onMount } from "svelte";

  // Define slides directly in the component
  const slides = [
    { image: "/Pictures/hero/1.png", text: "Save your Favorites" },
    { image: "/Pictures/hero/2.png", text: "Explore New Movies" },
    { image: "/Pictures/hero/3.png", text: "Custom Recommendations" },
  ];

  let currentSlide = 0;
  let interval;

  // Start the rotation
  onMount(() => {
    interval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
    }, 10000); // Rotate every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on destroy
  });

  function goToSlide(index) {
    currentSlide = index;
  }
</script>

<div class="hero-carousel">
  {#each slides as slide, index}
    <div
      class="slide {index === currentSlide ? 'active' : ''}"
      style="background-image: url({slide.image});"
      aria-hidden={index !== currentSlide}
    >
      {#if slide.text}
        <div class="overlay">
          <p>{slide.text}</p>
        </div>
      {/if}
    </div>
  {/each}

  <!-- Navigation dots -->
  <div class="dots">
    {#each slides as _, index}
      <!-- svelte-ignore element_invalid_self_closing_tag -->
      <button
        class:dots__button--active={index === currentSlide}
        on:click={() => goToSlide(index)}
        aria-label="Go to slide {index + 1}"
      />
    {/each}
  </div>
</div>

<style>
  .hero-carousel {
    position: relative;
    height: 400px;
    width: 100%;
    overflow: hidden;
    margin-top: 55px;
  }

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    z-index: 0;
  }

  .slide.active {
    opacity: 1;
    z-index: 1;
  }

  .overlay {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #4f5259;
    background: rgba(255, 248, 248, 0.5);
    padding: 5px;
    font-size: 25px;
    border-radius: 5px;
    margin: none;
  }

  p {
    margin: 0px;
  }

  .dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
  }

  .dots button {
    background: rgba(255, 255, 255, 0.5);
    border: none;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    cursor: pointer;
  }

  .dots__button--active {
    background: white;
  }
</style>
