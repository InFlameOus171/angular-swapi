export const apiURL = 'https://swapi.dev/api/' as const;

export enum Endpoints {
  FILMS = 'films/',
  PEOPLE = 'people/',
  PLANETS = 'planets/',
  SPECIES = 'species/',
  STARSHIPS = 'starships/',
  VEHICLES = 'vehicles/',
}

export const getApiUrlFor = (endpoint: Endpoints) => apiURL + endpoint;
