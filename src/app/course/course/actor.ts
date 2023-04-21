
/**
 * Actor class
 */
export class Actor {
  id: number;
  name: string;
  surname: string;
  birthDate: Date;
  photo: string;
  nationality: string;
  biography: string;


  //constructor(id: number, name: string, surname: string, birthDate: Date, photo: string, nationality: string, biography: string, movies: Array<Movie>) {
    constructor(id: number, name: string, surname: string, birthDate: Date, photo: string, nationality: string, biography: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.nationality = nationality;
    this.photo = photo;
    this.biography = biography;
  }
}
