// fetch favorites from supabase
import { supabase } from "../supabaseClient";

export async function fetchFavoritesData(userId) {
    if (!userId) return [];

    const { data, error } = await supabase
        .from("favorites")
        .select("*") // fetch all columns from the favorites table
        .eq("uid", userId);

    if (error) {
        console.error("Error fetching favorites:", error);
        return [];
    }

    // return the data where attribute <id> is the movie_id
    return data.map((d) => {
        return { ...d, id: d.movie_id }
    });
}