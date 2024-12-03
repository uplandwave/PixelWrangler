<script>
  export let movie = {};
</script>

<div>
  <img src={movie.poster_url} alt={movie.title} width="246.67px" height="370.67px" />
</div>

<style>
  img {
    border-radius: 12px;
  }
</style>
