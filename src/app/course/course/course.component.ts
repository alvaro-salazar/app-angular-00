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

  constructor(private actorService: ActorService) {
  }

  getActorsList(): void {
    this.actorService.getDirectors().subscribe( (actors) => {
      this.actores = actors;
    });
  }

  ngOnInit(): void {
    this.getActorsList();
  }
}
