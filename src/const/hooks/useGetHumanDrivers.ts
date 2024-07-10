import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_DB_URL,
  import.meta.env.VITE_DB_KEY
);

type Driver = {
  id: number;
  first_name: string;
  last_name: string;
  initials: string;
  city_of_birth: string;
  country_of_birth: string;
  country_of_representation: string;
  date_of_birth: string;
  human: boolean;
  profile_image: string;
};

export default function useGetUsers() {
  const [humanDriversData, setHumanDriversData] = useState<Driver[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    getHumanDrivers();
  }, []);

  async function getHumanDrivers() {
    const { data } = await supabase.from("users").select().order("first_name").eq("human", true);
    //@ts-expect-error will fix later
    setHumanDriversData(data);
  }

  return {
    humanDriversData,
  };
}
