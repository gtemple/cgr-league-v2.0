import { useState, useEffect } from "react";
import useGetSeasonPodiums from "../../const/hooks/useGetSeasonPodiums";
import { SeasonPodiums } from "../../const/interfaces/interfaces";

interface FormattedPodiums {
  [key: string]: {
    [key: number]: {
      position: number;
      fastest_lap: boolean;
      dotd: boolean;
      pole_position: boolean | null | undefined;
      name: string;
      avatar: string;
      track: string;
      sprint: boolean,
    };
  };
}

const checkAchievements = (achievement: {
  fastest: boolean;
  dotd: boolean;
  pole: boolean,
}) => {
  let fastestClass = "w-3 h-1";
  let dotdClass = "w-3 h-1";
  let poleClass = "w-3 h-1";

  if (achievement.fastest) {
    fastestClass += " bg-purple-500";
  }
  if (achievement.dotd) {
    dotdClass += " bg-green-500";
  }
  if (achievement.pole) {
    poleClass += " bg-blue-300";
  }
  return (
    <>
      <div className={fastestClass}></div>
      <div className={dotdClass}></div>
      <div className={poleClass}></div>
    </>
  );
};

const Podium = ({ podiumResults }: { podiumResults: FormattedPodiums }) => {
  const [podiumKeys, setPodiumKeys] = useState<string[]>([]);

  useEffect(() => {
    setPodiumKeys(Object.keys(podiumResults).reverse());
  }, [podiumResults]);

  return (
    <div className="flex justify-between overflow-x-auto w-full m-0.5">
      {!podiumKeys
        ? null
        : podiumKeys.map((race) => {
            const imageFirst = `${
              import.meta.env.BASE_URL
            }assets/driver-profiles/${podiumResults[race]["1"]["avatar"]}.jpg`;
            const imageSecond = `${
              import.meta.env.BASE_URL
            }assets/driver-profiles/${podiumResults[race]["2"]["avatar"]}.jpg`;
            const imageThird = `${
              import.meta.env.BASE_URL
            }assets/driver-profiles/${podiumResults[race]["3"]["avatar"]}.jpg`;

            return (
              <div
                key={race}
                className="border rounded-md border-solid py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-sky-100"
              >
                <div className="flex justify-center text-lg font-semibold uppercase">
                  {podiumResults[race]["3"]["track"]} {podiumResults[race]["3"]["sprint"] && ('(Sprint)')}
                </div>
                <div className="flex">
                  <div className="flex items-center gap-3 m-1">
                    <div className="overflow-hidden outline outline-yellow-500 w-14 h-10 m-1 rounded-full">
                      <img className="object-top" src={imageFirst} />
                    </div>
                    <div>
                      <div className="uppercase text-sm">
                        {podiumResults[race]["1"]["name"]}
                      </div>
                      <div className="flex flex-row mt-1 gap-2">
                        {checkAchievements({
                          fastest: podiumResults[race]["1"]["fastest_lap"],
                          dotd: podiumResults[race]["1"]["dotd"],
                          pole: podiumResults[race]["1"]["pole_position"],
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 m-1">
                    <div className="overflow-hidden outline outline-slate-400 w-14 h-10 m-1 rounded-full">
                      <img className="object-top" src={imageSecond} />
                    </div>
                    <div>
                      <div className="uppercase text-sm">
                        {podiumResults[race]["2"]["name"]}
                      </div>
                      <div className="flex flex-row mt-1 gap-2">
                        {checkAchievements({
                          fastest: podiumResults[race]["2"]["fastest_lap"],
                          dotd: podiumResults[race]["2"]["dotd"],
                          pole: podiumResults[race]["2"]["pole_position"],
                        })}
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex items-center gap-3 m-1">
                    <div className="overflow-hidden outline outline-amber-700 w-14 h-10 m-1 rounded-full">
                      <img className="object-top" src={imageThird} />
                    </div>
                    <div>
                      <div className="uppercase text-sm">
                        {podiumResults[race]["3"]["name"]}
                      </div>
                      <div className="flex flex-row mt-1 gap-2">
                        {checkAchievements({
                          fastest: podiumResults[race]["3"]["fastest_lap"],
                          dotd: podiumResults[race]["3"]["dotd"],
                          pole: podiumResults[race]["3"]["pole_position"],
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

const PodiumHistory = () => {
  const { seasonPodiums } = useGetSeasonPodiums(7);

  const filteredPodiums = (results: SeasonPodiums[]) => {
    const podiums: FormattedPodiums = {};
    results.forEach((result: SeasonPodiums) => {
      // Ensure result.users and other nested properties are defined
      if (
        result.users &&
        result.tracks &&
        result.position &&
        result.race_order
      ) {
        if (!podiums[result.race_order]) {
          podiums[result.race_order] = {};
        }
        podiums[result.race_order][result.position] = {
          position: result.position,
          fastest_lap: result.fastest_lap,
          dotd: result.dotd,
          pole_position: result.pole_position,
          name: `${result.users.first_name} ${result.users.last_name}`,
          avatar: result.users.profile_image,
          track: result.tracks.name,
          sprint: result.sprint
        };
      }
    });
    return podiums;
  };

  const podiumResults = filteredPodiums(seasonPodiums);

  seasonPodiums.length > 0 && console.log(filteredPodiums(seasonPodiums));
  return (
    <div className="w-full">
      <Podium podiumResults={podiumResults} />
      hey
    </div>
  );
};

export default PodiumHistory;
