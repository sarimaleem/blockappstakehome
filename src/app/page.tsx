import { Team, SeasonSummary, SeasonStat } from "./types";
import { DataTable } from "./data-table";
import teams from "./teams";

async function getTeamSeasonStats() {
  const fetchPromises = teams.map((team: Team) =>
    fetch(`https://api-web.nhle.com/v1/club-stats-season/${team.abbr}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data for ${team.abbr}`);
        }
        return res.json();
      })
      .then((result) => {
        return { [team.name]: result };
      }),
  );

  const results = await Promise.all(fetchPromises);
  const data = results.reduce((acc, result) => ({ ...acc, ...result }), {});
  return data;
}

async function getSummaryInfo() {
  const response = await fetch(
    "https://api.nhle.com/stats/rest/en/team/summary",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch summary info");
  }
  const json = await response.json();
  const data = json["data"];
  return data;
}

function parseSummaryInfo(summaryInfo: SeasonSummary[]) {
  let summarized: Record<string, Record<number, SeasonSummary>> = {};
  summaryInfo.forEach((teamInfo) => {
    if (!(teamInfo.teamFullName in summarized)) {
      summarized[teamInfo.teamFullName] = {};
    }
    summarized[teamInfo.teamFullName][teamInfo.seasonId] = teamInfo;
  });
  return summarized;
}

export default async function Home() {
  const statData = await getTeamSeasonStats();
  const summaryData = await getSummaryInfo();
  const parsedSummaryData = parseSummaryInfo(summaryData);
  console.log(parsedSummaryData);

  // maybe combine the data

  return (
    <div className="flex flex-col">
      <h1 className="self-center justify-center text-5xl font-['Inter'] pb-[25px]">
        NHL Team Summary
      </h1>
      <p className="text-center pb-[50px]">
        Below is a table showing a summary for all NHL teams. If you click on the blue info button, it will give their season record.
      </p>
      <DataTable
        teams={teams}
        stats={statData}
        summary={parsedSummaryData}
      ></DataTable>
    </div>
  );
}
