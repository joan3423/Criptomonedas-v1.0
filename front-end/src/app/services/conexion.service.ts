import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
import { JwtHelperService } from '@auth0/angular-jwt';
import { availablesCurrenciesList } from '../models/availablesCurrencies';
import { MyCurrencies } from '../models/myCurrencies';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  url = 'http://localhost:3001'

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.url}/users`);
  }

  getMycurrencies(): Observable<any> {
    return this.http.get(`${this.url}/mycurrencies`)
  }

  addCurrency(addCurrency: MyCurrencies): Observable<any> {
    const token = <any | string>localStorage.getItem('token');
    const decoded = decode<any | string>(token);
    return this.http.post(`${this.url}/mycurrencies`, { ...addCurrency, userId: decoded.id })
  }

  getAvailableCurrencies(): Observable<any> {
    return this.http.get(`${this.url}/availableCurrencies`)
  }

  newCurrency(currency: availablesCurrenciesList): Observable<any> {
    return this.http.post(`${this.url}/availableCurrencies`, currency);
  }

  getCountries(): Observable<any> {
    return this.http.get(`${this.url}/countries`)
  }

  newLogin(user: Users): Observable<any> {
    return this.http.post(`${this.url}/login`, user);
  }

  notLoged(): boolean {
    const token = localStorage.getItem('token');
    if ((token && this.jwtHelper.isTokenExpired(token)) || !localStorage.getItem('token')) {
      return false
    }
    return true
  }

  isLoged(): boolean {
    const token = localStorage.getItem('token');
    if ((token && !this.jwtHelper.isTokenExpired(token)) || localStorage.getItem('token')) {
      return false
    }
    return true
  }

}
