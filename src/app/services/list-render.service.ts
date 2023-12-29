import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAnimal } from '../interfaces/listRender';

@Injectable({
  providedIn: 'root',
})
export class ListRenderService {
  private apiUrl: string = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) {}

  remove(id: number) {
    return this.http.delete<IAnimal>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<IAnimal[]> {
    return this.http.get<IAnimal[]>(this.apiUrl);
  }

  getById(id: number): Observable<IAnimal> {
    return this.http.get<IAnimal>(`${this.apiUrl}/${id}`);
  }
}
