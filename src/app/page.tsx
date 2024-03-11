import { Team} from "./columns"
import { DataTable } from "./data-table";
import teams from "./teams";

async function getTeamSeasonStats() {
  const fetchPromises = teams.map((team: Team) =>
    fetch(`https://api-web.nhle.com/v1/club-stats-season/${team.abbr}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data for ${team.abbr}`);
        }
        return res.json();
      })
      .then(result => {
        return { [team.abbr]: result };
      })
  );

  const results = await Promise.all(fetchPromises);
  const data = results.reduce((acc, result) => ({ ...acc, ...result }), {});
  return data;
}

export default async function Home() {
  const statData = await getTeamSeasonStats();
  return (
    <div className="flex flex-col">
      <h1 className="self-center justify-center text-5xl font-serif">NHL Team Summary</h1>
      <DataTable teams={teams} stats={statData} ></DataTable>
    </div>
  );
}
