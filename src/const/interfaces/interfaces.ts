export interface Seasons {
  id: number;
  game: string;
}

export interface Teams {
  team_name: string;
}

export interface Tracks {
  distance: number;
  img: null;
  layout: null;
  name: string;
}

export interface Users {
  country_of_representation: string;
  first_name: string;
  human: true;
  id: number;
  initials: string;
  last_name: string;
  profile_image: string;
}

export interface SeasonPodiums {
  created_at: string;
  dotd: boolean;
  fastest_lap: boolean;
  id: number;
  position: number;
  race_order: number;
  seasons: Seasons;
  pole_position: boolean | null | undefined;
  sprint: boolean;
  teams: Teams;
  tracks: Tracks;
  users: Users;
}