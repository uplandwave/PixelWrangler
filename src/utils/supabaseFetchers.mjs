// fetch favorites from supabase
import { supabase } from "../supabaseClient";
import { favorites } from "../stores.js"

export async function updateFavoritesStore(userId) {
    if (!userId) return [];

    const { data, error } = await supabase
        .from("favorites")
        .select("*") // fetch all columns from the favorites table
        .eq("uid", userId);

    if (error) {
        console.error("Error fetching favorites:", error);
        favorites.set([])
        return false;
    }

    // return the data where attribute <id> is the movie_id
    const modData = data.map((d) => {
        return { ...d, id: d.movie_id }
    });
    favorites.set(modData)
    return true
}