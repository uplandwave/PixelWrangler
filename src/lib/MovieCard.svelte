<script>
  export let movie = {};
  import { showModal, modalMovieID } from "../stores.js";

  function openModal() {
    console.log("here");
    $modalMovieID = movie.id;
    $showModal = true;
  }
</script>

<div>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <img
    src={movie.poster_url}
    alt={movie.title}
    width="246.67px"
    height="370.67px"
    on:click={openModal}
  />
</div>

<style>
  img {
    border-radius: 12px;
  }
</style>
