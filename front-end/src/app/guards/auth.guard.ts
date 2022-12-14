import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConexionService } from '../services/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    private conexionService: ConexionService,
    private router: Router
  ) {}
  canActivate(): boolean {
    if (!this.conexionService.notLoged()) {
      console.log('el token no es valido');
      this.router.navigate([''])
      return false;
    }
    return true
  }
  
}
