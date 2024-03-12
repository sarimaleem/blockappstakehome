"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { BsInfoCircle } from "react-icons/bs";

import { FaCheck } from "react-icons/fa6";

import { Team, SeasonStat, SeasonSummary } from "./types";

import { ScrollArea } from "@/components/ui/scroll-area";
import MoreInfo from "./more-info";

function SeasonStatsTable({
  data,
  summary,
}: {
  data: SeasonStat[];
  summary?: Record<number, SeasonSummary>;
}) {
  return (
    <ScrollArea className="h-[500px] w-[475px] rounded-md border p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Season Year</TableHead>
            <TableHead>Season Game</TableHead>
            <TableHead>Playoff</TableHead>
            <TableHead>Wins</TableHead>
            <TableHead>Losses</TableHead>
            <TableHead>More</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((stat: SeasonStat) => (
            <TableRow key={stat.season}>
              <TableCell>{`${String(stat.season).slice(0, 4)}-${String(stat.season).slice(4)}`}</TableCell>
              <TableCell>
                {stat.gameTypes.includes(2) ? <FaCheck /> : "-"}
              </TableCell>
              <TableCell>
                {stat.gameTypes.includes(3) ? <FaCheck /> : "-"}
              </TableCell>
              <TableCell>
                {summary && stat.season in summary ? (
                  <div className="text-green-500">
                    {" "}
                    {summary[stat.season].wins}{" "}
                  </div>
                ) : (
                  "-"
                )}
              </TableCell>
              <TableCell>
                {summary && stat.season in summary ? (
                  <div className="text-red-500">
                    {" "}
                    {summary[stat.season].losses}{" "}
                  </div>
                ) : (
                  "-"
                )}
              </TableCell>
              <TableCell>
                {summary && stat.season in summary ? (
                  <MoreInfo data={summary[stat.season]} />
                ) : (
                  "-"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}

function TeamInfo({
  info,
  summary,
}: {
  info: SeasonStat[];
  summary: Record<number, SeasonSummary>;
}) {
  return (
    <Popover>
      <PopoverTrigger>
        <BsInfoCircle className="text-blue-500" />
      </PopoverTrigger>
      <PopoverContent>
        <SeasonStatsTable data={info} summary={summary}></SeasonStatsTable>
      </PopoverContent>
    </Popover>
  );
}

export function DataTable({
  teams,
  stats,
  summary,
}: {
  teams: Array<Team>;
  stats: Record<string, SeasonStat[]>;
  summary: Record<string, Record<number, SeasonSummary>>;
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Team Name</TableHead>
          <TableHead>Abbreviation</TableHead>
          <TableHead>City</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teams.map((team: Team) => (
          <TableRow key={team.name}>
            <TableCell>
              {team.name}{" "}
              <TeamInfo
                info={stats[team.name]}
                summary={summary[team.name]}
              ></TeamInfo>
            </TableCell>
            <TableCell>{team.abbr}</TableCell>
            <TableCell>{team.city}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
