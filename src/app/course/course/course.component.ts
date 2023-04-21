import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { dataCourses } from './dataCursos';
import { Actor } from './actor';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  public actores: Array<Actor> = [];

  actoresPorPagina = 8;
  paginaActual = 1;

  constructor(private actorService: ActorService) {
  }

  getActorsList(): void {
    this.actorService.getDirectors().subscribe( (actors) => {
      this.actores = actors;
    });
  }

  get totalPages() {
    return Math.ceil(this.actores.length / this.actoresPorPagina);
  }

  get actoresPaginados() {
    const startIndex = (this.paginaActual - 1) * this.actoresPorPagina;
    return this.actores.slice(startIndex, startIndex + this.actoresPorPagina);
  }

  get pages() {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  setCurrentPage(page: number) {
    this.paginaActual = page;
  }

  previousPage() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }

  nextPage() {
    if (this.paginaActual < this.totalPages) {
      this.paginaActual++;
    }
  }

  cambiarPagina(pagina: number) {
    this.paginaActual = pagina;
  }

  obtenerActoresPaginados(): any[] {
    const indiceInicial = (this.paginaActual - 1) * this.actoresPorPagina;
    const indiceFinal = indiceInicial + this.actoresPorPagina;
    return this.actores.slice(indiceInicial, indiceFinal);
  }


  ngOnInit(): void {
    this.getActorsList();
  }
}
