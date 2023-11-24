import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-detail',
  templateUrl: './cursos-detail.component.html',
  styleUrls: ['./cursos-detail.component.css']
})
export class CursosDetailComponent implements OnInit {

  @Input() cursosDetail!: Curso;
  constructor() { }

  ngOnInit() {
  }

}
