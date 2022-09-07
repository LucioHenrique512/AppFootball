export type DefaultListItemType = {
  id: number;
  logo: string;
  name: string;
};

export type TeamDetailsType = {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
  leagueName?: string;
};

export type PlayerType = {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: any;
  nationality: string;
  height?: string | null;
  weight?: string | null;
  injured: boolean;
  photo: string;
};

export type {BaseApiResponse} from './baseApiResponseType';
export type {LeagueResponseType} from './leagueResponseType';
