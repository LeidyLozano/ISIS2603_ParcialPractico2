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
    this.cursoService.GetCursos().subscribe({next: apiData => this.cursos = apiData , error: e => console.error(e)});
  }

  onSelected(book: Curso): void {
    this.selected = true;
    this.selectedCurso = book;
  }

  getCertificates(): void {
    this.cursoService.GetCursos()
  }


  ngOnInit() {
    this.getCursos();
  }

}
