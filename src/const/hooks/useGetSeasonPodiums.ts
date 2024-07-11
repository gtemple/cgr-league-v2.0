import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { SeasonPodiums } from "../interfaces/interfaces"

const supabase = createClient(
  import.meta.env.VITE_DB_URL,
  import.meta.env.VITE_DB_KEY
);

export default function useGetSeasonPodiums(id: number | string | undefined) {
  const [seasonPodiums, setSeasonPodiums] = useState<SeasonPodiums[]>([]); // Provide type annotation and initialize as an empty array
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    getSeasonPodiums(id);
  }, [id]);

  async function getSeasonPodiums(seasonId: number | string | undefined) {
    const { data, error } = await supabase
      .from("race_results")
      .select(
        `
        dotd,
        id,
        dnf,
        fastest_lap,
        sprint,
        position,
        pole_position,
        race_order,
        created_at,
        users (id, human, first_name, last_name, country_of_representation, initials, profile_image),
        seasons (id, game),
        teams (team_name),
        tracks (name, distance, layout, img)
      `
      )
      .eq("season_id", seasonId)
      .gte("position", 1)
      .lt("position", 4)
      .order("race_order", { ascending: false });
    if (error) {
      console.error(error);
      return null;
    }

    //@ts-expect-error i do not like this bug
    setSeasonPodiums(data);
    setLoaded(true);
  }

  return {
    seasonPodiums,
    loaded,
  };
}
