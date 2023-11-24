import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Curso } from './curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private apiUrl: string = environment.baseUrl + 'cursos';

constructor(private http: HttpClient) { }

GetCursos(): Observable<Curso[]> {return this.http.get<Curso[]>(this.apiUrl)};

}
