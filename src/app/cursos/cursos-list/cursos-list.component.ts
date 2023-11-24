import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {
[x: string]: any;

  selectedCurso! : Curso;
  selected = false;
  cursos: Array<Curso> = [];
  certificates: Array<number> = [];


  constructor(private cursoService: CursoService) { }

  getCursos(): void {
    this.cursoService.getCursos().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }

  onSelected(book: Curso): void {
    this.selected = true;
    this.selectedCurso = book;
  }

  getCertificates(): void {
    this.cursoService.getCursos()
  }


  ngOnInit() {
    this.getCursos();
  }

}
