/*
  NOTE FROM API.WATCHMODE.COM:
  "
    For free API users, you are required to give attribution 
    to Watchmode and link to Watchmode.com on any page where 
    Watchmode data is used. Example:
      "Streaming data powered by Watchmode.com"
  "
*/

// TODO: use .env, or paste in key for testing
const API_KEY = import.meta.env.VITE_API_KEY;

/** 
* Gets title information.
* @summary "Get the details for a specific title, using the 
* Watchmode universal ID, TMDB ID, or IMDB ID."
* (quote from: https://api.watchmode.com/docs/#title)
* @param {String} id
* @return {Promise}
*/
export async function getTitleDetails(id) {
  try {
    const response = await fetch(`https://api.watchmode.com/v1/title/${id}/details/?apiKey=${API_KEY}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("getTitleDetails - " + error)
  }
}

/** 
* Gets the where to watch for the title.
* @summary "Get all of the streaming sources this title is available..."
* (quote from: https://api.watchmode.com/docs/#title)
* @param {String} id
* @return {Promise}
*/
export async function getTitleSources(id) {
  try {
    const response = await fetch(`https://api.watchmode.com/v1/title/${id}/sources/?apiKey=${API_KEY}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("getTitleSources - " + error)
  }
}

/** 
* Gets title information with where to watch.
* @summary "Get the details for a specific title, using the 
* Watchmode universal ID, TMDB ID, or IMDB ID."
* AND
* "Get all of the streaming sources this title is available..."
* (quotes from: https://api.watchmode.com/docs/#title)
* @param {String} id
* @return {Promise}
*/
export async function getTitleDetailsAndSources(id) {
  try {
    const response = await fetch(`https://api.watchmode.com/v1/title/${id}/details/?apiKey=${API_KEY}&append_to_response=sources`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("getTitleDetailsAndSources - " + error)
  }
}

/** 
* "Get a listing of recently released or coming soon releases on the major streaming services." 
* @summary "Get a listing of recently released or coming soon releases on the major streaming services. 
* Only major services and US releases dates included, however most of the major services 
* (Netflix, Hulu, etc) release original content on the same days in all countries they support."
* (quotes from: https://api.watchmode.com/docs/#releases)
* @param {Number} limit "Set how many release dates to return, default is..." 12 (quote from: https://api.watchmode.com/docs/#releases)
* @return {Promise}
*/
export async function getNewReleases(limit = 12) {
  try {
    const response = await fetch(`https://api.watchmode.com/v1/releases/?apiKey=${API_KEY}&limit=${limit}`)
    const data = await response.json()
    return data.releases
  } catch (error) {
    console.error("getNewReleases - " + error)
  }
}

/** 
* "Search for titles... by name or a partial name." 
* @summary "Search for titles... by name or a partial name. Useful for building an 
autocomplete search of titles..."
* (quotes from: https://api.watchmode.com/docs/#autocomplete-search)
* @param {String} value "The phrase to search for..." (quote from: https://api.watchmode.com/docs/#autocomplete-search)
* @return {Promise}
*/
export async function autoSearch(value) {
  try {
    const response = await fetch(`https://api.watchmode.com/v1/autocomplete-search/?apiKey=${API_KEY}&search_value=${value}&search_type=2`)
    const data = await response.json()
    return data.results
      // filter out those with null attribute {year} 
      //    and "https://cdn.watchmode.com/posters/blank.gif" for {image_url}
      .filter((r) => {
        if (r.year === null) {
          return false
        } else if (r.image_url === "https://cdn.watchmode.com/posters/blank.gif") {
          return false
        } else {
          return true
        }
      })
      // add attributes {poster_url} and {title}
      .map((r) => {
        return { ...r, poster_url: r.image_url, title: r.name }
      })
  } catch (error) {
    console.error("getNewReleases - " + error)
  }
}


export async function getListOfRandomMovies() {
  try {
    const response = await fetch(`https://api.watchmode.com/v1/list-titles/?apiKey=${API_KEY}&source_ids=203,57`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("getListOfRandomMovies - " + error)
  }
}