import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  constructor(private http: HttpClient) {}

  init() {
    return this.http.get('http://0.0.0.0:8080/api/planets/');
  }
}
