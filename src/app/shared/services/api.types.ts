export interface ISWApiListResponse<T = ISWApiResults> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export type ISWApiResults = IPeopleResponse | IFilmResponse;

export interface IPeopleSearchRequest {
  name?: string;
}

export interface IPeopleResponse {
  birth_year?: string;
  created?: string;
  edited?: string;
  eye_color?: string;
  films?: string[];
  gender?: string;
  hair_color?: string;
  height?: string;
  homeworld?: string;
  mass?: string;
  name?: string;
  skin_color?: string;
  species?: string[];
  starships?: string[];
  url?: string;
  vehicles?: string[];
}

export interface IFilmSearchRequest {
  title?: string;
}

export interface IFilmResponse {
  characters?: string[];
  created?: string;
  director?: string;
  edited?: string;
  episode_id?: number;
  opening_crawl?: string;
  planets?: string[];
  producer?: string;
  release_date?: string;
  species?: string[];
  starships?: string[];
  title?: string;
  url?: string;
  vehicles?: string[];
}

export type ApiResponseTypes = {
  films: IFilmResponse;
  people: IPeopleResponse;
};
