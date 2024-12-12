<script>
  import { route, showModal } from "./stores";

  import HomePage from "./pages/HomePage.svelte";
  import Search from "./pages/Search.svelte";
  import Favorites from "./pages/Favorites.svelte";
  import Login from "./pages/Login.svelte";
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";
  import MovieModal from "./lib/MovieModal.svelte";

  // let route = "#home";
  let params = {};
  window.addEventListener("popstate", (e) => {
    const parts = location.hash.split("?");
    params = new URLSearchParams(parts[1]);
    // adding the $ is like saying route.set
    $route = parts[0];
  });
</script>

<Header />

<main>
  <div class="card">
    {#if $route === "#home"}
      <HomePage />
    {:else if $route === "#favorites"}
      <Favorites />
    {:else if $route === "#search"}
      <Search />
    {:else if $route === "#login"}
      <Login />
    {/if}
    <!-- svelte-ignore block_empty -->
    {#if $showModal}
      <MovieModal />
    {/if}
  </div>
</main>

<Footer />
