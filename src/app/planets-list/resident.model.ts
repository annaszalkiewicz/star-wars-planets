export class Resident {
  public name: string;
  public height: string;
  public mass: string;
  public hairColor: string;
  public skinColor: string;
  public eyeColor: string;
  public birthYear: string;
  public gender: string;
  constructor(
    name: string,
    height: string,
    mass: string,
    hairColor: string,
    skinColor: string,
    eyeColor: string,
    birthYear: string,
    gender: string
  ) {
    this.name = name;
    this.height = height;
    this.mass = mass;
    this.hairColor = hairColor;
    this.skinColor = skinColor;
    this.eyeColor = eyeColor;
    this.birthYear = birthYear;
    this.gender = gender;
  }
}
