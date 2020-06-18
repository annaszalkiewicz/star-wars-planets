import { Resident } from './resident.model';
import { Film } from './film.model';

export class Planet {
  public name: string;
  public rotationPeriod: string;
  public orbitalPeriod: string;
  public diameter: string;
  public climate: string;
  public gravity: string;
  public terrain: string;
  public surfaceWater: string;
  public population: string;
  public residents: Resident[];
  public films: Film[];

  constructor(
    name: string,
    rotation: string,
    orbital: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface: string,
    population: string,
    residents: Resident[],
    films: Film[]
  ) {
    this.name = name;
    this.rotationPeriod = rotation;
    this.orbitalPeriod = orbital;
    this.diameter = diameter;
    this.climate = climate;
    this.gravity = gravity;
    this.terrain = terrain;
    this.surfaceWater = surface;
    this.population = population;
    this.residents = residents;
    this.films = films;
  }
}
