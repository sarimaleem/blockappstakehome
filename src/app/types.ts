export type Team = {
  name: string;
  abbr: string;
  city: string;
};

export type SeasonStat = {
  season: number;
  gameTypes: number[];
};

export type SeasonSummary = {
  faceoffWinPct: number | null;
  gamesPlayed: number;
  goalsAgainst: number;
  goalsAgainstPerGame: number;
  goalsFor: number;
  goalsForPerGame: number;
  losses: number;
  otLosses: number | null;
  penaltyKillNetPct: number | null;
  penaltyKillPct: number | null;
  pointPct: number;
  points: number;
  powerPlayNetPct: number | null;
  powerPlayPct: number | null;
  regulationAndOtWins: number;
  seasonId: number;
  shotsAgainstPerGame: number | null;
  shotsForPerGame: number | null;
  teamFullName: string;
  teamId: number;
  ties: number | null;
  wins: number;
  winsInRegulation: number;
  winsInShootout: number;
};
