"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { BsInfoCircle } from "react-icons/bs";

import { FaCheck } from "react-icons/fa6";

import { Team, SeasonStat } from "./columns"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ScrollArea } from "@/components/ui/scroll-area"


function SeasonStatsTable({ data }: { data: SeasonStat[] }) {
  return (
    <ScrollArea className="h-[500px] w-[340px] rounded-md border p-4" >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Season Year</TableHead>
            <TableHead>Season Game</TableHead>
            <TableHead>Playoff</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((stat: SeasonStat) => (
            <TableRow key={stat.season}>
              <TableCell>{`${String(stat.season).slice(0, 4)}-${String(stat.season).slice(4)}`}</TableCell>
              <TableCell>{stat.gameTypes.includes(2) ? <FaCheck/> : ''}</TableCell>
              <TableCell>{stat.gameTypes.includes(3) ? <FaCheck/> : ''}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

function TeamInfo({ info }: { info: SeasonStat[] }) {
  console.log(info)
  return (
    <Popover>
      <PopoverTrigger>
        <BsInfoCircle className="text-blue-500" />
      </PopoverTrigger>
      <PopoverContent>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="season stats">Season Stats</TabsTrigger>
            <TabsTrigger value="other">TODO</TabsTrigger>
          </TabsList>
          <TabsContent value="season stats">
            <SeasonStatsTable data={info}></SeasonStatsTable>
          </TabsContent>
          <TabsContent value="other">
            TODO
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  )
}

export function DataTable({ teams, stats }: { teams: Array<Team>, stats: Record<string, SeasonStat[]> }) {
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
              {team.name} {' '}
              <TeamInfo info={stats[team.abbr]}></TeamInfo>
            </TableCell>
            <TableCell>
              {team.abbr}
            </TableCell>
            <TableCell>
              {team.city}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

