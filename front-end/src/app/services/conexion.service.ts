import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  url = 'http://localhost:3001'
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  newLogin(user: Users): Observable<any> {
    return this.http.post(`${this.url}/login`, user);
  }

}
