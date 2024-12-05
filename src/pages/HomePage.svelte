<!-- <script>
  import MovieCard from "./MovieSummaryCard.svelte";
  import MoviesList from "./MoviesList.svelte";
  import MovieCarousel from "../lib/MovieCarousel2.svelte";

  function foo(id) {
    console.log("foo", id);
  }

  const newMovies = [
    {
  "id": 1307737,
  "title": "Pride and Prejudice",
  "type": "movie",
  "tmdb_id": 43818,
  "tmdb_type": "movie",
  "imdb_id": "tt0032943",
  "season_number": null,
  "poster_url": "https://cdn.watchmode.com/posters/01307737_poster_w185.jpg",
  "source_release_date": "1940-07-26",
  "source_id": 26,
  "source_name": "Prime Video",
  "is_original": 0
},
    {
      id: 3165490,
      title: "Slow Horses",
      type: "tv_series",
      tmdb_id: 95480,
      tmdb_type: "tv",
      imdb_id: "tt5875444",
      season_number: 1,
      poster_url: "https://cdn.watchmode.com/posters/03165490_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 371,
      source_name: "AppleTV+",
      is_original: 1,
    },
    {
      id: 3175997,
      title: "Luxe Listings Sydney",
      type: "tv_series",
      tmdb_id: 128912,
      tmdb_type: "tv",
      imdb_id: "tt14344354",
      season_number: 2,
      poster_url: "https://cdn.watchmode.com/posters/03175997_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 26,
      source_name: "Amazon Prime",
      is_original: 1,
    },
    {
      id: 3179027,
      title: "The Outlaws",
      type: "tv_series",
      tmdb_id: 136044,
      tmdb_type: "tv",
      imdb_id: "tt11646832",
      season_number: 1,
      poster_url: "https://cdn.watchmode.com/posters/03179027_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 26,
      source_name: "Amazon Prime",
      is_original: 0,
    },
    {
      id: 3171741,
      title: "Doug Unplugs",
      type: "tv_series",
      tmdb_id: 112148,
      tmdb_type: "tv",
      imdb_id: "tt11690802",
      season_number: 2,
      poster_url: "https://cdn.watchmode.com/posters/03171741_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 371,
      source_name: "AppleTV+",
      is_original: 1,
    },
    {
      id: 1623745,
      title: "The Bubble",
      type: "movie",
      tmdb_id: 765119,
      tmdb_type: "movie",
      imdb_id: "tt13610562",
      season_number: null,
      poster_url: "https://cdn.watchmode.com/posters/01623745_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 203,
      source_name: "Netflix",
      is_original: 0,
    },
    {
      id: 3175047,
      title: "The Boarding School: Las Cumbres",
      type: "tv_series",
      tmdb_id: 97513,
      tmdb_type: "tv",
      imdb_id: "tt11709206",
      season_number: 2,
      poster_url: "https://cdn.watchmode.com/posters/03175047_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 26,
      source_name: "Amazon Prime",
      is_original: 1,
    },
    {
      id: 1645336,
      title: "Captain Nova",
      type: "movie",
      tmdb_id: 881957,
      tmdb_type: "movie",
      imdb_id: "tt14915608",
      season_number: null,
      poster_url: "https://cdn.watchmode.com/posters/01645336_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 203,
      source_name: "Netflix",
      is_original: 0,
    },
    {
      id: 543512,
      title: "Love Me",
      type: "tv_series",
      tmdb_id: 139628,
      tmdb_type: "tv",
      imdb_id: "tt15233564",
      season_number: 1,
      poster_url: "https://cdn.watchmode.com/posters/0543512_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 157,
      source_name: "Hulu",
      is_original: 0,
    },
    {
      id: 122505,
      title: "All Inclusive",
      type: "movie",
      tmdb_id: 105894,
      tmdb_type: "movie",
      imdb_id: "tt1065290",
      season_number: null,
      poster_url: "https://cdn.watchmode.com/posters/0122505_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 157,
      source_name: "Hulu",
      is_original: 0,
    },
    {
      id: 131232,
      title: "Antz",
      type: "movie",
      tmdb_id: 8916,
      tmdb_type: "movie",
      imdb_id: "tt0120587",
      season_number: null,
      poster_url: "https://cdn.watchmode.com/posters/0131232_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 157,
      source_name: "Hulu",
      is_original: 0,
    },
    {
      id: 133594,
      title: "Armored",
      type: "movie",
      tmdb_id: 4597,
      tmdb_type: "movie",
      imdb_id: "tt0913354",
      season_number: null,
      poster_url: "https://cdn.watchmode.com/posters/0133594_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 157,
      source_name: "Hulu",
      is_original: 0,
    }
  ];

  const recomendedMovies = [
    {
  "id": 1307737,
  "title": "Pride and Prejudice",
  "type": "movie",
  "tmdb_id": 43818,
  "tmdb_type": "movie",
  "imdb_id": "tt0032943",
  "season_number": null,
  "poster_url": "https://cdn.watchmode.com/posters/01307737_poster_w185.jpg",
  "source_release_date": "1940-07-26",
  "source_id": 26,
  "source_name": "Prime Video",
  "is_original": 0
},
{
  "id": 1359293,
  "title": "Star Wars",
  "type": "movie",
  "tmdb_id": 11,
  "tmdb_type": "movie",
  "imdb_id": "tt0076759",
  "season_number": null,
  "poster_url": "https://cdn.watchmode.com/posters/01359293_poster_w185.jpg",
  "source_release_date": "1977-05-25",
  "source_id": 372,
  "source_name": "Disney+",
  "is_original": 0
},
{
  "id": 1171421,
  "title": "How to Train Your Dragon",
  "type": "movie",
  "tmdb_id": 10191,
  "tmdb_type": "movie",
  "imdb_id": "tt0892769",
  "season_number": null,
  "poster_url": "https://cdn.watchmode.com/posters/01171421_poster_w185.jpg",
  "source_release_date": "2010-03-18",
  "source_id": 430,
  "source_name": "tenplay",
  "is_original": 0
},
{
  "id": 1206454,
  "title": "Knight and Day",
  "type": "movie",
  "tmdb_id": 37834,
  "tmdb_type": "movie",
  "imdb_id": "tt1013743",
  "season_number": null,
  "poster_url": "https://cdn.watchmode.com/posters/01206454_poster_w185.jpg",
  "source_release_date": "2010-06-15",
  "source_id": 372,
  "source_name": "Disney+",
  "is_original": 0
},{
  "id": 1481088,
  "title": "Zoom",
  "type": "movie",
  "tmdb_id": 14113,
  "tmdb_type": "movie",
  "imdb_id": "tt0383060",
  "season_number": null,
  "poster_url": "https://cdn.watchmode.com/posters/01481088_poster_w185.jpg",
  "source_release_date": "2006-08-11",
  "source_id": 390,
  "source_name": "Hoopla",
  "is_original": 0
},{
  "id": 1396181,
  "title": "The Happiest Millionaire",
  "type": "movie",
  "tmdb_id": 25445,
  "tmdb_type": "movie",
  "imdb_id": "tt0061749",
  "poster_url": "https://cdn.watchmode.com/posters/01396181_poster_w185.jpg",
  "source_release_date": "1967-11-30",
  "source_id": 372,
  "source_name": "Disney+",
  "is_original": 0
},{
  "id": 1412868,
  "title": "The Polar Express",
  "type": "movie",
  "tmdb_id": 5255,
  "tmdb_type": "movie",
  "imdb_id": "tt0338348",
  "poster_url": "https://cdn.watchmode.com/posters/01412868_poster_w185.jpg",
  "source_release_date": "2004-11-10",
  "source_id": 157,
  "source_name": "Hulu",
  "is_original": 0
},{
  "id": 1329617,
  "title": "Sabrina",
  "type": "movie",
  "tmdb_id": 11860,
  "tmdb_type": "movie",
  "imdb_id": "tt0114319",
  "poster_url": "https://cdn.watchmode.com/posters/01329617_poster_w185.jpg",
  "source_release_date": "1995-12-15",
  "source_id": 455,
  "source_name": "Paramount+ with Showtime",
  "is_original": 0
},{
  "id": 1340386,
  "title": "Seven Brides for Seven Brothers",
  "type": "movie",
  "tmdb_id": 16563,
  "tmdb_type": "movie",
  "imdb_id": "tt0047472",
  "poster_url": "https://cdn.watchmode.com/posters/01340386_poster_w185.jpg",
  "source_release_date": "1954-07-22",
  "source_id": 296,
  "source_name": "Tubi TV",
  "is_original": 0
},{
  "id": 1307725,
  "title": "Pride & Prejudice",
  "type": "movie",
  "tmdb_id": 4348,
  "tmdb_type": "movie",
  "imdb_id": "tt0414387",
  "poster_url": "https://cdn.watchmode.com/posters/01307725_poster_w185.jpg",
  "source_release_date": "2005-09-16",
  "source_id": 388,
  "source_name": "Peacock",
  "is_original": 0
},{
  "id": 1311258,
  "title": "Puss in Boots",
  "type": "movie",
  "tmdb_id": 141879,
  "tmdb_type": "movie",
  "imdb_id": "tt0177606",
  "poster_url": "https://cdn.watchmode.com/posters/01311258_poster_w185.jpg",
  "source_release_date": "1988-06-01",
  "runtime_minutes": 96,
  "genres": ["Fantasy", "Family"],
  "user_rating": 6.3,
  "critic_score": 65,
  "us_rating": "G"
}
  ];



</script>
<h1>This is the Home page</h1>
<h2>New</h2>
<MovieCarousel {movies} />
<h2>Recomended</h2>
<MovieCarousel {newMovies} /> -->


  <!-- <MoviesList /> -->





















  <script>
    import MovieCarousel from "../lib/MovieCarousel2.svelte";
  
    const newMovies = [
    {
      id: 3165490,
      title: "Slow Horses",
      type: "tv_series",
      tmdb_id: 95480,
      tmdb_type: "tv",
      imdb_id: "tt5875444",
      season_number: 1,
      poster_url: "https://cdn.watchmode.com/posters/03165490_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 371,
      source_name: "AppleTV+",
      is_original: 1,
    },
    {
      id: 3175997,
      title: "Luxe Listings Sydney",
      type: "tv_series",
      tmdb_id: 128912,
      tmdb_type: "tv",
      imdb_id: "tt14344354",
      season_number: 2,
      poster_url: "https://cdn.watchmode.com/posters/03175997_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 26,
      source_name: "Amazon Prime",
      is_original: 1,
    },
    {
      id: 3179027,
      title: "The Outlaws",
      type: "tv_series",
      tmdb_id: 136044,
      tmdb_type: "tv",
      imdb_id: "tt11646832",
      season_number: 1,
      poster_url: "https://cdn.watchmode.com/posters/03179027_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 26,
      source_name: "Amazon Prime",
      is_original: 0,
    },
    {
      id: 3171741,
      title: "Doug Unplugs",
      type: "tv_series",
      tmdb_id: 112148,
      tmdb_type: "tv",
      imdb_id: "tt11690802",
      season_number: 2,
      poster_url: "https://cdn.watchmode.com/posters/03171741_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 371,
      source_name: "AppleTV+",
      is_original: 1,
    },
    {
      id: 1623745,
      title: "The Bubble",
      type: "movie",
      tmdb_id: 765119,
      tmdb_type: "movie",
      imdb_id: "tt13610562",
      season_number: null,
      poster_url: "https://cdn.watchmode.com/posters/01623745_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 203,
      source_name: "Netflix",
      is_original: 0,
    },
    {
      id: 3175047,
      title: "The Boarding School: Las Cumbres",
      type: "tv_series",
      tmdb_id: 97513,
      tmdb_type: "tv",
      imdb_id: "tt11709206",
      season_number: 2,
      poster_url: "https://cdn.watchmode.com/posters/03175047_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 26,
      source_name: "Amazon Prime",
      is_original: 1,
    },
    {
      id: 1645336,
      title: "Captain Nova",
      type: "movie",
      tmdb_id: 881957,
      tmdb_type: "movie",
      imdb_id: "tt14915608",
      season_number: null,
      poster_url: "https://cdn.watchmode.com/posters/01645336_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 203,
      source_name: "Netflix",
      is_original: 0,
    },
    {
      id: 543512,
      title: "Love Me",
      type: "tv_series",
      tmdb_id: 139628,
      tmdb_type: "tv",
      imdb_id: "tt15233564",
      season_number: 1,
      poster_url: "https://cdn.watchmode.com/posters/0543512_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 157,
      source_name: "Hulu",
      is_original: 0,
    },
    {
      id: 122505,
      title: "All Inclusive",
      type: "movie",
      tmdb_id: 105894,
      tmdb_type: "movie",
      imdb_id: "tt1065290",
      season_number: null,
      poster_url: "https://cdn.watchmode.com/posters/0122505_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 157,
      source_name: "Hulu",
      is_original: 0,
    },
    {
      id: 131232,
      title: "Antz",
      type: "movie",
      tmdb_id: 8916,
      tmdb_type: "movie",
      imdb_id: "tt0120587",
      season_number: null,
      poster_url: "https://cdn.watchmode.com/posters/0131232_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 157,
      source_name: "Hulu",
      is_original: 0,
    },
    {
      id: 133594,
      title: "Armored",
      type: "movie",
      tmdb_id: 4597,
      tmdb_type: "movie",
      imdb_id: "tt0913354",
      season_number: null,
      poster_url: "https://cdn.watchmode.com/posters/0133594_poster_w185.jpg",
      source_release_date: "2022-04-01",
      source_id: 157,
      source_name: "Hulu",
      is_original: 0,
    }
  ];
  
    const recomendedMovies = [
    {
  "id": 1307737,
  "title": "Pride and Prejudice",
  "type": "movie",
  "tmdb_id": 43818,
  "tmdb_type": "movie",
  "imdb_id": "tt0032943",
  "season_number": null,
  "poster_url": "https://cdn.watchmode.com/posters/01307737_poster_w185.jpg",
  "source_release_date": "1940-07-26",
  "source_id": 26,
  "source_name": "Prime Video",
  "is_original": 0
},
{
  "id": 1359293,
  "title": "Star Wars",
  "type": "movie",
  "tmdb_id": 11,
  "tmdb_type": "movie",
  "imdb_id": "tt0076759",
  "season_number": null,
  "poster_url": "https://cdn.watchmode.com/posters/01359293_poster_w185.jpg",
  "source_release_date": "1977-05-25",
  "source_id": 372,
  "source_name": "Disney+",
  "is_original": 0
},
{
  "id": 1171421,
  "title": "How to Train Your Dragon",
  "type": "movie",
  "tmdb_id": 10191,
  "tmdb_type": "movie",
  "imdb_id": "tt0892769",
  "season_number": null,
  "poster_url": "https://cdn.watchmode.com/posters/01171421_poster_w185.jpg",
  "source_release_date": "2010-03-18",
  "source_id": 430,
  "source_name": "tenplay",
  "is_original": 0
},
{
  "id": 1206454,
  "title": "Knight and Day",
  "type": "movie",
  "tmdb_id": 37834,
  "tmdb_type": "movie",
  "imdb_id": "tt1013743",
  "season_number": null,
  "poster_url": "https://cdn.watchmode.com/posters/01206454_poster_w185.jpg",
  "source_release_date": "2010-06-15",
  "source_id": 372,
  "source_name": "Disney+",
  "is_original": 0
},{
  "id": 1481088,
  "title": "Zoom",
  "type": "movie",
  "tmdb_id": 14113,
  "tmdb_type": "movie",
  "imdb_id": "tt0383060",
  "season_number": null,
  "poster_url": "https://cdn.watchmode.com/posters/01481088_poster_w185.jpg",
  "source_release_date": "2006-08-11",
  "source_id": 390,
  "source_name": "Hoopla",
  "is_original": 0
},{
  "id": 1396181,
  "title": "The Happiest Millionaire",
  "type": "movie",
  "tmdb_id": 25445,
  "tmdb_type": "movie",
  "imdb_id": "tt0061749",
  "poster_url": "https://cdn.watchmode.com/posters/01396181_poster_w185.jpg",
  "source_release_date": "1967-11-30",
  "source_id": 372,
  "source_name": "Disney+",
  "is_original": 0
},{
  "id": 1412868,
  "title": "The Polar Express",
  "type": "movie",
  "tmdb_id": 5255,
  "tmdb_type": "movie",
  "imdb_id": "tt0338348",
  "poster_url": "https://cdn.watchmode.com/posters/01412868_poster_w185.jpg",
  "source_release_date": "2004-11-10",
  "source_id": 157,
  "source_name": "Hulu",
  "is_original": 0
},{
  "id": 1329617,
  "title": "Sabrina",
  "type": "movie",
  "tmdb_id": 11860,
  "tmdb_type": "movie",
  "imdb_id": "tt0114319",
  "poster_url": "https://cdn.watchmode.com/posters/01329617_poster_w185.jpg",
  "source_release_date": "1995-12-15",
  "source_id": 455,
  "source_name": "Paramount+ with Showtime",
  "is_original": 0
},{
  "id": 1340386,
  "title": "Seven Brides for Seven Brothers",
  "type": "movie",
  "tmdb_id": 16563,
  "tmdb_type": "movie",
  "imdb_id": "tt0047472",
  "poster_url": "https://cdn.watchmode.com/posters/01340386_poster_w185.jpg",
  "source_release_date": "1954-07-22",
  "source_id": 296,
  "source_name": "Tubi TV",
  "is_original": 0
},{
  "id": 1307725,
  "title": "Pride & Prejudice",
  "type": "movie",
  "tmdb_id": 4348,
  "tmdb_type": "movie",
  "imdb_id": "tt0414387",
  "poster_url": "https://cdn.watchmode.com/posters/01307725_poster_w185.jpg",
  "source_release_date": "2005-09-16",
  "source_id": 388,
  "source_name": "Peacock",
  "is_original": 0
},{
  "id": 1311258,
  "title": "Puss in Boots",
  "type": "movie",
  "tmdb_id": 141879,
  "tmdb_type": "movie",
  "imdb_id": "tt0177606",
  "poster_url": "https://cdn.watchmode.com/posters/01311258_poster_w185.jpg",
  "source_release_date": "1988-06-01",
  "runtime_minutes": 96,
  "genres": ["Fantasy", "Family"],
  "user_rating": 6.3,
  "critic_score": 65,
  "us_rating": "G"
}
  ];
  </script>
  
  <h1>This is the Home page</h1>
  <h2>New</h2>
  <MovieCarousel movies={newMovies} />
  <h2>Recommended</h2>
  <MovieCarousel movies={recomendedMovies} />
<h2>Favorites</h2>
<h4>Log in to see your favorites</h4>