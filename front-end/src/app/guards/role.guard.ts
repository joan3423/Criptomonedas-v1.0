import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { ConexionService } from '../services/conexion.service';

import decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {

    constructor(
        private conexionService: ConexionService,
        private router: Router,
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (localStorage.getItem('token')) {
            const token = <any | string>localStorage.getItem('token');
            const decoded = decode<any | string>(token);
            const expectedRole = route.data['expectedRole'];
            if (!this.conexionService.notLoged() || (decoded.role !== expectedRole)) {
                this.router.navigate([''])
                return false;
            }
            return true
        }
        this.router.navigate([''])
        return false
    }

}
