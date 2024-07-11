import useGetSeasonPodiums from "../../const/hooks/useGetSeasonPodiums";
import { SeasonPodiums } from "../../const/interfaces/interfaces";

interface FormattedPodiums {
    [key: string]: {
      [key:number]: {
        position: number,
        fastest_lap: boolean,
        name: string,
        avatar: string,
        track: string
      }
    }
}

const Podium = () => {
  return (
    <div>podium</div>
  )
}

const PodiumHistory = () => {
  const { seasonPodiums } = useGetSeasonPodiums(7);


  const filteredPodiums = (results: SeasonPodiums[]) => {
    const podiums: FormattedPodiums = {};
    results.forEach((result: SeasonPodiums) => {
      // Ensure result.users and other nested properties are defined
      if (result.users && result.tracks && result.position && result.race_order) {
        if (!podiums[result.race_order]) {
          podiums[result.race_order] = {};
        }
        podiums[result.race_order][result.position] = {
          position: result.position,
          fastest_lap: result.fastest_lap,
          name: `${result.users.first_name} ${result.users.last_name}`,
          avatar: result.users.profile_image,
          track: result.tracks.name,
        };
      }
    });
    return podiums;
  };

  seasonPodiums.length > 0 && console.log(filteredPodiums(seasonPodiums))
  return (
    <div className='w-screen'>
      hey
    </div>
  )
}

export default PodiumHistory