
//clase curso
export class Curso {
  id: number;
  name: string;
  professor: string;
  credits: number;

  private cursos: Array<Curso> = [];

  constructor(id: number, name: string, professor: string, credits: number) {
    this.id = id;
    this.name = name;
    this.professor = professor;
    this.credits = credits;
  }



}
