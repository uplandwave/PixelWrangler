<!-- from vs code quick fix: -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<script>
  export let onSubmit = (v) => {};

  let value = "";

  function runOnSubmit() {
    onSubmit(value);
    value = "";
  }
</script>

<form on:submit={runOnSubmit}>
  <div class="input-container">
    <!-- from https://svelte.dev/docs/svelte/bind -->
    <input id="search-input" bind:value type="text" />
    <!-- Copied from https://fonts.google.com/ -->
    <span on:click={runOnSubmit} class="material-symbols-outlined icon">
      search
    </span>
  </div>
</form>

<style>
  input,
  .icon {
    font-size: x-large;
  }
  input {
    padding: 7px 9px;
    border-radius: 12px;
    border: none;
    box-shadow: 0px 2px 8px var(--Shadow);
  }

  .input-container {
    width: fit-content;
    margin: 0 auto;
    position: relative;
  }

  .icon {
    right: 9px;
    top: 9px;
    position: absolute;
    cursor: pointer;
  }

  @media (min-width: 426px) {
    input,
    .icon {
      font-size: xx-large;
    }
  }
</style>
