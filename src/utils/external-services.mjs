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

export async function getListOfRandomMovies() {
  try {
    const response = await fetch(`https://api.watchmode.com/v1/list-titles/?apiKey=${API_KEY}&source_ids=203,57`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("getListOfRandomMovies - " + error)
  }
}