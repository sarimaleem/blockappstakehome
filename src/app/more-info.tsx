import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { ScrollArea } from "@/components/ui/scroll-area";

import { Button } from "@/components/ui/button";

import { BsInfoCircle } from "react-icons/bs";

import { SeasonSummary } from "./types";

export default function MoreInfo({ data }: { data: SeasonSummary }) {
  return (
    <Drawer>
      <DrawerTrigger><BsInfoCircle className="text-blue-500" /></DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Season Summary Details</DrawerTitle>
          <ScrollArea className="h-[350px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Statistic</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Games Played</TableCell>
                  <TableCell className="font-bold">{data.gamesPlayed}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Wins</TableCell>
                  <TableCell className="text-green-500 font-bold">{data.wins}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Losses</TableCell>
                  <TableCell className="text-red-500 font-bold">{data.losses}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ties</TableCell>
                  <TableCell className="text-gray-500 font-bold">{data.ties ?? 'N/A'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>OT Losses</TableCell>
                  <TableCell >{data.otLosses ?? 'N/A'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Wins in Regulation</TableCell>
                  <TableCell >{data.winsInRegulation}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Wins in Shootout</TableCell>
                  <TableCell >{data.winsInShootout}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Goals For</TableCell>
                  <TableCell >{data.goalsFor}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Goals For Per Game</TableCell>
                  <TableCell >{data.goalsForPerGame}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Goals Against</TableCell>
                  <TableCell >{data.goalsAgainst}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Goals Against Per Game</TableCell>
                  <TableCell >{data.goalsAgainstPerGame}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Penalty Kill Net %</TableCell>
                  <TableCell >{data.penaltyKillNetPct ?? 'N/A'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Penalty Kill %</TableCell>
                  <TableCell >{data.penaltyKillPct ?? 'N/A'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Point %</TableCell>
                  <TableCell >{data.pointPct}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Points</TableCell>
                  <TableCell >{data.points}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Power Play Net %</TableCell>
                  <TableCell >{data.powerPlayNetPct ?? 'N/A'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Power Play %</TableCell>
                  <TableCell >{data.powerPlayPct ?? 'N/A'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Shots Against Per Game</TableCell>
                  <TableCell >{data.shotsAgainstPerGame ?? 'N/A'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Shots For Per Game</TableCell>
                  <TableCell >{data.shotsForPerGame ?? 'N/A'}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ScrollArea>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
