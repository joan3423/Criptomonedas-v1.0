import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ConexionService } from '../services/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class LogedGuard implements CanActivate {

  constructor (
    private conexionService: ConexionService,
    private router: Router
  ) {}
  canActivate(): boolean {
    if (!this.conexionService.isLoged()) {
        this.router.navigate(['dashboard'])
        return false;
      }
      return true
  }
  
}
