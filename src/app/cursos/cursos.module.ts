import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { CursosDetailComponent } from './cursos-detail/cursos-detail.component';


@NgModule({
  imports: [
    CommonModule],
  exports:[CursosListComponent],
  declarations: [CursosListComponent, CursosDetailComponent]
})
export class CursosModule { }
